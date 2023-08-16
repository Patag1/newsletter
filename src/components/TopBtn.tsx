'use client'

import { FC, useEffect, useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

interface TopBtnProps {}

const TopBtn: FC<TopBtnProps> = ({}) => {
  const [scrollPos, setScrollPos] = useState(0)

  const handleScroll = () => {
    setScrollPos(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`${
        scrollPos > 250 ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } fixed md:bottom-4 bottom-8 left-8 p-2 bg-gray-100 rounded-md border-4 border-gray-800 drop-shadow-btn active:translate-x-1 active:translate-y-1 active:drop-shadow-none transition-all ease-in-out cursor-pointer`}
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <AiOutlineArrowUp />
    </div>
  )
}

export default TopBtn
