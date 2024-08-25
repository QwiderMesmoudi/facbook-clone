import React from 'react'
import StoryCard from './StoryCard'

const stories=[
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
    name:'Jef Bezoz',
    src:'https://links.papareact.com/k2j',
    profile:'https://links.papareact.com/f0p'
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
function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {
        stories.map(story=><StoryCard key={story.src} src={story.src} name={story.name} profile={story.profile}/>)
      }
    </div>
  )
}

export default Stories
