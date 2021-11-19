import '@testing-library/jest-dom'

/* eslint  @typescript-eslint/naming-convention: 'off' */
// _NEXT_IMAGE_OPTのESLintエラー回避

process.env = {
  ...process.env,
  _NEXT_IMAGE_OPT: {
    deviceSizes: [320, 480, 768, 1024, 1200],
    imageSizes: [],
    domains: ['image.example.com'],
    path: '/_next/image',
    loader: 'default',
  } as any,
}
