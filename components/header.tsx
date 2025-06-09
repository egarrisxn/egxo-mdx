import Image from 'next/image'
import { Link } from 'next-view-transitions'
import { TextEffect } from '@/components/ui/text-effect'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <section>
        <Link
          href="/"
          className="text-foreground/80 hover:text-foreground font-bold"
        >
          &#9734; &#9734; &#9734; I&apos;m &#10096; Ethan &#10097;
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-accent-foreground/80"
          delay={0.5}
        >
          Developer // Designer
        </TextEffect>
      </section>
      <section>
        <Image
          src="/face.svg"
          alt="my face"
          width="50"
          height="50"
          quality={100}
          priority
        />
      </section>
    </header>
  )
}
