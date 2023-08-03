import { create } from 'zustand'
import axios from 'axios'
import toast from 'react-hot-toast'
import { ApiReq } from '@/types/zod'

interface newsSliceProps {
  lang: string
  news: ApiReq[] | null
  res: number
  saved: ApiReq[] | null
  langChange: (lang: string) => void
  getNews: () => Promise<void>
  saveNews: (id: string) => Promise<void>
}

const url = `https://newsapi.org/v2/top-headlines?category=technology`
const apiKey = '9aff6f6f856246c6b693fee8ce809239' // ARREGLAR

export const newsSlice = create<newsSliceProps>((set, get) => ({
  lang: 'en',
  news: null,
  res: 0,
  saved: null,
  langChange: (lang) => set({ lang }),
  getNews: async () => {
    await axios
      .get(url, { params: { language: get().lang, apiKey } })
      .then((res) =>
        set({ news: res.data.articles, res: res.data.totalResults })
      )
      .catch(() => toast.error('Error fetching news!'))
  },
  saveNews: async (id) => {
    await axios
      .put(`/api/news/${id}`)
      .then(() => toast.success('Saved!'))
      .catch(() => toast.error('Error saving article!'))
  },
}))
