'use client'

import { useEffect } from 'react'
import { newsSlice } from '@/store/newsSlice'
import Article from './Article'

const NewsArticles = () => {
  const { news, res, getNews } = newsSlice()

  useEffect(() => {
    getNews()
  }, [])

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-center items-center gap-2">
        <div className="w-full border-b-2 border-gray-800 border-dotted"></div>
        <span className="mr-2 text-sm whitespace-nowrap tabular-nums">
          {res} results
        </span>
      </div>
      <div className="flex flex-col gap-8">
        {news && news.map((art, i) => <Article art={art} key={i} />)}
      </div>
    </div>
  )
}

export default NewsArticles
