import { getProviders, signIn } from "next-auth/react"
import React from "react"
import logomain from "../components/siteimages/logomain.png"




function SignIn({ providers }) {
  return (
<div className="m-auto xl:container px-12 sm:px-0 mx-auto">
<div className="mx-auto h-full sm:w-max">
    <div className="m-auto  py-12">
      <div className="space-y-4">
        <a href="">
          <img src="https://www.svgrepo.com/show/94187/sound-waves.svg" className="w-20 dark:hidden" alt="tailus logo" />
          <img src="https://www.svgrepo.com/show/94187/sound-waves.svg" className="w-20 hidden dark:block" alt="tailus logo" />
        </a>
      </div>
    <div className="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
      <h3 className="text-2xl font-semibold text-gray-700 dark:text-white">Login to your account</h3>
      <div className="mt-12 flex flex-wrap sm:grid gap-6 grid-cols-2">
        <button
          className="w-full h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700"
          onClick={() => signIn('spotify')}
        >
          <div className="w-max mx-auto flex items-center justify-center space-x-4">
          <img className="w-5" src="https://www.svgrepo.com/show/299472/spotify.svg" alt="Spotify logo"/>
            <span className="block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white"
              >Spotify</span
            >
          </div>
        </button>
        <button
          className="w-full h-11 rounded-full bg-gray-900 px-6 transition hover:bg-gray-800 focus:bg-gray-700 active:bg-gray-600 dark:bg-gray-700 dark:border dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700"
        >
          <div className="w-max mx-auto flex items-center justify-center space-x-4 text-white">
            <img src="https://www.svgrepo.com/show/349299/apple-music.svg" className="w-5" />
            <span className="block w-max text-sm font-semibold tracking-wide text-white"
              >Apple Music</span
            >
          </div>
        </button>
      </div>

      <form action="" className="mt-10 space-y-8 dark:text-white">
        <div>
          <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
            <input id="" type="email" placeholder="Your email or user name" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"/>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
            <input id="" type="Your password" placeholder="Your password" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition"/>
          </div>
          <button type="reset" className="-mr-3 w-max p-3">
            <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">Forgot password ?</span>
          </button>
        </div>

        <div>
          <button
            className="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
          >
            <span className="text-base font-semibold text-white dark:text-gray-900">Login</span>
          </button>
          <button href={"#"} type="reset" className="-ml-3 w-max p-3">
            <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">Create Password from settings</span>
          </button>
        </div>
      </form>
    </div>
      <div className="border-t pt-12 text-gray-500 dark:border-gray-800">
        <div className="space-x-4 text-center">
          <span>&copy; musee</span>
          <a href={"#"} className="text-sm hover:text-sky-900 dark:hover:text-gray-300">Contact</a>
          <a href={"#"} className="text-sm hover:text-sky-900 dark:hover:text-gray-300">Privacy & Terms</a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default SignIn

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}


