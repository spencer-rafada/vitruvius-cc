'use client'
import useBookDetails from '@/app/hooks/useBookDetails'
import { Flex, Heading, Text } from '@radix-ui/themes'
import React from 'react'

export default function Details({ bookId }: { bookId: string }) {
  const { book, work, loading, error } = useBookDetails({ olid: bookId })
  console.log('book', book)
  console.log('work', work)

  return (
    <>
      {!loading && !error && book && work && (
        <Flex direction='column' gap={{ initial: '3', md: '4' }}>
          <Heading size={{ initial: '6', md: '8' }} as='h2'>
            Book Details
          </Heading>
          <Heading size={{ initial: '5', md: '7' }} as='h3'>
            ID Numbers
          </Heading>
          <Flex direction='row' gap={{ initial: '3', md: '4' }}>
            <Text weight='medium'>OpenLibrary ID</Text>
            <Text>{book?.key.replace('/books/', '')}</Text>
          </Flex>
          <Flex direction='row' gap={{ initial: '3', md: '4' }}>
            <Text weight='medium'>ISBN</Text>
            <Text>{book?.isbn?.[0] || book?.isbn?.[1]}</Text>
          </Flex>
        </Flex>
      )}
    </>
  )
}
