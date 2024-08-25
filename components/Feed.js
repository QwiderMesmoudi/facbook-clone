import React from 'react'
import Stories from './Stories'
import InputBox from './InputBox'
import Posts from './Posts'
import Widget from './Widget'

function Feed() {
  return (
    <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl my-2  h-screen  pb-24 scrollbar-hide flex-grow overflow-y-scroll '> 
      {/*Stories */}
      <Stories/>
      <InputBox/>
      <Posts/>
      
      {/*InputBox */}
      { /*Posts*/}
    </div>
  )
}

export default Feed
