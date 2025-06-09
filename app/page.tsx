import Link from 'next/link'
import * as motion from 'motion/react-client'
import { Spotlight } from '@/components/ui/spotlight'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { MagneticSocialLink } from '@/components/magnetic-social-link'
import { ProjectVideo } from '@/components/project-video'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from '@/lib/data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

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
        <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.name} className="space-y-2">
              <div className="bg-accent-foreground/40 ring-muted/50 relative rounded-2xl p-1 ring-1 ring-inset">
                <ProjectVideo src={project.video} />
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
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="bg-muted/30 relative overflow-hidden rounded-2xl p-[1px]"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-700 blur-2xl dark:from-blue-100 dark:via-blue-200 dark:to-blue-50"
                size={64}
              />
              <div className="bg-background relative size-full rounded-[15px] p-4">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="text-accent-foreground font-normal">
                      {job.title}
                    </h4>
                    <p className="text-muted-foreground/80">{job.company}</p>
                  </div>
                  <p className="text-muted-foreground/90">
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
