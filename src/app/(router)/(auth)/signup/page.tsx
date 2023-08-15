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

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
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
          name: '',
          email: '',
          password: '',
        })
        router.push('/login')
      })
  }

  return (
    <form
      className="flex flex-col justify-center items-start gap-2 text-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4">
        <h1 className="text-6xl font-extrabold">Hello!</h1>
        <p className="text-sm">Have a cup of coffee!</p>
      </div>
      <div className="relative flex justify-between items-center w-full gap-2">
        <label htmlFor="">
          Name <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          {...register('name', { required: true })}
          className={`border-2 border-gray-800 rounded-md py-1 px-2 ${
            errors['name'] && 'border-rose-500'
          } disabled:cursor-not-allowed transition-all`}
          disabled={loading}
        />
        {errors['name'] && (
          <p className="absolute top-1 right-1 text-xs text-rose-500">
            required
          </p>
        )}
      </div>
      <div className="relative flex justify-between items-center w-full gap-2">
        <label htmlFor="">
          Email <span className="text-rose-500">*</span>
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
        Sign up
      </button>
      <p className="text-sm w-full text-center text-gray-500">
        Already have an account?{' '}
        <Link
          href={'/login'}
          className="font-bold hover:underline hover:text-gray-800 underline-offset-2 decoration-2"
        >
          Log in
        </Link>{' '}
        instead
      </p>
    </form>
  )
}

export default Page
