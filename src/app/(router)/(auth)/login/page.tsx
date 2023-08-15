'use client'

import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const router = useRouter()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (loading) return

    setLoading(true)

    return await axios
      .post('api/register', data)
      .then(() => {
        toast.success('Good news! Registered successfully!')
      })
      .catch(() => {
        toast.error('Oh no! Got bad news for you')
      })
      .finally(() => {
        setLoading(false)
        reset({
          email: '',
          password: '',
        })
        router.push('/')
      })
  }

  return (
    <form
      className="flex flex-col justify-center items-start gap-2 text-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4">
        <h1 className="text-6xl font-extrabold">Hello <span className='text-rose-400'>x2</span>!</h1>
        <p className="text-sm">Have a cup of coffee!</p>
      </div>
      <div className="relative flex justify-between items-center w-full gap-2">
        <label htmlFor="">
          Email <span className="text-rose-400">*</span>
        </label>
        <input
          type="email"
          {...register('email', {
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          })}
          className={`border-2 border-gray-800 rounded-md py-1 px-2 ${
            errors['email'] && 'border-rose-500'
          } disabled:cursor-not-allowed transition-all`}
          disabled={loading}
        />
        {errors['email'] && (
          <p className="absolute top-1 right-1 text-xs text-rose-500">
            required
          </p>
        )}
      </div>
      <div className="relative flex justify-between items-center w-full gap-2">
        <label htmlFor="">
          Password <span className="text-rose-500">*</span>
        </label>
        <input
          type="password"
          {...register('password', { required: true })}
          className={`border-2 border-gray-800 rounded-md py-1 px-2 ${
            errors['email'] && 'border-rose-500'
          } disabled:cursor-not-allowed transition-all`}
          disabled={loading}
        />
        {errors['password'] && (
          <p className="absolute top-1 right-1 text-xs text-rose-500">
            required
          </p>
        )}
      </div>
      <button
        type="submit"
        className="w-full mt-4 py-2 border-2 border-gray-800 rounded-md drop-shadow-btn bg-green-400 font-extrabold hover:brightness-105 active:translate-x-1 active:translate-y-1 active:drop-shadow-none disabled:cursor-not-allowed transition-all"
        disabled={loading}
      >
        Log in
      </button>
      <p className="text-sm w-full text-center text-gray-500">
        Don&apos;t have an account?{' '}
        <Link
          href={'/signup'}
          className="font-bold hover:underline hover:text-gray-800 underline-offset-2 decoration-2"
        >
          Sing up
        </Link>{' '}
        instead
      </p>
    </form>
  )
}

export default Page
