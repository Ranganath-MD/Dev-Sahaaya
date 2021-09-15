import { chakra } from '@chakra-ui/react'
import React from 'react'

export const ColorLine = () => {
  return (
    <chakra.div
      pos="sticky"
      top={0}
      zIndex="sticky"
      bg="linear-gradient(to right, #753a88, #cc2b5e)"
      w="100%"
      h="2.5"
    />
  )
}
