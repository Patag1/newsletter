'use client'

import { FC, useEffect, useState } from 'react'
import { newsSlice } from '@/store/newsSlice'
import Link from 'next/link'
import { FiUser } from 'react-icons/fi'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

interface UserMenuProps {}

const userLinks = [
  {
    label: 'profile',
    url: '/profile',
  },
  {
    label: 'log out',
    url: '/'
  }
]

const casualLinks = [
  {
    label: 'log in',
    url: '/login',
  },
  {
    label: 'sign up',
    url: '/signup',
  },
]

const UserMenu: FC<UserMenuProps> = ({}) => {
  const [active, setActive] = useState(false)
  const [loading, setLoading] = useState(false)

  const { user, getCurrentUser } = newsSlice()

  const router = useRouter()

  const handleActive = () => {
    setActive(!active)
  }

  const handleLogOut = async () => {
    if (loading) return

    setLoading(true)

    await signOut({ callbackUrl: `${window.location.origin}/login` })
      .then(() => {
        console.log('a')
        setLoading(false)
        router.refresh()
        toast.success('Logged out')
      })
      .catch(() => {
        console.log('b')
        toast.error('Oh no, bad news! Try again later')
      })
  }

  useEffect(() => {
    getCurrentUser()
  }, [getCurrentUser])

  console.log(user)

  return (
    <>
      <div
        className={`z-40 fixed md:bottom-4 bottom-8 right-8 w-16 aspect-square flex justify-center items-center text-4xl bg-gray-100 border-4 border-gray-800 drop-shadow-btn active:translate-x-1 active:translate-y-1 active:drop-shadow-none transition-all ease-in-out cursor-pointer ${
          active ? 'rounded-[1.5rem_.5rem_.5rem_.5rem]' : 'rounded-lg'
        }`}
        onClick={handleActive}
      >
        <FiUser />
      </div>
      <div className="z-30 fixed md:bottom-11 bottom-8 right-9 w-10 aspect-square flex justify-center items-center text-4xl bg-gray-100 border-4 border-gray-800 rounded-lg drop-shadow-btn"></div>
      <div
        className={`fixed md:bottom-7 bottom-8 right-11 w-160 bg-gray-100 border-4 border-gray-800 rounded-lg drop-shadow-btn transition-all ease-in-out ${
          active ? 'px-8 pt-6 pb-20 opacity-100' : 'p-4 opacity-0'
        } duration-300`}
      >
        <ul className="flex flex-col gap-4 text-xl font-extrabold">
          {user
            ? userLinks.map((l, i) =>
                l.label === 'log out' ? (
                  <li key={i}>
                    <button onClick={handleLogOut}>log out</button>
                  </li>
                ) : (
                  <li key={i}>
                    <Link
                      href={l.url}
                      className="hover:underline underline-offset-2 decoration-2"
                    >
                      {l.label}
                    </Link>
                  </li>
                )
              )
            : casualLinks.map((l, i) => (
                <li key={i}>
                  <Link
                    href={l.url}
                    className="hover:underline underline-offset-2 decoration-2"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
        </ul>
      </div>
    </>
  )
}

export default UserMenu
