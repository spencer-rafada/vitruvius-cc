'use client'
import { Flex, Text } from '@radix-ui/themes'
import Image from 'next/image'
import headerIcon from '../../../public/vitruvius-logo.webp'
import React from 'react'
import Link from 'next/link'

export default function NavbarIcon() {
  return (
    <Link href='/'>
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
          Vitruvius
        </Text>
      </Flex>
    </Link>
  )
}