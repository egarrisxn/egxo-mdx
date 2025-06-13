import * as motion from 'motion/react-client'
import { ProjectImage } from '@/components/project-image'
import { GoBack } from '@/components/go-back'
import { SeeMore } from '@/components/see-more'
import { PROJECTS } from '@/lib/data'
import {
  VARIANTS_CONTAINER,
  VARIANTS_SECTION,
  TRANSITION_SECTION,
} from '@/lib/constants'

export default function ProjectsPage() {
  return (
    <>
      <div className="absolute top-8">
        <GoBack href="/" text="back " />
      </div>
      <div className="mt-20">
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
            <h3 className="mb-12 text-lg font-medium">Select Projects</h3>
            <div className="grid grid-cols-1 gap-16">
              {PROJECTS.map((project) => (
                <div key={project.name} className="space-y-3">
                  <div className="bg-accent-foreground/40 ring-muted/50 relative rounded-2xl p-0.5 shadow-md ring-1 ring-inset">
                    <ProjectImage
                      href={project.link}
                      thumbnail={project.thumbnail}
                    />
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
            <SeeMore href="/posts" text="Blog " />
          </div>
        </motion.main>
      </div>
    </>
  )
}
