import { Link } from 'next-view-transitions'
import * as motion from 'motion/react-client'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { BLOG_POSTS } from '@/lib/data'
import {
  VARIANTS_CONTAINER,
  VARIANTS_SECTION,
  TRANSITION_SECTION,
} from '@/lib/constants'

export default function BlogPage() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="bg-accent dark:bg-accent/80 size-full rounded-lg"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl p-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="text-accent-foreground">{post.title}</h4>
                  <p className="text-muted-foreground/80">{post.description}</p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
        <div className="pt-12">
          <Link href="/projects">Projects &#10097;</Link>
        </div>
      </motion.section>
    </motion.main>
  )
}
