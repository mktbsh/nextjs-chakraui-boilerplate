type Config = {
  [key: string]: string | undefined
}

export const siteConfig: Config = {
  title: process.env.SITE_TITLE,
  stage: process.env.STAGE || 'dev',
  version: process.env.VERSION,
  baseURL: process.env.BASE_URL,
} as const
