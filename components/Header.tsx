import React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import logomain from "./siteimages/logomain.png"
import "bootstrap-icons/font/bootstrap-icons.css"
import profilepic from "./siteimages/profilepic.svg"
import { profile } from "console"
import { signIn, signOut, useSession } from "next-auth/react"





function header() {
  const {data: session } = useSession();

  return (
    <div className="flex sticky top-0 z-50 md:px-8 py-2
                     backdrop-blur transition-colors duration-500 lg:z-50 border-b border-slate-900/10 dark:border-slate-50/[0.06] bg-white/75 supports-backdrop-blur:bg-white/60 dark:bg-transparent" >
        <div className="headerlogo relative h-10 w-20  flex-shrink-0 cursor-pointer">
        <Image  object-fit="cover" src={logomain} alt={""} />
        </div>

       <div className="group flex items-center mx-0 md:mx-10  px-3 xl:min-w-[250px] border border-black rounded-md shadow-sm hover:cursor-pointer ">
          <i className="bi bi-textarea-resize w-5 h-5 "></i>
          <p className="flex-1 hidden ml-1 lg:inline text-sm font-medium 	">Spaces</p>
          <i className="bi bi-arrow-down-square-fill group-hover:text-blue-700  pl-3 "></i>
      </div>
      {/* NAVBAR STARTS HERE! */}
      
      <nav className="flex flex-wrap items-center justify-between mx-1 lg:ml-20 px-5">
          <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a href="#" className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded" aria-current="page">home</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">news</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">contact</a>
              </li>
            </ul>
          </div>
       </nav>
        {/* NAVBAR ENDS HERE! */}

      <form className="group flex flex-1 md:flex-0.7 lg:flex-1 items-center px-2 space-x-2  border border-gray rounded-md hover:border-black">
          <i className="bi bi-search h-6 w-6 text-gray-400 group-hover:text-black text-sm font-medium"></i>
          <input className="flex-1 bg-transparent outline-none text-sm font-medium " type="text" placeholder="Search Meowdi"></input>
          <button type="submit" hidden />
      </form>

      <div className="hidden items-center space-x-2 mx-5 lg:inline-flex">
          <i className="headicon bi bi-app-indicator"></i>
          <i className="headicon bi bi-envelope-fill"></i>
          <i className="headicon bi bi-plus-square-dotted"></i>
      </div>
    
      <div className="group flex items-center justify-center space-x-2 mx-1  md:mx-5 md:px-2 lg:hidden border border-black rounded-md shadow-sm hover:bg-black"
                            onClick={() => signIn()}>
         <i className="headicon bi bi-arrows-expand group-hover:text-slate-50"></i>
      </div>
       
      {session ? (
        <div className=" relative hidden items-center sm:flex md:shrink-0 min-w-10 h-10 w-10 p-1 lg:pl-3 cursor-pointer border-4 border-inherit rounded-full"
             onClick={() => signOut()}>
        <Image 
        className="-z-1 rounded-full relative"
         fill object-fit="cover" src={session?.token?.picture? session.token.picture : profilepic} alt={session.user?.name}  />
        </div>
      ): (
        <div className="group hidden lg:flex flex-shrink-0 items-center px-2  xl:min-w-[50px] border border-black rounded-md shadow-sm hover:cursor-pointer "
            onClick={() => signIn()} >
          <i className="bi bi-person-plus-fill w-5 h-5"></i>
          <p className="flex-1 hidden ml-1 lg:inline text-sm font-medium 	">Sign In</p>
      </div>
      )}


     {/* <div className="group hidden lg:flex flex-shrink-0 items-center px-2  xl:min-w-[50px] border border-black rounded-md shadow-sm hover:cursor-pointer "
            onClick={() => signIn()} >
          <i className="bi bi-person-plus-fill w-5 h-5"></i>
          <p className="flex-1 hidden ml-1 lg:inline text-sm font-medium 	">Sign In</p>
      </div>
      <div className="flex relative items-center h-10 w-10 p-1 lg:pl-3 cursor-pointer border-4 border-inherit rounded-full">
          <Image objectFit="contain" src={profilepic} alt="profile"  layout="fill" />
      </div> */}

     

    </div>
  )
}

export default header