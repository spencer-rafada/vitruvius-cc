'use client'
import React from 'react'
import NextLink from 'next/link'
import { Button, Text } from '@radix-ui/themes'

export default function NavLinks({
  text,
  href,
}: {
  text: string
  href: string
}) {
  return (
    <NextLink href={href} legacyBehavior>
      <Button variant='ghost' size='3' className='cursor-pointer'>
        <Text
          weight='bold'
          className='uppercase text-black tracking-wider'
          size={{ initial: '3', sm: '4' }}
        >
          {text}
        </Text>
      </Button>
    </NextLink>
  )
}
