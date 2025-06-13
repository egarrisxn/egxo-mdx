import { Link } from 'next-view-transitions'
import { ArrowRight } from 'lucide-react'

interface SeeMoreProps {
  href: string
  text: string
}

export function SeeMore({ href, text }: SeeMoreProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-row items-center gap-1"
    >
      <p className="text-foreground/90 group-hover:text-foreground">{text}</p>
      <ArrowRight
        width={16}
        height={16}
        strokeWidth={2}
        className="text-foreground mt-0.5 -translate-x-0.5 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:scale-x-105"
      />
    </Link>
  )
}
