import { MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { CameraIcon, EllipsisHorizontalIcon, VideoCameraIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'

const Contact=[
    {
      name:'Qwider Mesmoudi',
      src:'/msd.jpg',
      profile:'/qwd.jpg'
  
    },
    {
      name:'Elon mask',
      src:'https://links.papareact.com/4zn',
      profile:'https://links.papareact.com/kxk'
    },
    
  
    {
      name:'Mark zukerberg',
      src:'https://links.papareact.com/xql',
      profile:'https://links.papareact.com/snf'
    },
    {
  
      name:'Bill Gates',
      src:'https://links.papareact.com/4u4',
      profile:'https://links.papareact.com/zvy'
    }
  ]
function Widget() {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5 '>
    <div className='flex justify-between items-center text-gray-500 p-2'>
        <h2 className='text-xl'> Contact </h2>
      <div className='flex space-x-2'>
        <VideoCameraIcon className='h-6'/>
        <MagnifyingGlassIcon className='h-6'/>
        <EllipsisHorizontalIcon className='h-6'/>
      </div>
    </div>
    { Contact.map(contact=>
        (
    <div key={contact.src} className='cursor-pointer hover:bg-gray-200 rounded-2xl relative flex items-center space-x-3 p-2 '>
        
        <Image
        src={contact.profile}
        className='rounded-full h-10'
        height={10}
        width={40}
        
        
        objectFit='cover'
        layout='fixed'
        />
        
        
        <p className='text-sm'>{contact.name}</p>
        <div className='absolute bottom-2 left-7 h-2 w-2 bg-green-500 rounded-full animate-bounce'></div>
    </div>
    ))
    }
    </div>
  )
}

export default Widget
