import axios from 'axios'
import { NextResponse } from 'next/server'

export const url = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${process.env.NEWS_API}`

export async function GET() {
  try {
    const news = await axios.get(url, {
      params: { language: 'en' },
    })

    return NextResponse.json(news.data)
  } catch (error) {
    return NextResponse.json({ status: 500 })
  }
}
