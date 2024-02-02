'use client'
import React, { useState } from 'react'
import useSuggestion from '../hooks/useSuggestion'
import { Flex, IconButton, Text } from '@radix-ui/themes'
import Book from './Book'
import { ReloadIcon } from '@radix-ui/react-icons'

type IWork = {
  key: string
  title: string
}

export default function Suggested() {
  const [revalidate, setRevalidate] = useState(false)
  const {
    data: suggestedData,
    loading,
    error,
  } = useSuggestion({ revalidate: revalidate })

  const handleClick = () => {
    setRevalidate((prev) => !prev)
    setTimeout(() => {
      setRevalidate((prev) => !prev)
    }, 500)
  }

  return (
    <>
      <Flex
        justify='center'
        direction='column'
        gap='2'
        className='po'
        data-testid='home-suggested-container'
      >
        <Flex justify='center' align='center' direction='row' gap='3'>
          <Flex direction='column' align='center'>
            <Text
              weight='medium'
              size={{ initial: '3', md: '4' }}
              data-testid='home-suggested-header'
            >
              Deciding what to read next?
            </Text>
            <Text
              weight='light'
              size={{ initial: '2', md: '3' }}
              align='center'
            >
              We&apos;ve curated these three books for you
            </Text>
          </Flex>
          <IconButton radius='full'>
            <ReloadIcon onClick={handleClick} />
          </IconButton>
        </Flex>
        {suggestedData && !loading && !error && (
          <Flex
            gap={{ initial: '2', md: '5' }}
            justify='center'
            data-testid='home-suggested-list'
          >
            {suggestedData.map((item: IWork, index: number) => {
              return <Book key={index} work={item} />
            })}
          </Flex>
        )}
      </Flex>
    </>
  )
}
