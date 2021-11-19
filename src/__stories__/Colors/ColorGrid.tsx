import { Container, Wrap, WrapItem, Tooltip, Box, useClipboard } from '@chakra-ui/react'

import { colors } from '@/theme/foundations/colors'

type ColorGridProps = {
  color: string
}

const ColorGrid = ({ color }: ColorGridProps) => {
  const { onCopy } = useClipboard(color)

  return (
    <WrapItem onClick={onCopy}>
      <Tooltip label={color} aria-label={color}>
        <Box bg={color} boxSize='120px' />
      </Tooltip>
    </WrapItem>
  )
}

export const ColorGridList = () => {
  const colorNames = (Object.keys(colors) as Array<keyof typeof colors>)
    .map((key) => {
      return Object.keys(colors[key]).map((color) => `${key}.${color}`)
    })
    .flat()

  return (
    <Container p={16}>
      <Wrap spacing={0}>
        {colorNames.map((color) => (
          <Box key={color}>
            <ColorGrid color={color} />
          </Box>
        ))}
      </Wrap>
    </Container>
  )
}
