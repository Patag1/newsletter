'use client'

import { FC, useEffect, useState } from 'react'

interface DateTimeProps {}

const DateTime: FC<DateTimeProps> = ({}) => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
  
    return () => clearInterval(interval)
  }, [])
  
  const formatTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  const day = time.getDate()
  const month = time.getMonth()
  const year = time.getFullYear()
  const formatDate = `${day}/${month}/${year}`

  return (
    <p className='text-sm tabular-nums'>
        {formatDate} | {formatTime}
    </p>
  )
}

export default DateTime