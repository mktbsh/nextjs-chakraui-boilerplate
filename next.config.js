/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    ...require(`./config/common.json`),
    ...require(`./config/${process.env.APP_ENV || 'development'}.json`),
  },
}
