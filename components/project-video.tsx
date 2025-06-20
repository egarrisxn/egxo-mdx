import { XIcon } from 'lucide-react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'

type ProjectVideoProps = {
  video: string
}

export function ProjectVideo({ video }: ProjectVideoProps) {
  return (
    <>
      <MorphingDialog
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.3,
        }}
      >
        <MorphingDialogTrigger>
          <video
            src={video}
            autoPlay
            loop
            muted
            className="hidden aspect-video w-full rounded-xl lg:block lg:cursor-zoom-in"
          />
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
          <MorphingDialogContent className="bg-background ring-accent/50 relative hidden aspect-video rounded-2xl p-1 ring-1 ring-inset lg:block">
            <video
              src={video}
              autoPlay
              loop
              muted
              className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
            />
          </MorphingDialogContent>
          <MorphingDialogClose
            className="fixed top-6 right-6 hidden size-fit rounded-full bg-white p-1 lg:block"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { delay: 0.3, duration: 0.1 },
              },
              exit: { opacity: 0, transition: { duration: 0 } },
            }}
          >
            <XIcon className="text-muted-foreground/80 size-5" />
          </MorphingDialogClose>
        </MorphingDialogContainer>
      </MorphingDialog>
    </>
  )
}
