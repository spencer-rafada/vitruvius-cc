'use client'
import { useSearchProvider } from '@/app/providers/SearchProvider'
import React from 'react'
import Loading from './Loading'
import { Box, Text } from '@radix-ui/themes'
import BooksList from './BooksList'

export default function BooksContent() {
  const { lastSearch, loading, searchResult } = useSearchProvider()
  return (
    <>
      {loading && <Loading />}
      <>
        {!loading && lastSearch && (
          <Box data-testid='books-header-container'>
            <Text size='4'>
              You searched for: <Text weight='bold'>{lastSearch}</Text>
            </Text>
          </Box>
        )}
        {!loading && searchResult && <BooksList books={searchResult} />}
      </>
    </>
  )
}
