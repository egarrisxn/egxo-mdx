export const SITE_TITLE = 'EGXO | MDX'
export const SITE_DESC = 'EGXO MDX 2025!'
export const SITE_URL = 'https://egxo-mdx.vercel.app'
export const SITE_HANDLE = '@eg___xo'

export const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}
export const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}
export const TRANSITION_SECTION = {
  duration: 0.3,
}
