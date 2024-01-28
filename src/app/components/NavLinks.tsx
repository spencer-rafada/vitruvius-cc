'use client'
import React from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { Button, Text } from '@radix-ui/themes'

export default function NavLinks({
  text,
  href,
}: {
  text: string
  href: string
}) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <NextLink href={href} legacyBehavior>
      <Button variant='ghost' size='3'>
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
