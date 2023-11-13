"use client";
import React, { useState } from 'react'
import eligibleAddresses from '../eligibleAddresses.json';
import ErrorMessage from './ErrorMessage';
import { useNotification } from '../contexts/NotificationContext';
import SuccessMessage from './SuccessMessage';
import { supabase } from '@/clients/supabaseclient';


const AirdropCheck = () => {

  const [address,setAddress] = useState<string|null>(null)
  const [addressIsEligible,setAddressIsEligible] = useState<string | null>(null)
  const [seeSubmitButton,setSeeSubmitButton] = useState(true)
  const { showNotification } = useNotification();


    const handleClick = async () =>{
        console.log("eimai aftos pou eimai")
        console.log("address: ",address)
        if(address!==null){
          const trimmedAddress = address.trim();

          const { data, error } = await supabase
            .from('addresses')
            .select('*')
            // .ilike('address', `%${trimmedAddress}%`);
            .ilike('address', `%${trimmedAddress}%`);


          // console.log("data: ",data," error: ",error)
          let isEligible
          if(data){
            if(data[0]){
              if(data[0].address == trimmedAddress){
                isEligible=true
                console.log("MATCH")
              }
            }
          }else{
            isEligible=false
            console.log("not match")
          }
          if(isEligible){
            setAddressIsEligible("yes");
            console.log("YOU ARE ELIGIBLE")
            setSeeSubmitButton(false)
          }else{
            setAddressIsEligible("no")
            console.log("YOU ARE NOT ELIGIBLE")
            showNotification("YOU ARE NOT ELIGIBLE", "error");
          }
        }
    }

    return (
      <div className="flex flex-col items-center my-8">
        <h2 className="text-2xl font-bold text-reddish mb-2 px-4 md:px-0">Check Your $RACCS Airdrop Eligibility</h2>
        <p className="mb-4 text-sm text-gray-600">Enter your address to see if you are eligible for the airdrop.</p>
        <input
          type="text"
          placeholder="Your Address"
          className="input input-bordered border-[#A80038] input-secondary w-full max-w-xs md:max-w-xl"
          onChange={e=>setAddress(e.target.value)}
        />
        <button className={`btn bg-[#A80038] my-8 ${seeSubmitButton ? "block" : "hidden"}`} onClick={handleClick}>Check Eligibility</button>
        
        {
          addressIsEligible == "yes" && (<><SuccessMessage/></>)
        }
        {
          addressIsEligible == "no" && (<ErrorMessage message='poutsa'/>)
        }
      </div>
    );
  };
  
  export default AirdropCheck;
  