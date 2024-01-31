import React from 'react'
import IBook from '../../Book.types'
import { Flex, Separator, Text } from '@radix-ui/themes'
import { Rating } from 'react-simple-star-rating'

export default function Overview({ work, book }: { work: any; book: IBook }) {
  return (
    <>
      <Flex direction='column' gap={{ initial: '1', md: '2' }}>
        <Text
          weight='bold'
          size={{ initial: '6', md: '8' }}
          data-testid='book-details-top-title'
        >
          {book.title}
        </Text>
        <Text
          weight='medium'
          size={{ initial: '4', md: '6' }}
          data-testid='book-details-top-author'
        >
          {work.author_name?.[0]}
        </Text>
        <Flex
          align='center'
          gap='2'
          data-testid='book-details-top-rating-container'
        >
          <Rating
            initialValue={work.ratings_average}
            readonly
            size={25}
            SVGclassName='inline-block'
            allowFraction
          />
          <Separator orientation='vertical' />
          <Text weight='light' data-testid='book-details-top-total-rating'>
            {work.ratings_count}
          </Text>
        </Flex>
      </Flex>
    </>
  )
}
