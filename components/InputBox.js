import { db, storage } from '@/firebase'
import { FaceSmileIcon } from '@heroicons/react/24/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/24/solid'
import { FieldValue, addDoc, collection, serverTimestamp, setDoc,doc} from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable, uploadString } from 'firebase/storage'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

function InputBox() {
  const {data:session}=useSession()  
  const inputRef=useRef(null)
  const filePickerRef=useRef(null)
  const [imageToPost,setImageToPost]=useState()
  const [fileName,setFileName]=useState()    
  const metadata = {
    contentType: 'image/jpeg'
  };
  

  const sendPost=async(e)=>{
    e.preventDefault()
    if(!inputRef.current.value)return
    await addDoc(collection(db,'posts'),{
    message:inputRef.current.value,
    name:session.user.name,
    email:session.user.email,
    image:session.user.image,
    timestamp:serverTimestamp()
    }).then(docm=>{
    if (imageToPost) {
       
      const storageRef = ref(storage,fileName);

      
      const message4 = 'data:text/plain;base64,5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
      uploadString(storageRef,imageToPost, 'data_url').then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {

          console.log('File available at', downloadURL);
          setDoc(doc(db, "posts", docm.id), { postImage:downloadURL }, { merge: true});
        });
          console.log('Uploaded a data_url string!');
      });

     
    removeImage();
  };
})
    inputRef.current.value=''
  }
/*
  getDownloadURL(uploadTask.snapshot.ref)
        .then((URL) => {
          //alert(URL)
           setDoc(doc(db, "posts", docm.id), { postImage:URL }, { merge: true});
        }); */
    const addImageToPost=(e)=>{
      const reader=new FileReader()
      if(e.target.files[0]){
        reader.readAsDataURL(e.target.files[0])
        const fileName=e.target.files[0].name
        setFileName(fileName)
      }
      reader.onload=(readerEvent)=>{
          setImageToPost(readerEvent.target.result)
      }
    }

    const removeImage=()=>{
      setImageToPost(null)
    }

  return (
    <div className='bg-white rounded-2xl p-2 mt-4 font-meduim shadow-md'>
      <div className='flex space-x-4 items-center p-4'>
        <Image
            className='rounded-full' 
            src={session.user.image}
            height={40}
            width={40}
            layout='fixed'

        />
       <form className='flex flex-1'>
        <input type='text' placeholder={`what's in your mind ${session.user.name} ?`} className='bg-gray-100 rounded-full flex-grow px-5 h-12 focus:outline-none' ref={inputRef}/>
        <button hidden type='submit' onClick={sendPost}>submit</button>
        </form>
        {imageToPost && 
        <div onClick={removeImage} className='flex flex-col filter hover:brigthness-110 transition duration-150 transform hover:scale-105 cursor-pointer'>
          <img src={imageToPost} className='h-10 object-contain'/>
          <p className='text-xs text-red-400 text-center'>remove</p>

        </div>
}
      </div>
      <div className='flex justify-evenly p-3 border-t'>
        <div className='inputIcon'>
            <VideoCameraIcon className='h-7 text-red-500' />
            <p className='text-xs sm:text-sm lg:text-base'>Live Video</p>
        </div>
        <div className='inputIcon' onClick={()=>filePickerRef.current.click()}>
            <CameraIcon className='h-7 text-green-400'/>
            <p className='text-xs sm:text-sm lg:text-base'>Photo/Video</p>
            <input type='file' onChange={addImageToPost} hidden ref={filePickerRef} />
        </div>
        <div className='inputIcon'>
        <FaceSmileIcon className='h-7 text-yellow-300' />    
        <p className='text-xs sm:text-sm lg:text-base'>Feeling/Activity</p>
        </div>
        

      </div>
    </div>
  )
}

export default InputBox
