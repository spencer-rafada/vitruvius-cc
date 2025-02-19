'use client'
import { Flex } from '@radix-ui/themes'
import React from 'react'
import NavLinks from './NavLinks'
import { usePathname } from 'next/navigation'
import SearchBar from './SearchBar/SearchBar'
import { useWindowSize } from '../hooks/useWindowSize'
import SearchBarMobile from './SearchBar/SearchBarMobile'

export default function NavLinkList() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const windowSize = useWindowSize()
  const shouldRenderSearchBarMobile = !isHome && windowSize.width <= 520

  return (
    <Flex
      className='pr-2 w-3/6'
      data-testid='nav-link-list'
      gap={{ initial: '3', sm: '5' }}
      justify='end'
      align='center'
    >
      {!isHome && windowSize.width > 520 && <SearchBar />}
      {shouldRenderSearchBarMobile && <SearchBarMobile />}
      {/* <NavLinks text='Books' href='/books' /> */}
    </Flex>
  )
}
