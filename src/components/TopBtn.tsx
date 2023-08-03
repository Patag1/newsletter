import { FC } from 'react'
import Link from 'next/link'
import { AiOutlineArrowUp } from 'react-icons/ai'

interface TopBtnProps {}

const TopBtn: FC<TopBtnProps> = ({}) => {
  return (
    <Link href={'/'} className='fixed bottom-4 left-8 p-2 bg-gray-100 rounded-md border-4 border-gray-800 drop-shadow-btn active:translate-x-1 active:translate-y-1 active:drop-shadow-none transition-all'>
        <AiOutlineArrowUp />
    </Link>
  )
}

export default TopBtn