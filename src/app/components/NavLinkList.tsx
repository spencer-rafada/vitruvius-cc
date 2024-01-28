'use client'
import { Flex } from '@radix-ui/themes'
import React from 'react'
import NavLinks from './NavLinks'
import { usePathname } from 'next/navigation'
import SearchBar from './SearchBar/SearchBar'

export default function NavLinkList() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  return (
    <Flex
      className='pr-2'
      data-testid='nav-link-list'
      gap='5'
      justify='center'
      align='center'
    >
      {!isHome && <SearchBar />}
      <NavLinks text='Books' href='/books' />
    </Flex>
  )
}
