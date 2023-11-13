import React from 'react';
import { FaTwitterSquare } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';
import {FaXTwitter} from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-4 bg-black text-white">
      <div className='flex'>
        <a href="https://twitter.com/yourTwitter" target="_blank" className="text-white mr-4">
          <FaXTwitter size={30} />
        </a>
        {/* <a href="https://discord.com/yourDiscord" target="_blank" className="text-white">
          <BsDiscord size={30} />
        </a> */}
      </div>
      <div>
      © $RACCS 
      </div>
    </footer>
  );
};

export default Footer;
