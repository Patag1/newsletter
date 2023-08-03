import { FC, useState } from 'react'
import { ApiReq } from '@/types/zod'
import Link from 'next/link'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BiMinus, BiPlus, BiSolidShareAlt } from 'react-icons/bi'
import ArticleBtn from './ArticleBtn'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface ArticleProps {
  art: ApiReq
  key: number
}

const Article: FC<ArticleProps> = ({ art, key }) => {
  const [msg, setMsg] = useState('')
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)

  const router = useRouter()

  const handleLike = async () => {
    await axios
      .put('/like', {liked, id: art.title})
      .then(() => {
        setLiked(!liked)
        if (!liked) {
          setMsg('Liked!')
        } else {
          setMsg('')
        }
      })
      .catch(() => {
        router.push('/user/login')
        toast('Make sure to be logged in first!')
      })
  }

  const handleSave = async () => {
    await axios
      .put('/save', {saved, id: art.title})
      .then(() => {
        setSaved(!saved)
        if (!saved) {
          setMsg('Saved!')
        } else {
          setMsg('')
        }
      })
      .catch(() => {
        router.push('/user/signup')
        toast('Make sure to be logged in first!')
      })
  }

  const desc =
    (art.description &&
      art.description.length > 100 &&
      art.description.slice(0, 100).concat('...')) ||
    art.description

  return (
    <>
      <Link
        href={art.url}
        target="_blank"
        className="w-full max-h-44 py-4 max-w-prose flex justify-between items-start gap-6"
        key={key}
      >
        <div>
            <h4 className="font-extrabold">{art.title}</h4>
            <p>{desc}</p>
        </div>
        {art.urlToImage && (
          <img
            src={art.urlToImage}
            alt={art.title}
            className="w-64 aspect-video rounded-sm"
          />
        )}
      </Link>
      <div className="w-full py-2 px-4 flex justify-between items-center bg-gray-200 rounded-[2px_2px_0_0]">
        <p className='text-xs'>
            {art.author && `by ${art.author} | `}{art.publishedAt.slice(0, 10)}
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
            onClick={() => {}}
            iconBool={true}
            iconActive={BiSolidShareAlt}
            iconInactive={BiSolidShareAlt}
          />
        </div>
      </div>
      <div className="w-full border-b-2 border-gray-800 border-dotted"></div>
    </>
  )
}

export default Article
