import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

type PagenationControlsProps = {
  previousPath: string;
  nextPath: string
}

const btnStyles = 
  'className="text-white flex items-center gap-x-2 px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transtion text-sm"'

export default function PaginationControls({
  previousPath,
  nextPath
}: PagenationControlsProps) {
  return (
    <section className="flex justify-between w-full">
      {previousPath ? (
        <Link href={previousPath} className={btnStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ): (
        <div />
      )}

      {nextPath ? (
        <Link href={nextPath} className={btnStyles}>
          Next
          <ArrowRightIcon />
        </Link>
      ) : (
      <div />
      )}
    </section>
  )
}