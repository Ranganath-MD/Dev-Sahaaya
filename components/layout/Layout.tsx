import { chakra } from '@chakra-ui/system'
import { Divider } from '@chakra-ui/react'
import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { ColorLine } from 'components/ColorLine'

export const Layout: React.FC = ({ children }) => {
  return (
    <chakra.div>
      <ColorLine />
      <Header />
      <Divider />
      <chakra.div minH="80vh" px={6}>
        {children}
      </chakra.div>
      {/* <Footer /> */}
    </chakra.div>
  )
}
