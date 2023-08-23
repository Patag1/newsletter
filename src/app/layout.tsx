import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import { SkeletonTheme } from 'react-loading-skeleton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tech-I',
  description: 'Your daily tech newsletter',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-gray-300 text-gray-800">
      <body className={`${inter.className} relative`}>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          {children}
        </SkeletonTheme>
        <Toaster position="bottom-center" />
      </body>
    </html>
  )
}
