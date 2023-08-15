'use client'

import { FC } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

interface TopBtnProps {}

const TopBtn: FC<TopBtnProps> = ({}) => {
  return (
    <div
      className="fixed md:bottom-4 bottom-8 left-8 p-2 bg-gray-100 rounded-md border-4 border-gray-800 drop-shadow-btn active:translate-x-1 active:translate-y-1 active:drop-shadow-none transition-all ease-in-out cursor-pointer"
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <AiOutlineArrowUp />
    </div>
  )
}

export default TopBtn
