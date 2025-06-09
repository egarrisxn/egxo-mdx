type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Quik|Res',
    description: 'AI-powered resume-to-website generator.',
    link: 'https://quikres.vercel.app/',
    video:
      'https://zknos4ss5a.ufs.sh/f/Bz7PmjuYTc3C1JZ1rClz0jpPentqV9SklJGwFOZXzmQsR43K',
    id: 'project1',
  },
  {
    name: 'ManyLinks',
    description: 'Single page link aggregator.',
    link: 'https://manylinks.vercel.app/',
    video:
      'https://zknos4ss5a.ufs.sh/f/Bz7PmjuYTc3C9vJM8SMYEGw31MjJTsHuRtarCDNYPBclo9dh',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelance',
    title: 'Full Stack Developer & Digital Product Designer',
    start: '2024',
    end: 'Present',
    link: 'https://egxo.dev',
    id: 'work1',
  },
  {
    company: 'Sway Bae',
    title: 'Creative Tech & Event Lead',
    start: '2023',
    end: 'Present',
    link: 'https://egxo.dev',
    id: 'work2',
  },
  {
    company: 'Armadillo Ale Works',
    title: 'Regional Account Manager',
    start: '2020',
    end: '2023',
    link: 'https://egxo.dev',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Truly Understanding MDX',
    description:
      'Wrap your brain around MDX and the benefits it has for the modern web',
    link: '/blog/truly-understanding-mdx',
    uid: 'blog-1',
  },
  {
    title: 'TypeScript is The New Norm',
    description:
      'Explore the Benefits and Features of TypeScript for building scalable applications',
    link: '/blog/typescript-is-the-new-norm',
    uid: 'blog-2',
  },
  {
    title: 'The Power of RSC',
    description:
      'Discover how React Server Components improves performance and reduces bundle size',
    link: '/blog/the-power-of-rsc',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/egarrisxn',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/eg___xo',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ethan-gx',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/eg__xo',
  },
]

export const EMAIL = 'egarrisxn@email.com'
