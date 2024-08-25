import Image from 'next/image'
import React from 'react'
import { FlagIcon,  MagnifyingGlassIcon, PlayIcon, ShoppingCartIcon,ViewGridIcon,ChatIcon,ChevronDownIcon} from '@heroicons/react/24/outline';
import { BeakerIcon,HomeIcon,UserGroupIcon,ChatBubbleOvalLeftEllipsisIcon,BellIcon,Squares2x2, Squares2X2Icon} from '@heroicons/react/24/solid'
import HeaderIcon from './HeaderIcon';
import { signOut, useSession } from 'next-auth/react';

function Header() {
  const { data: session } = useSession()  
  return (
    <div className='flex items-center p-2 lg:px-5 shadow-md bg-white  z-50 sticky top-0'>
    <div className='flex items-center'>
      <Image onClick={signOut}
      src='https://links.papareact.com/5me'
      width={40}
      height={40}
      layout='fixed'
      />
      
      <div className='flex items-center ml-2 rounded-full bg-gray-100 p-2'>
        <MagnifyingGlassIcon className='h-5 text-gray-600'/>
                
        <input className=' hidden md:inline-flex flex items-center ml-2 bg-transparent outline-none placeholder-gray-500'
        type='text'placeholder='Search Facebook' />
      </div>
    </div>
    <div className='flex justify-center flex-grow'>
    <div className='flex space-x-5 md:space-x-2'>
      <HeaderIcon active Icon={HomeIcon} />
      <HeaderIcon Icon={FlagIcon}/>
      <HeaderIcon Icon={PlayIcon}/>
      <HeaderIcon Icon={ShoppingCartIcon}/>
      <HeaderIcon Icon={UserGroupIcon}/> 
    </div>
    </div>
    <div className='flex items-center sm:space-x-2 justify-end'>
      <Image
       className='rounded-full'
        src={session.user.image}
        width={40}
        height={40}
        layout='fixed'
        onClick={signOut}
      />
      <p className='font-semibold pr-3 whitespace-nowrap'>{session.user.name}</p>
      <Squares2X2Icon className='icon'/>
      <ChatBubbleOvalLeftEllipsisIcon className='icon'/>
      <BellIcon className='icon'/>
      <ChevronDownIcon className='icon'/>
      
    </div>

    </div>
  )
}

export default Header
