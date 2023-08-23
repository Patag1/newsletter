import { create } from 'zustand'
import axios from 'axios'
import { ApiReq } from '@/types/zod'

interface newsSliceProps {
  news: ApiReq[] | null
  res: number
  getNews: () => Promise<void>
}

export const newsSlice = create<newsSliceProps>((set, get) => ({
  user: null,
  news: null,
  res: 0,
  getNews: async () => {
    await axios
      .get('/api/news')
      .then((res) =>
        set({ news: res.data.articles, res: res.data.totalResults })
      )
    console.log(get().news)
  },
}))
