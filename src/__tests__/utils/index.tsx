import { ChakraProvider } from '@chakra-ui/react'
import { render } from '@testing-library/react'

import { theme } from '@/theme'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

const customRender = (ui: React.ReactElement, options?: any) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender }
