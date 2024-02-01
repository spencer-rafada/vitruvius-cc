import React from 'react'
import { Card, Flex, Link, Text } from '@radix-ui/themes'
import NextLink from 'next/link'
import IBook from '../../Book.types'

export default function Cards({ work, book }: { work: any; book: IBook }) {
  return (
    <Flex
      direction='row'
      gap={{ initial: '2', md: '3' }}
      wrap={{ initial: 'wrap', sm: 'nowrap' }}
    >
      <Card
        className='w-full sm:w-1/4 cursor-default'
        data-testid='book-details-publisher-date-card'
      >
        <Flex
          direction='column'
          gap='2'
          px='2'
          py='0'
          justify='center'
          align='center'
        >
          <Text weight='medium' align='center'>
            Publish Date
          </Text>
          <Text align='center'>{book.publish_date[0]}</Text>
        </Flex>
      </Card>
      <Card
        className='w-full sm:w-1/4 cursor-default'
        data-testid='book-details-publisher-card'
      >
        <Flex
          direction='column'
          gap='2'
          px='2'
          py='0'
          justify='center'
          align='center'
        >
          <Text weight='medium' align='center'>
            Publisher
          </Text>
          <Link color='blue' asChild>
            <NextLink
              href={`https://www.google.com/search?q=search${book.publisher[0]}`}
              passHref
            >
              {book.publisher[0]}
            </NextLink>
          </Link>
        </Flex>
      </Card>
      <Card
        className='w-full sm:w-1/4 cursor-default'
        data-testid='book-details-language-card'
      >
        <Flex
          direction='column'
          gap='2'
          px='2'
          py='0'
          justify='center'
          align='center'
        >
          <Text weight='medium' align='center'>
            Language
          </Text>
          <Text align='center'>{book.language[0].toUpperCase()}</Text>
        </Flex>
      </Card>
      <Card
        className='w-full sm:w-1/4 cursor-default'
        data-testid='book-details-pages-card'
      >
        <Flex
          direction='column'
          gap='2'
          px='2'
          py='0'
          justify='center'
          align='center'
        >
          <Text weight='medium' align='center'>
            Pages
          </Text>
          <Text align='center'>{work.number_of_pages_median}</Text>
        </Flex>
      </Card>
    </Flex>
  )
}
