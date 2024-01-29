import { Metadata } from 'next'
import React from 'react'
import Loading from './components/Loading'
import { Box } from '@radix-ui/themes'

export const metadata: Metadata = {
  title: 'VITLIB | Books',
  description: 'Access all information about a book here',
}

export default function BooksPage() {
  return (
    <Box p={{ initial: '5', md: '8' }} className='h-full'>
      <Loading />
    </Box>
  )
}
