import Image from 'next/image'
import React from 'react'

function Post({name,image,message,timestamp,postImage}) {
  
  return (
    <div className='flex flex-col max-h-screen'>
      <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
        <div className='flex items-center space-x-2'>
            <img className='rounded-full' src={image} height={40} width={40} />
            <div>
                <p className='font-md'>{name}</p>
                <p className='text-gray-400 text-xs'>{new Date(timestamp?.toDate()).toLocaleString()}</p>
            </div>
        </div>
        <p className='pt-4'>{message}</p>
        {
            postImage && (
                <div className='relative h-56 md:h-96 bg-white'>
                    <Image
                        src={postImage}
                        objectFit='cover'
                        layout='fill'
                    />
                </div>

            )
        }
      </div>
    </div>
  )
}

export default Post
