import Link from 'next/link'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <form className="flex flex-col justify-center items-start gap-2 text-sm">
      <div className="mb-4">
        <h1 className="text-6xl font-extrabold">Hello x2!</h1>
        <p className="text-sm">Have a cup of coffee!</p>
      </div>
      <div className="flex justify-between items-center w-full gap-2">
        <label htmlFor="">
          Email <span className="text-rose-400">*</span>
        </label>
        <input
          type="email"
          className="border-2 border-gray-800 rounded-md py-1 px-2"
        />
      </div>
      <div className="flex justify-between items-center w-full gap-2">
        <label htmlFor="">
          Password <span className="text-rose-400">*</span>
        </label>
        <input
          type="password"
          className="border-2 border-gray-800 rounded-md py-1 px-2"
        />
      </div>
      <button
        type="submit"
        className="w-full mt-4 py-2 border-2 border-gray-800 rounded-md drop-shadow-btn bg-green-400 font-extrabold hover:brightness-105 active:translate-x-1 active:translate-y-1 active:drop-shadow-none transition-all"
      >
        Login
      </button>
      <p className="text-sm w-full text-center text-gray-500">
        Don&apos;t have an account?{' '}
        <Link
          href={'/user/register'}
          className="font-bold hover:underline hover:text-gray-800 underline-offset-2 decoration-2"
        >
          Register
        </Link>{' '}
        instead
      </p>
    </form>
  )
}

export default page
