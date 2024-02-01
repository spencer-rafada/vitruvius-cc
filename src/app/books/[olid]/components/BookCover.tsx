'use client'
import useBookDetails from '@/app/hooks/useBookDetails'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { Box, Button, Card, Flex, Text } from '@radix-ui/themes'
import React from 'react'
import { RotatingSquare } from 'react-loader-spinner'
import NextLink from 'next/link'

export default function BookCover({ bookId }: { bookId: string }) {
  const { work, book, loading, error } = useBookDetails({ olid: bookId })

  return (
    <>
      {loading && !error && (
        <Card className='h-1/4 sm:1/2' data-testid='book-details-loading-state'>
          <RotatingSquare color='#202020' width='100' visible={true} />
        </Card>
      )}
      {work && book && !error && !loading && (
        <Card className='w-fit md:w-1/4' data-testid='book-details-book-cover'>
          <Flex
            direction='column'
            gap={{ initial: '2', sm: '3' }}
            align='center'
          >
            <picture>
              <img
                src={`https://covers.openlibrary.org/b/olid/${book.key.replace(
                  '/books/',
                  ''
                )}-L.jpg`}
                alt={`${book.title} cover`}
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 'auto',
                  backgroundImage:
                    'url(https://www.nipponniche.com/wp-content/uploads/2021/04/fentres-pdf.jpeg)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  borderRadius: '5px',
                }}
              />
            </picture>
            <Box>
              <Button
                data-testid='book-details-buy-button'
                size='3'
                asChild
                color='orange'
                disabled={work.id_amazon.length === 0}
              >
                <NextLink
                  href={`https://www.amazon.com/dp/${
                    work.id_amazon[0] || work.id_amazon[1]
                  }`}
                  target='_blank'
                >
                  Buy on Amazon <ExternalLinkIcon />
                </NextLink>
              </Button>
            </Box>
          </Flex>
        </Card>
      )}
      {error && (
        <Card className='h-1/4 sm:1/2' data-testid='book-details-error-state'>
          <Text size={{ initial: '5', sm: '7' }} color='red' weight='bold'>
            Failed to find book cover. Please try again later.
          </Text>
        </Card>
      )}
    </>
  )
}
