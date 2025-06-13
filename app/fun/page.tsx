import { GoBack } from '@/components/go-back'

export default function FunPage() {
  return (
    <>
      <div className="absolute top-8">
        <GoBack href="/" text="back " />
      </div>
      <div className="mx-auto flex w-full flex-col items-center justify-center text-center">
        <h1>Coming Soon..</h1>
      </div>
    </>
  )
}
