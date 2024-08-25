import Image from 'next/image'
import React from 'react'

function StoryCard({name,src,profile}) {
  return (
    <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer p-3 overflow-x'>
        <Image 
           className='absolute rounded-full z-0 top-0 opacity-0 lg:opacity-100' 
           src={profile}
           width={40}
           height={40}
           layout='fixed'
           objectFit='cover'
           
           
           />
        <Image
        className='object-cover filter rounded-full lg:rounded-3xl brightness-75' 
        src={src}
        layout='fill'
        /> 
    </div>
  )
}

export default StoryCard
