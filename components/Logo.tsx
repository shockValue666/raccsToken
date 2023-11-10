import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center my-6 space-y-1 md:space-y-0 md:space-x-4'>
        <div className='flex-shrink-0 '>
            <Image src="/images/head_red.png" width={150} height={150} alt='$RACCS'/>
        </div>

        <div className="flex-shrink-0  my-[100px]">
            <Image src="/images/text_red.png" alt="Solraccs" width={200} height={50} />
        </div>
    </div>
  )
}

export default Logo