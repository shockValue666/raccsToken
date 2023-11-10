"use client";
import React, { useState } from 'react'
import eligibleAddresses from '../eligibleAddresses.json';
import ErrorMessage from './ErrorMessage';
import { useNotification } from '../contexts/NotificationContext';
import SuccessMessage from './SuccessMessage';


const AirdropCheck = () => {

  const [address,setAddress] = useState<string|null>(null)
  const [addressIsEligible,setAddressIsEligible] = useState<string | null>(null)
  const [seeSubmitButton,setSeeSubmitButton] = useState(true)
  const { showNotification } = useNotification();


    const handleClick = () =>{
        console.log("eimai aftos pou eimai")
        console.log("address: ",address)
        if(address!==null){
          const isEligible = eligibleAddresses.includes(address)
          if(isEligible){
            setAddressIsEligible("yes");
            console.log("YOU ARE ELIGIBLE")
            setSeeSubmitButton(false)
          }else{
            setAddressIsEligible("no")
            console.log("YOU AREN'T ELIGIBLE")
            showNotification("YOU AREN\'T ELIGIBLE', 'error");
          }
        }
    }

    return (
      <div className="flex flex-col items-center my-8">
        <h2 className="text-2xl font-bold text-reddish mb-2 px-4 md:px-0">Check Your $RACCS Airdrop Eligibility</h2>
        <p className="mb-4 text-sm text-gray-600">Enter your address to see if you're eligible for the airdrop.</p>
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
  