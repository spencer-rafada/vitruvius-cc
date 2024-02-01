import React from 'react'
import IBook from '../../../Book.types'
import { Box, Flex, Text } from '@radix-ui/themes'
import TopSection from './TopSection'
import Cards from './Cards'

export default function Overview({ work, book }: { work: any; book: IBook }) {
  return (
    <>
      <Flex direction='column' gap={{ initial: '3', md: '4' }}>
        <TopSection work={work} book={book} />
        <Box data-testid='book-details-first-sentence'>
          <Text size='4' weight='regular'>
            First Sentence:{' '}
            <Text className='italic' weight='light'>
              {work.first_sentence}
            </Text>
          </Text>
        </Box>
        <Cards work={work} book={book} />
      </Flex>
    </>
  )
}