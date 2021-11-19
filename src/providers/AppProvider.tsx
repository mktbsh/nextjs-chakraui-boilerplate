import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '@/theme'

type Props = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: Props) => <ChakraProvider theme={theme}>{children}</ChakraProvider>
