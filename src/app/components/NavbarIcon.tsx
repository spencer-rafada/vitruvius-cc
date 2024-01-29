'use client'
import { Flex, Text } from '@radix-ui/themes'
import Image from 'next/image'
import headerIcon from '../../../public/vitruvius-logo.webp'
import React from 'react'
import Link from 'next/link'
import { useSearchProvider } from '../providers/SearchProvider'

export default function NavbarIcon() {
  const { setSearch } = useSearchProvider()
  return (
    <Link href='/' onClick={() => setSearch('')}>
      <Flex direction='row' gap='3' align='center'>
        <Image
          src={headerIcon}
          alt='Vitruvius Logo'
          width={50}
          height={50}
          data-testid='home-icon'
        />
        <Text
          weight='bold'
          className='uppercase tracking-widest'
          size={{ initial: '6', sm: '8' }}
        >
          VITLIB
        </Text>
      </Flex>
    </Link>
  )
}
