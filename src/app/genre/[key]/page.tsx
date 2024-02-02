export const dynamic =
  process.env.NODE_ENV !== 'production' ? 'auto' : 'force-dynamic'
import { Metadata, ResolvingMetadata } from 'next'
import React from 'react'
import GenreContent from './components/GenreContent'
import { Box, Flex, Heading, Text } from '@radix-ui/themes'
import GenreList from '@/app/components/GenreList'

type Props = {
  params: { key: string }
}

export async function generateStaticParams() {
  return [
    { key: 'fiction' },
    { key: 'novel' },
    { key: 'narrative' },
    { key: 'science' },
    { key: 'mystery' },
    { key: 'history' },
    { key: 'art' },
    { key: 'children' },
  ]
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const key = params.key

  return {
    title: `${key.toUpperCase()} | VITLIB `,
    description: `Books from genre ${key}`,
  }
}

export default async function GenrePage({ params }: Props) {
  const key = params.key

  return (
    <>
      <Flex
        direction='column'
        gap={{ initial: '5', sm: '6' }}
        p={{ initial: '5', md: '8' }}
        className='pt-0'
      >
        <Flex direction='column' gap='4' pt='0'>
          <Box>
            <Heading as='h2' className='capitalize' size='6'>
              {key}
            </Heading>
            <Text size={{ initial: '3', md: '4' }}>
              Here are some suggested <Text className='capitalize'>{key}</Text>{' '}
              books for you
            </Text>
          </Box>
          <GenreList />
        </Flex>
        <GenreContent key={key} />
      </Flex>
    </>
  )
}
