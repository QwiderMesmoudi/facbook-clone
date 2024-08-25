import Image from 'next/image'
import React from 'react'

function SidebarRow({src,Icon,title}) {
  return (
    <div className='flex items-center p-4 space-x-2'>
      {
        src && 
            (
                <Image
                className='rounded-full'
                src={src}
                width={30}
                height={30}
                layout='fixed'
                />

            )
        

      }
      
      {

    Icon && (
        <Icon className='h-8 w-8 text-blue-500'/>
    )

      }
      <p className='font-meduim hidden sm:inline-flex'>{title}</p>
    </div>
  )
}

export default SidebarRow
