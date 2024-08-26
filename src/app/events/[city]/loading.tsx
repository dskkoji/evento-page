import SkeletonCard from '@/components/skeleton-card'

export default function Loading() {
  return (
    <div className="flex flex-wrap justify-center max-w-[1200px] mx-auto px-[20px]">
      {Array.from({ length: 6 }).map((item, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}