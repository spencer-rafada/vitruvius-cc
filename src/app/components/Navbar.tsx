import { Box, Flex } from '@radix-ui/themes'
import React from 'react'
import NavbarIcon from './NavbarIcon'
import NavLinkList from './NavLinkList'

export default function Navbar() {
  return (
    <Flex justify='between' align='center' p={{ initial: '3', sm: '4' }}>
      <Box>
        <NavbarIcon />
      </Box>
      <NavLinkList />
    </Flex>
  )
}
