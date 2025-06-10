import { Link } from 'next-view-transitions'
import * as motion from 'motion/react-client'
import { ProjectVideo } from '@/components/project-video'
import { PROJECTS } from '@/lib/data'
import {
  VARIANTS_CONTAINER,
  VARIANTS_SECTION,
  TRANSITION_SECTION,
} from '@/lib/constants'

export default function ProjectsPage() {
  return (
    <>
      <div className="absolute top-6">
        <Link href="/">&#10096; Back</Link>
      </div>
      <div className="mt-22">
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
            <h3 className="mb-12 text-lg font-medium">Selected Projects</h3>
            <div className="grid grid-cols-1 gap-16">
              {PROJECTS.map((project) => (
                <div key={project.name} className="space-y-2x p-2">
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
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
          <div className="pt-12">
            <Link href="/blog">Blog &#10097;</Link>
          </div>
        </motion.main>
      </div>
    </>
  )
}
