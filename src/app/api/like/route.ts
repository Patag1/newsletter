import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import { getCurrentUser } from '../user/route'
import axios from 'axios'
import { url } from '../news/route'
import { ApiReq } from '@/types/zod'

export async function PUT(req: NextRequest) {
  const { liked, art } = await req.json()

  const user = await getCurrentUser()

  if (!user) {
    return NextResponse.json({ err: 'Unauthorized' }, { status: 401 })
  }

  try {
    const likedArts = user.liked

    const [ article ] = await axios
      .get(url)
      .then((res) => res.data.articles)
      .then((data) => data.filter((article: ApiReq) => article.title === art.title))

    let updatedArts = []

    if (liked) {
      updatedArts = [...likedArts, article]
    } else {
      updatedArts = likedArts.filter(
        (likedArt) => JSON.stringify(likedArt) !== JSON.stringify(article)
      )
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        liked: updatedArts,
      },
    })

    return NextResponse.json({ status: 200 })
  } catch (_error) {
    return NextResponse.json({ status: 500 })
  }
}
