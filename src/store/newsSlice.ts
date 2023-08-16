import { create } from 'zustand'
import axios from 'axios'
import { toast } from 'sonner'
import { ApiReq } from '@/types/zod'
import { dbUser } from '@/types'

interface newsSliceProps {
  user: dbUser | null
  lang: string
  news: ApiReq[] | null
  res: number
  saved: ApiReq[] | null
  getCurrentUser: () => Promise<void>
  langChange: (lang: string) => void
  getNews: () => Promise<void>
  saveNews: (id: string) => Promise<void>
}

const apiKey = '9aff6f6f856246c6b693fee8ce809239' // ARREGLAR process.env.NEWS_API
const url = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`

export const newsSlice = create<newsSliceProps>((set, _get) => ({
  user: null,
  lang: 'en',
  news: null,
  res: 0,
  saved: null,
  getCurrentUser: async () => {
    await axios.get('/api/user').then((res) => {
      if (res.data.status !== 401) {
        set({ user: res.data })
      }
    })
  },
  langChange: (lang) => set({ lang }),
  getNews: async () => {
    await axios
      .get(url, {
        params: { language: /*get().lang*/ 'en' },
      })
      .then((res) => {
        set({ news: res.data.articles, res: res.data.totalResults })
      })
      .catch((_error) => {
        toast.error('Error fetching news!')
      })
  },
  saveNews: async (id) => {
    await axios
      .put(`/api/news/${id}`)
      .then(() => toast.success('Saved!'))
      .catch(() => toast.error('Error saving article!'))
  },
}))
