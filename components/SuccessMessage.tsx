// components/SuccessMessage.tsx
// import confetti from 'canvas-confetti';
import Confetti from 'react-dom-confetti';

import React, { useEffect, useState } from 'react'

const SuccessMessage = () => {
  const [confettiActive, setConfettiActive] = useState(false);

  
  const handleTwitterShare = () => {
    const tweet = encodeURIComponent("I'm eligible for the $RACCS airdrop! #Solana");
    const url = `https://twitter.com/intent/tweet?text=${tweet}`;
    window.open(url, '_blank');
  };


  // Trigger confetti on component load
  useEffect(() => {
    // confetti({
    //   particleCount: 100,
    //   spread: 70,
    //   origin: { y: 0.6 }
    // });

    setConfettiActive(true);

    // Optionally, turn off confetti after a few seconds
    const timer = setTimeout(() => setConfettiActive(false), 3000);
    return () => clearTimeout(timer);


  }, []);

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };


  return (
    <div className='flex flex-col justify-center items-center'>
      <Confetti active={confettiActive} config={config} />
      <div className="text-xl font-bold mb-2 mt-6">Congratulations! You are eligible!</div>
      <button className="btn bg-[#A80038] mt-4" onClick={handleTwitterShare}>Share on Twitter</button>
    </div>
  );
};

export default SuccessMessage;
