'use client'
import useBookDetails from '@/app/hooks/useBookDetails'
import { Box, Tabs } from '@radix-ui/themes'
import React from 'react'
import Overview from './Overview'

export default function BookDetails({ bookId }: { bookId: string }) {
  const { work, book, error, loading } = useBookDetails({ olid: bookId })
  return (
    <>
      <Box p={{ initial: '5', md: '8' }} className='pt-0'>
        {work && book && !error && !loading && (
          <Tabs.Root defaultValue='overview'>
            <Tabs.List>
              <Tabs.Trigger value='overview'>Overview</Tabs.Trigger>
              <Tabs.Trigger value='editions'>Editions</Tabs.Trigger>
              <Tabs.Trigger value='details'>Details</Tabs.Trigger>
            </Tabs.List>
            <Box p={{ initial: '2', md: '3' }}>
              <Tabs.Content
                value='overview'
                data-testid='book-details-overview-container'
              >
                <Overview work={work} book={book} />
              </Tabs.Content>
              <Tabs.Content
                value='editions'
                data-testid='book-details-edition-container'
              >
                y
              </Tabs.Content>
              <Tabs.Content
                value='details'
                data-testid='book-details-container'
              >
                z
              </Tabs.Content>
            </Box>
          </Tabs.Root>
        )}
      </Box>
    </>
  )
}
