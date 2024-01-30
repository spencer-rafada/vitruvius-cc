'use client'
import { useWindowSize } from '@/app/hooks/useWindowSize'
import { Box, Card, Flex, Inset, Link, Text } from '@radix-ui/themes'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'
import { Rating } from 'react-simple-star-rating'

export default function BookComponent({ book }: { book: any }) {
  const windowSize = useWindowSize()

  if (windowSize.width <= 768) {
    return (
      <Card
        className='w-20 xs:w-32'
        asChild
        data-testid='book-component-mobile'
      >
        <NextLink
          href={`/books/${book.editions.docs[0].key.replace('/books/', '')}`}
          passHref
        >
          <Inset clip='padding-box'>
            <picture>
              <img
                src={`https://covers.openlibrary.org/w/olid/${book.key.replace(
                  '/works/',
                  ''
                )}-M.jpg`}
                alt={`${book.title} cover`}
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: '140px',
                  backgroundImage:
                    'url(https://www.nipponniche.com/wp-content/uploads/2021/04/fentres-pdf.jpeg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                }}
              />
            </picture>
          </Inset>
        </NextLink>
      </Card>
    )
  }

  return (
    <Card asChild variant='classic'>
      <NextLink
        href={`/books/${book.editions.docs[0].key.replace('/books/', '')}`}
        passHref
      >
        <Flex gap='5'>
          <Flex
            direction='column'
            gap='1'
            data-testid='book-cover-container'
            align='center'
          >
            <Image
              src={`https://covers.openlibrary.org/w/olid/${book.key.replace(
                '/works/',
                ''
              )}-M.jpg`}
              alt={`${book.title} cover`}
              width={150}
              height={120}
              style={{
                backgroundImage:
                  'url(https://www.nipponniche.com/wp-content/uploads/2021/04/fentres-pdf.jpeg)',
                backgroundSize: '100%',
                backgroundPosition: 'center center',
              }}
            />
          </Flex>
          <Flex direction='column' gap='1'>
            <Text
              size={{ initial: '3', md: '5' }}
              weight='medium'
              data-testid='book-title'
            >
              {book.title}
            </Text>
            <Text data-testid='book-author' size='4'>
              {book.author_name}
            </Text>
            <Box>
              <Text data-testid='book-publisher'>
                Published by: {book.editions?.docs?.[0].publisher?.[0]},{' '}
              </Text>
              <Text data-testid='book-publish-date'>
                {book.editions?.docs?.[0].publish_date?.[0]} -{' '}
              </Text>
              <Text data-testid='book-language'>
                {book.editions?.docs?.[0].language?.[0].toUpperCase()}
              </Text>
            </Box>
            {book.editions?.docs?.[0].isbn && (
              <Box data-testid='book-isbn'>
                <Text size='2'>ISBN: </Text>
                {book.editions?.docs?.[0].isbn?.map(
                  (isbn: string, key: any) => {
                    return (
                      <span key={key}>
                        <Link color='blue' size='2' underline='always' asChild>
                          <NextLink
                            href={`https://www.google.com/search?q=${isbn}`}
                            passHref
                          >
                            {isbn}
                          </NextLink>
                        </Link>{' '}
                      </span>
                    )
                  }
                )}
              </Box>
            )}
            {book.ratings_average && (
              <Box>
                <Rating
                  initialValue={book.ratings_average}
                  readonly
                  size={25}
                  SVGclassName='inline-block'
                  allowFraction
                />
              </Box>
            )}
          </Flex>
        </Flex>
      </NextLink>
    </Card>
  )
}
