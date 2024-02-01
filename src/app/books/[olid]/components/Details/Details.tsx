'use client'
import useBookDetails from '@/app/hooks/useBookDetails'
import { Flex, Heading, Link, Text } from '@radix-ui/themes'
import React from 'react'
import NextLink from 'next/link'

export default function Details({ bookId }: { bookId: string }) {
  const { book, work, loading, error } = useBookDetails({ olid: bookId })

  return (
    <>
      {!loading && !error && book && work && (
        <Flex
          direction='column'
          gap={{ initial: '3', md: '4' }}
          data-testid='books-details-details-tab'
        >
          <Heading size={{ initial: '6', md: '8' }} as='h2'>
            Book Details
          </Heading>
          <Heading size={{ initial: '5', md: '7' }} as='h3'>
            ID Numbers
          </Heading>
          <Flex
            direction='row'
            gap={{ initial: '3', md: '4' }}
            data-testid='books-details-openlibrary-id'
          >
            <Text weight='medium'>OpenLibrary ID</Text>
            <Text>{book?.key.replace('/books/', '')}</Text>
          </Flex>
          <Flex
            direction='row'
            gap={{ initial: '3', md: '4' }}
            data-testid='books-details-isbn'
          >
            <Text weight='medium'>ISBN</Text>
            <Link color='blue' underline='always' asChild>
              <NextLink
                href={`https://www.google.com/search?q=${
                  book?.isbn?.[0] || book?.isbn?.[1]
                }`}
                passHref
              >
                {book?.isbn?.[0] || book?.isbn?.[1]}
              </NextLink>
            </Link>
          </Flex>
        </Flex>
      )}
    </>
  )
}
