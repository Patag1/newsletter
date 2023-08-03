import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className='w-full min-h-screen grid grid-cols-2 grid-rows-1'>
      <article className='flex justify-center items-start pt-32 gap-12 bg-gray-100 border-r-4 border-gray-800'>
        <form className='flex flex-col justify-center items-start gap-2 text-sm'>
          <div className='mb-4'>
            <h1 className='text-6xl font-extrabold'>Welcome!</h1>
            <p className='text-sm indent-4'>Have a cup of coffee!</p>
          </div>
          <div className='flex justify-between items-center w-full'>
            <label htmlFor="">Name</label>
            <input type="text" className='border-2 border-gray-800 rounded-md py-1 px-2' />
          </div>
          <div className='flex justify-between items-center w-full'>
            <label htmlFor="">Email</label>
            <input type="email" className='border-2 border-gray-800 rounded-md py-1 px-2' />
          </div>
          <div className='flex justify-between items-center w-full'>
            <label htmlFor="">Password</label>
            <input type="password" className='border-2 border-gray-800 rounded-md py-1 px-2' />
          </div>
          <button type='submit' className='w-full mt-4 py-2 border-2 border-gray-800 rounded-md drop-shadow-btn bg-green-400 font-extrabold hover:brightness-105 active:translate-x-1 active:translate-y-1 active:drop-shadow-none transition-all'>Login</button>
          <p className='text-sm w-full text-center text-gray-500'>Already have an account? <Link href={'/user/register'} className='font-bold hover:underline hover:text-gray-800 underline-offset-2 decoration-2'>Register</Link> instead</p>
        </form>
        <div className='relative'>
          <Image src={'/coffee.png'} alt='coffee' width={200} height={200} className='bg-[rgba(99,31,2,0.5)] rounded-[80%_30%_60%_30%] border-x-2 border-[rgba(99,31,2,0.5)]' />
          <div className='absolute -bottom-12 left-8 w-5 aspect-square bg-[rgba(99,31,2,0.5)] rounded-[30%_80%_30%_60%] border-x-2 border-[rgba(99,31,2,0.5)]'></div>
          <div className='absolute -bottom-8 w-7 aspect-square bg-[rgba(99,31,2,0.5)] rounded-[90%_45%_75%_60%] border-x-2 border-[rgba(99,31,2,0.5)]'></div>
          <div className='absolute bottom-12 -right-4 w-3 aspect-square bg-[rgba(99,31,2,0.5)] rounded-[90%_45%_75%_60%] border-x-2 border-[rgba(99,31,2,0.5)]'></div>
        </div>
      </article>
    </main>
  )
}

export default page