import { NextResponse } from 'next/server'
import axios from 'axios'
import { getCurrentUser } from '../../user/route'
import { Prisma } from '@prisma/client'

export async function PUT({ params }: { params: IParams }) {
  const { id } = params

  try {
    const user = await getCurrentUser()

    if (!user?.id) {
      return NextResponse.json({ err: 'Unauthorized' }, { status: 401 })
    }

    const article = await axios
      .get(`${process.env.NEWS_API!}&q=${id}`)
      .then((res) => res.data.articles[0])

    let saved = user.saved || []
    saved.push(article)

    await prisma?.user.update({
      where: { id: user.id },
      data: { saved: saved as Prisma.UserUpdateInput['saved'] },
    })

    return NextResponse.json({ msg: 'OK' }, { status: 200 })
  } catch (_err) {
    return NextResponse.json({ err: 'Internal Server Error' }, { status: 500 })
  }
}
