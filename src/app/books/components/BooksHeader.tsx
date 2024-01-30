import { Box, Text } from '@radix-ui/themes'
import React from 'react'

export default function BooksHeader({ lastSearch }: { lastSearch: string }) {
  return (
    <Box data-testid='books-header-container' className='mb-6'>
      <Text size='4'>
        You searched for: <Text weight='bold'>{lastSearch}</Text>
      </Text>
    </Box>
  )
}
