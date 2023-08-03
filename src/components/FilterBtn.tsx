import { FC } from 'react'
import { IconType } from 'react-icons'

interface ArticleBtnProps {
  onClick: () => void
  active: boolean
  icon: IconType
}

const ArticleBtn: FC<ArticleBtnProps> = ({ onClick, active, icon: Icon }) => {
  return (
    <button onClick={onClick} className='p-1 bg-gray-100 border-2 border-gray-800 drop-shadow-btn rounded-md active:translate-x-1 active:translate-y-1 active:drop-shadow-none transition-all' disabled={active}>
        <Icon />
    </button>
  )
}

export default ArticleBtn