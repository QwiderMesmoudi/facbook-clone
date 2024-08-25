
import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyByRQtMJwhA5iMIpaPdymplwLaLlj1npIY",

  authDomain: "facbook-clone-46750.firebaseapp.com",

  projectId: "facbook-clone-46750",

  storageBucket: "facbook-clone-46750.appspot.com",

  messagingSenderId: "548936248884",

  appId: "1:548936248884:web:26a88dd2a6e4e0c344e461",

  measurementId: "G-Y11XQ8VV6X"

};


  const app = !getApps().length ? initializeApp(firebaseConfig):getApp()
  const db=getFirestore(app)
  const storage=getStorage()

  export {db,storage}