import { Box, Flex, Link } from '@radix-ui/themes'
import React from 'react'
import NextLink from 'next/link'

export default function GenreList() {
  const genres = [
    'Fiction',
    'Novel',
    'Narrative',
    'Science',
    'Mystery',
    'History',
    'Art',
    'Children',
    'Love',
    'Sci-Fi',
  ]

  return (
    <>
      <Flex wrap='wrap' p='3' pt='0' data-testid='genre-list-container'>
        {genres.map((genre: string, index: number) => {
          return (
            <Box key={index} className='w-1/2 sm:w-1/3 md:w-1/4' pb='1'>
              <Link asChild size='3' underline='hover'>
                <NextLink href={`/genre/${genre.toLowerCase()}`}>
                  {genre}
                </NextLink>
              </Link>
            </Box>
          )
        })}
      </Flex>
    </>
  )
}
