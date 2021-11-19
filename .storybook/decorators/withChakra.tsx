import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../src/theme'
import { Story } from '@storybook/react'

export const withChakra = (StoryFC: Story) => {
  return (
    <ChakraProvider theme={theme}>
      <StoryFC />
    </ChakraProvider>
  )
}
