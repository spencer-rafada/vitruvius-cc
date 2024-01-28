import { Flex, Separator, Text } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <Flex justify='center' direction='column' align='center' gap='3'>
      <Separator size='4' />
      <Flex align='center' gap='3'>
        <Text>
          Submitted by:{' '}
          <Link href='https://spencerrafada.onrender.com/'>
            <Text weight='medium'>Spencer Rafada</Text>
          </Link>
        </Text>
        <Separator orientation='vertical' />
        <Text>{new Date().getFullYear()}</Text>
      </Flex>
    </Flex>
  )
}
