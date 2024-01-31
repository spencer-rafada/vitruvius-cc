'use client'
import { useSearchProvider } from '@/app/providers/SearchProvider'
import React from 'react'
import Loading from './Loading'
import { Box } from '@radix-ui/themes'
import BooksList from './BooksList'
import BooksHeader from './BooksHeader'

export default function BooksContent() {
  const { lastSearch, loading, searchResult } = useSearchProvider()
  return (
    <Box p={{ initial: '5', md: '8' }} className='pt-0'>
      {loading && <Loading />}
      <>
        {!loading && lastSearch && <BooksHeader lastSearch={lastSearch} />}
        {!loading && searchResult && <BooksList books={searchResult} />}
      </>
    </Box>
  )
}
