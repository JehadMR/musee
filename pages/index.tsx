import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Albumstracks from '../components/Albumstracks'
import Header from '../components/Header'
import ProfileCard from '../components/ProfileCard'
import bodybackground from '../components/siteimages/bodybackground.avif'
import TopSongs from '../components/TopSongs'



const Home: NextPage = () => {
  const {data: session } = useSession();



  return (
    <>
    
      <Head>
        <title>musee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-[108rem] flex justify-end">
          <Image src={bodybackground} className="w-[71.75rem]  flex-none max-w-none" layout="intrinsic" />
        </div>
        </div>
        {/*Background Color Image ^^^ */}
        { /* <div className='grid grid-cols-1 grid-rows-6 my-4 md:grid-cols-12 md:grid-rows-1 md:gap-2 md:my-7 md:mx-5 '>
           <div className="row-start-2 row-end-6 col-start-1 md:col-start-1 md:col-end-9 md:row-start-1"><TopSongs/></div>
           <div className="row-start-1 row-end-1 md:col-start-9 md:col-end-13 md:row-start-1"> <ProfileCard/> </div>
          </div> */}

       
        <div className="grid overflow-hidden grid-cols-1 grid-rows-1 md:grid-cols-12 md:grid-rows-1 gap-2 bg-[#F6F5FA] h-full">
          <div className="box md:col-span-3 mt-3 ml-3"><TopSongs/></div>
          <div className="box md:col-span-7 mt-3">2</div>
          <div className="box md:col-span-2 mt-3 mr-3"><ProfileCard/></div>
        </div>
 
        

       

    
    </>
  )
}

export default Home
