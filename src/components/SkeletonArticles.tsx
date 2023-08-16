import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface SkeletonArticlesProps {
  cards: number
}

const SkeletonArticles: FC<SkeletonArticlesProps> = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      // <SkeletonTheme baseColor="#202020" highlightColor="#444">
      // </SkeletonTheme>
      <div className="flex flex-col gap-4" key={i}>
        <div className="w-full md:pb-4 pt-6 max-w-prose flex md:flex-row flex-col md:justify-between md:items-start gap-4">
          <div>
            <h4>
              <Skeleton count={2} />
            </h4>
            <p>
              <Skeleton count={3} />
            </p>
          </div>
          <Skeleton className="md:w-64 w-full aspect-video rounded-sm" />
        </div>
        <div className="w-full py-2 px-4">
          <Skeleton />
        </div>
      </div>
    ))
}

export default SkeletonArticles
