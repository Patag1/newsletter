import DateTime from '@/components/DateTime'
import NewsArticles from '@/components/NewsArticles'
import TopBtn from '@/components/TopBtn'
import { BiBadge } from 'react-icons/bi'
import { ImSpinner8 } from 'react-icons/im'
import UserMenu from '@/components/UserMenu'
import axios from 'axios'

export default async function Home() {
  const user = await axios
    .get('http://localhost:3000/api/user')
    .then((res) => res.data)

  console.log(user)

  return (
    <>
      <main className="md:my-8 md:mx-auto md:w-fit md:px-16 md:pt-8 p-8 pb-0 flex justify-center items-center flex-col gap-6 md:border-4 border-gray-800 md:rounded-[0.5rem_0.125rem_0.125rem_0.125rem] drop-shadow-sm bg-gray-100">
        <article className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-1">
            <BiBadge className="text-4xl" />
            <p className="text-2xl font-extrabold">Tech-I</p>
          </div>
          <DateTime />
        </article>
        <div className="border-b-4 border-dashed border-gray-800 w-full" />
        <div className="flex flex-col w-full">
          <h1 className="text-6xl font-bold w-full text-left">
            Welcome to <span className="text-rose-500">Tech-I</span>
          </h1>
          <p className="w-full text-left text-sm indent-4 italic">
            Your free daily dose of tech news
          </p>
        </div>
        <div className="border-b-4 border-dashed border-gray-800 w-full" />
        <p className="max-w-prose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quasi
          numquam ea enim iure voluptatibus non placeat, neque laudantium libero
          quis doloribus odio incidunt vero, magni odit qui hic nobis. <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          distinctio nobis iste! Eos officiis culpa nesciunt nihil laborum,
          officia quod, eius ducimus consequuntur aliquam accusamus consequatur,
          sequi ipsa voluptatum ea.
        </p>
        <div className="border-b-4 border-gray-800 w-full"></div>
        <NewsArticles />
        <ImSpinner8 className={'my-16 text-4xl animate-spin'} />
      </main>
      <TopBtn />
      <UserMenu user={user} />
    </>
  )
}
