import { Box, Flex, Heading } from '@radix-ui/themes'
import React from 'react'
import BookRating from '../BookRating'
import IBook from '@/app/books/Book.types'
import ReviewButton from './ReviewButton'

export default function BookReview({ book }: { book: IBook }) {
  return (
    <Flex
      direction='column'
      justify='center'
      align='center'
      p={{ initial: '3', md: '5' }}
      gap={{ initial: '7', md: '8' }}
      data-testid='book-details-review-container'
    >
      <Heading as='h3'>What do you think?</Heading>
      <Flex direction={{ initial: 'column', md: 'row' }} gap='8' align='center'>
        <Box data-testid='book-details-rating'>
          <BookRating book={book} size={50} />
        </Box>
        <ReviewButton book={book} />
      </Flex>
    </Flex>
  )
}
