'use client'
import { useWindowSize } from '@/app/hooks/useWindowSize'
import { Box, Card, Flex } from '@radix-ui/themes'
import React, { Suspense, lazy } from 'react'

const BookComponent = lazy(() => import('./BookComponent'))

export default function BooksList({ books }: { books: Array<Object> }) {
  const windowSize = useWindowSize()
  return (
    <Flex
      data-testid='books-list-container'
      direction={windowSize.width <= 768 ? 'row' : 'column'}
      justify={windowSize.width <= 768 ? 'center' : 'start'}
      gap='3'
      wrap='wrap'
    >
      {books.length > 0 ? (
        books.map((book: any, key) => {
          return (
            <Suspense key={key} fallback={<Card size='5'></Card>}>
              <BookComponent book={book} />
            </Suspense>
          )
        })
      ) : (
        <Box className='h-dvh max-h-full' data-testid='no-book-message'>
          <Card className='italic'>No books found.</Card>
        </Box>
      )}
    </Flex>
  )
}
