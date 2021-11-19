const fs = require('fs')

const tsconfig = require('./tsconfig.json')

const baseUrl = tsconfig.compilerOptions.baseUrl
const folders = fs.readdirSync(baseUrl, { withFileTypes: true }).flatMap((el) => {
  return el.isDirectory() ? [el.name] : []
})

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
const config = {
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.js?(x)', '**/*.test.ts?(x)'],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/utils/setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/src/__tests__/utils/', '<rootDir>/node_modules/', '<rootDir>/.next/'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        sourceMaps: true,
        module: {
          type: 'commonjs',
        },
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  moduleNameMapper: folders.reduce((mapper, folder) => {
    return {
      ...mapper,
      [`^@/(.*)$`]: `<rootDir>/src/$1`,
    }
  }, {}),
}

module.exports = config
