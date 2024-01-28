import { Box, Flex } from '@radix-ui/themes'
import React from 'react'
import NavbarIcon from './NavbarIcon'
import NavLinks from './NavLinks'

export default function Navbar() {
  return (
    <Flex justify='between' align='center' p={{ initial: '3', sm: '4' }}>
      <Box>
        <NavbarIcon />
      </Box>
      <Flex className='pr-2'>
        <NavLinks text='Books' href='/books' />
      </Flex>
    </Flex>
  )
}
