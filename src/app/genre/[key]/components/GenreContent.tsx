'use client'
import useGetBooksByGenre from '@/app/hooks/useGetBooksByGenre'
import React from 'react'
import Book from '@/app/components/Book'
import Loading from '@/app/books/components/Loading'
import { Flex } from '@radix-ui/themes'

export default function GenreContent({ key }: { key: string }) {
  const { data, loading, error } = useGetBooksByGenre(key)

  return (
    <>
      {loading && <Loading />}
      <Flex
        data-testid='genre-content-container'
        wrap='wrap'
        gap={{ initial: '3', md: '5' }}
        justify={{ initial: 'center', md: 'start' }}
      >
        {data &&
          !loading &&
          !error &&
          data.map((work: any, index: number) => {
            return <Book key={index} work={work} />
          })}
      </Flex>
    </>
  )
}
