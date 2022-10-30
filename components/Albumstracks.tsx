import React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import "bootstrap-icons/font/bootstrap-icons.css"
import profilepic from "./siteimages/profilepic.svg"
import { profile } from "console"
import { signIn, signOut, useSession } from "next-auth/react"
import ProfileCard from "./ProfileCard"





function Albumstracks() {
  const {data: session } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [tracks, setTracks] = useState([]);

  const getMyPlaylists = async () => {
    const res = await fetch('/api/playlists');
    const {items} = await res.json();
    setPlaylists(items);
  };
  
  const getMyTracks = async () => {
    const res = await fetch('/api/tracks');
    const {items} = await res.json();
    setTracks(items);
  };
  

  return (
    <div className="flex-col p-10">
      <ProfileCard/>
      <div className="flex  justify-center space-x-8 w-[100%]">
        <button className="h-10 my-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => getMyPlaylists()}>Get All My Playlists</button>
        <button className="h-10 my-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => getMyTracks()}>Get My Top Tracks</button>
      </div>

    <div className='flex  justify-center'>
    <div className='group grid gap-1 grid-cols-1 sm:gap-4 sm:grid-cols-3 grid-rows-3 mx-1 md:mx-10   xl:min-w-[800px]' >
    {playlists.map((item, i) => (
        <div key={item.id} className="border flex-col justify-center items-center p-1 m-1 mb-0 rounded-md shadow-sm hover:cursor-pointer">
        <h1>{item.name}</h1>
        <img className='border rounded-sm shadow-sm' src={item.images[0]?.url} width="100%" />
        </div>
      
    ))} </div> </div>
    <div className='flex  justify-center'>
    <div className='group grid gap-4 grid-cols-3 grid-rows-3 mx-1 md:mx-10 xl:max-w-[800px]  xl:min-w-[800px]  ' >
    {tracks.map((item, i) => (
        <div key={item.id} className="border flex-col justify-center items-center p-1 m-1 mb-0 rounded-md shadow-sm hover:cursor-pointer">
        <h1>{item.name}</h1>
        <h1>{item.artists[0].name}</h1>
        <img className='border rounded-md shadow-sm' src={item.album?.images[0]?.url} width="100%" />
        </div>
      
    ))} </div> </div>
    </div>
  )
}

export default Albumstracks