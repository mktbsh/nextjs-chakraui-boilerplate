import { extendTheme } from '@chakra-ui/react'

import { colors } from './foundations/colors'

import type { ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  colors,
})
