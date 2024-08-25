import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

function Login() {
  return (
    <div className='grid place-items-center'>
      <Image 
      src='https://links.papareact.com/t4i' 
      width={400}
      height={400}
      objectFit='contain'
      />
      <h1 className='cursor-pointer p-5 bg-blue-500 text-white text-center rounded-full' onClick={signIn}>Sign In</h1>
    </div>
  )
}

export default Login
