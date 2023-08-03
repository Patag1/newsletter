import TopBtn from '@/components/TopBtn'
import { FC } from 'react'

interface layoutProps {
  children: React.ReactNode
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <TopBtn />
    </>
  )
}

export default layout