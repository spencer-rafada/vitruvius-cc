import { Box, Card, Flex, Text } from '@radix-ui/themes'
import React from 'react'

export default function BooksList({ books }: { books: Array<Object> }) {
  return (
    <Flex data-testid='books-list-container' direction='column' gap='3'>
      {books.length > 0 ? (
        books.map((book: any, key) => {
          return <Card key={key}>{book.title}</Card>
        })
      ) : (
        <Box className='h-dvh max-h-full' data-testid='no-book-message'>
          <Card className='italic'>No books found.</Card>
        </Box>
      )}
    </Flex>
  )
}
