'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { Link } from 'next-view-transitions'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between pr-0.5">
      <div>
        <Link href="/" className="text-foreground font-bold">
          {/* ➭ I'm Ethan. */} &#9734; &#9734; &#9734; I&apos;m &#10096; Ethan
          &#10097;
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-neutral-900 dark:text-neutral-100"
          delay={0.5}
        >
          Developer // Designer
        </TextEffect>
      </div>
      <Image
        src="/face.svg"
        alt="my face"
        width="50"
        height="50"
        quality={100}
        priority
      />
    </header>
  )
}
