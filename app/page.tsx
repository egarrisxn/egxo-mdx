import { Link } from 'next-view-transitions'
import * as motion from 'motion/react-client'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { MagneticSocialLink } from '@/components/magnetic-social-link'
import { ProjectVideo } from '@/components/project-video'
import { ProjectImage } from '@/components/project-image'
import { SeeMore } from '@/components/see-more'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from '@/lib/data'
import {
  VARIANTS_CONTAINER,
  VARIANTS_SECTION,
  TRANSITION_SECTION,
} from '@/lib/constants'

export default function Home() {
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
        <div className="flex-1">
          <p className="text-accent-foreground">
            Full Stack Developer & Digital Product Designer building thoughtful
            tools for the web and the world. Taking it one step at a time,
            guided by the PMAs (Positive Mental Attitude).
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Select Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.name} className="space-y-2">
              <div className="bg-accent-foreground/40 ring-muted/50 relative rounded-2xl p-0.5 shadow-md ring-1 ring-inset">
                <div className="hidden lg:block">
                  <ProjectVideo video={project.video} />
                </div>
                <div className="lg:hidden">
                  <ProjectImage
                    href={project.link}
                    thumbnail={project.thumbnail}
                  />
                </div>
              </div>
              <div className="px-1">
                <a
                  className="group text-foreground relative inline-block"
                  href={project.link}
                  target="_blank"
                >
                  {project.name}
                  <span className="bg-foreground absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 transition-all duration-200 group-hover:max-w-full"></span>
                </a>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-12">
          <SeeMore href="/projects" text="Explore more " />
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-3">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl p-0.5"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <div className="relative size-full rounded-2xl bg-white py-2 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between gap-x-6 sm:gap-0">
                  <div>
                    <h4 className="text-start text-zinc-900 dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-start text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-end text-zinc-600 dark:text-zinc-300">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog Posts</h3>
        <div className="flex flex-col">
          <AnimatedBackground
            enableHover
            className="bg-accent size-full rounded-lg"
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
          <SeeMore href="/posts" text="Read more " />
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="text-muted-foreground mb-5">
          Feel free to contact me at{' '}
          <a
            className="text-accent-foreground/80 underline"
            href={`mailto:${EMAIL}`}
          >
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
