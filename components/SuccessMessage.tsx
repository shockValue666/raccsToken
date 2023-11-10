// components/SuccessMessage.tsx
import confetti from 'canvas-confetti';
import React, { useEffect } from 'react'

const SuccessMessage = () => {
  const handleTwitterShare = () => {
    const tweet = encodeURIComponent("I'm eligible for the $RACCS airdrop! #Solana");
    const url = `https://twitter.com/intent/tweet?text=${tweet}`;
    window.open(url, '_blank');
  };

  // Trigger confetti on component load
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="text-xl font-bold mb-2 mt-6">Congratulations! You are eligible!</div>
      <button className="btn bg-[#A80038] mt-4" onClick={handleTwitterShare}>Share on Twitter</button>
    </div>
  );
};

export default SuccessMessage;
