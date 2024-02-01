import React from 'react'
import IBook from '../../Book.types'
import { Flex } from '@radix-ui/themes'
import TopSection from './TopSection'
import Cards from './Cards'

export default function Overview({ work, book }: { work: any; book: IBook }) {
  return (
    <>
      <Flex direction='column' gap={{ initial: '3', md: '4' }}>
        <TopSection work={work} book={book} />
        <Cards work={work} book={book} />
      </Flex>
    </>
  )
}
