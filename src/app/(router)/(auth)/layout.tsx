import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'

interface layoutProps {
  children: React.ReactNode
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <main className="relative w-full min-h-screen grid md:grid-cols-2 grid-cols-1 grid-rows-1 overflow-hidden">
      <Link
        href={'/'}
        className="z-20 fixed top-4 left-8 flex justify-center items-center gap-2 text-sm"
      >
        <AiOutlineArrowLeft />
        Back to home
      </Link>
      <article className="z-10 flex md:flex-row flex-col justify-center md:items-start items-center pt-32 gap-12 bg-gray-100 border-r-4 border-gray-800">
        {children}
        <div className="relative">
          <Image
            src={'/coffee.png'}
            alt="coffee"
            width={200}
            height={200}
            className="bg-[rgba(99,31,2,0.5)] rounded-[80%_30%_60%_30%]"
          />
          <div className="absolute -bottom-12 left-8 w-5 aspect-square bg-[rgba(99,31,2,0.5)] rounded-[30%_80%_30%_60%]"></div>
          <div className="absolute -bottom-8 w-7 aspect-square bg-[rgba(99,31,2,0.5)] rounded-[90%_45%_75%_60%]"></div>
          <div className="absolute bottom-12 -right-4 w-3 aspect-square bg-[rgba(99,31,2,0.5)] rounded-[90%_100%_60%_100%]"></div>
        </div>
      </article>
      <aside className="p-12 md:block hidden">
        <h1 className="font-extrabold text-[15vh] leading-none">
          <span className="underline underline-offset-8 decoration-rose-400">
            Explore
          </span>{' '}
          the new world one day at a time 📰
        </h1>
      </aside>
    </main>
  )
}

export default layout
