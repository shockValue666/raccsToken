import React, { useEffect, useState } from 'react'
import { useNotification } from '../contexts/NotificationContext';

interface ErrorMessageProps{
    message:string
}

const ErrorMessage:React.FC<ErrorMessageProps> = ({message}) => {

    const { notification, hideNotification } = useNotification();
    const [isActive,setIsActive] = useState(false)

    useEffect(() => {
        if (notification) {
          setIsActive(true);
          // Automatically hide the notification after some time
          const timer = setTimeout(() => {
            setIsActive(false);
          }, 3000);
          return () => clearTimeout(timer);
        }
      }, [notification]);
    
      useEffect(() => {
        if (!isActive && notification) {
          const timer = setTimeout(() => {
            hideNotification();
          }, 500); // Should match the CSS transition duration
          return () => clearTimeout(timer);
        }
      }, [isActive, hideNotification, notification]);

    if (!notification) return null;

  return (
    <div>
        <div className={`alert alert-error notification  ${isActive ? 'active' : ''} w-[100%] md:w-[50%]`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{notification.message}</span>
            {/* <button className='rounded border border-black p-4' onClick={()=>setIsActive(false)}>x</button> */}
        </div>
    </div>
  )
}

export default ErrorMessage