import { Flex } from '@radix-ui/themes'
import React from 'react'

export default function BooksList({ books }: { books: Array<Object> }) {
  return (
    <Flex data-testid='books-list-container' direction='column' gap='3'>
      {books.map((book: any, key) => {
        return <div key={key}>{book.title}</div>
      })}
    </Flex>
  )
}
