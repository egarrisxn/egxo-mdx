import { TextLoop } from '@/components/ui/text-loop'
import { ThemeSwitch } from '@/components/theme-switch'

export function Footer() {
  return (
    <footer className="border-border mt-24 border-t py-4">
      <div className="flex items-center justify-between">
        <section>
          <a href="https://github.com/egarrisxn" target="_blank">
            <TextLoop className="text-muted-foreground text-xs">
              <span>egxo.dev 2025</span>
              <span>Built with Motion-Primitives.</span>
            </TextLoop>
          </a>
        </section>
        <section className="text-muted-foreground text-xs">
          <ThemeSwitch />
        </section>
      </div>
    </footer>
  )
}
