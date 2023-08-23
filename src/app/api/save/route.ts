import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import { getCurrentUser } from '../user/route'
import axios from 'axios'
import { url } from '../news/route'
import { ApiReq } from '@/types/zod'

export async function PUT(req: NextRequest) {
  const { saved, art } = await req.json()

  const user = await getCurrentUser()

  console.log(user)

  if (!user) {
    return NextResponse.json({ status: 401 })
  }
  
  try {
    const savedArts = user.saved
    
    const article = await axios
      .get(url)
      .then((res) => res.data.articles)
      .then((data) => data.filter((article: ApiReq) => article.title === art.title))

    let updatedArts = []

    if (saved) {
      updatedArts = [...savedArts, article]
    } else {
      updatedArts = savedArts.filter(
        (savedArt) => JSON.stringify(savedArt) !== JSON.stringify(article)
      )
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        saved: updatedArts,
      },
    })

    return NextResponse.json({ msg: 'OK' }, { status: 200 })
  } catch (_error) {
    return NextResponse.json({ err: 'Internal Server Error' }, { status: 500 })
  }
}
