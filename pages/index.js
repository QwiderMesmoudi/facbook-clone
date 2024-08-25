import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import { signIn, useSession } from "next-auth/react";
import Login from "@/components/Login";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Widget from "@/components/Widget";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession()  
  if (!session) { 
    return <Login/>
    
  }
  return (
    
   <div className="h-screen  bg-gray-100 overflow-hidden ">
    <Head>
      <title>Facbook</title>
    </Head>
    <Header/>
    <main className="flex">
      <Sidebar/>
      <Feed/>
      <Widget/>
      {/*widget */}
    </main>
   </div>
  );
}
