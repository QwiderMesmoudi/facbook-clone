import { db } from '@/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import Post from './Post';

function Posts() {
  const [realtimepost,loading,error]=useCollection(
    
       collection(db, "posts"), orderBy("timestamp", "desc")
      )
  
  return (
    <div className='flex flex-col'>
      {
        realtimepost?.docs.map((doc)=>
        <Post 
            key={doc.id}
            name={doc.data().name}
            message={doc.data().message}
            email={doc.data().email}
            image={doc.data().image}
            postImage={doc.data().postImage}
            timestamp={doc.data().timestamp}
        
        />)
      }
      
    </div>
  )
}

export default Posts
