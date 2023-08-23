import { FC, useState } from 'react'
import { ApiReq } from '@/types/zod'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from 'sonner'
import Link from 'next/link'
import ArticleBtn from './ArticleBtn'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BiMinus, BiPlus, BiSolidShareAlt } from 'react-icons/bi'

interface ArticleProps {
  art: ApiReq
}

const Article: FC<ArticleProps> = ({ art }) => {
  const [msg, setMsg] = useState('')
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)

  const router = useRouter()

  const handleLike = async () => {
    await axios
      .put('/api/like', { liked, art })
      .then(() => {
        setLiked(!liked)
        if (!liked) {
          setMsg('Liked!')
        } else {
          setMsg('')
        }
      })
      .catch(() => {
        router.push('/login')
        toast('Make sure to be logged in first!')
      })
  }

  const handleSave = async () => {
    await axios
      .put('/api/save', { saved, art })
      .then(() => {
        setSaved(!saved)
        if (!saved) {
          setMsg('Saved!')
        } else {
          setMsg('')
        }
      })
      .catch(() => {
        router.push('/login')
        toast('Make sure to be logged in first!')
      })
  }

  const handleShare = () => {}

  const desc =
    (art.description &&
      art.description.length > 100 &&
      art.description.slice(0, 100).concat('...')) ||
    art.description

  return (
    <div className={`flex flex-col ${!art.urlToImage && 'gap-4'}`}>
      <Link
        href={art.url}
        target="_blank"
        className="w-full h-fit md:pb-4 pt-6 max-w-prose flex md:flex-row flex-col md:justify-between md:items-start gap-4"
      >
        <div>
          <h4 className="font-extrabold hover:underline">{art.title}</h4>
          <p>{desc}</p>
        </div>
        {art.urlToImage && (
          <img
            src={art.urlToImage}
            alt={art.title}
            className="md:w-64 w-full aspect-video rounded-sm hover:scale-105 transition-all ease-in-out duration-200"
          />
        )}
      </Link>
      <div className="w-full py-2 px-4 flex justify-between items-center bg-gray-200 rounded-[2px_2px_0_0] border-b-2 border-gray-800 border-dotted">
        <p className="text-xs hidden md:block">
          {art.author && `by ${art.author} | `}
          {art.publishedAt.slice(0, 10)}
        </p>
        <p className="text-xs block md:hidden">
          {art.author && `by ${art.author}`}
          <br />
          {art.publishedAt.slice(0, 10)}
        </p>
        <div className="flex justify-center items-center gap-2">
          <p>{msg}</p>
          <ArticleBtn
            onClick={handleLike}
            iconBool={liked}
            iconActive={AiFillHeart}
            iconInactive={AiOutlineHeart}
          />
          <ArticleBtn
            onClick={handleSave}
            iconBool={saved}
            iconActive={BiMinus}
            iconInactive={BiPlus}
          />
          <ArticleBtn
            onClick={handleShare}
            iconBool={true}
            iconActive={BiSolidShareAlt}
            iconInactive={BiSolidShareAlt}
          />
        </div>
      </div>
    </div>
  )
}

export default Article
