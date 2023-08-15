import { FC } from 'react'
import { IconType } from 'react-icons'

interface ArticleBtnProps {
  onClick: () => void
  iconBool: boolean
  iconActive: IconType
  iconInactive: IconType
}

const ArticleBtn: FC<ArticleBtnProps> = ({
  onClick,
  iconBool,
  iconActive: Icon1,
  iconInactive: Icon2,
}) => {
  return (
    <button
      onClick={onClick}
      className="p-1 bg-gray-100 border-2 border-gray-800 drop-shadow-btn rounded-md active:translate-x-1 active:translate-y-1 active:drop-shadow-none transition-all ease-in-out"
    >
      {iconBool ? <Icon1 /> : <Icon2 />}
    </button>
  )
}

export default ArticleBtn
