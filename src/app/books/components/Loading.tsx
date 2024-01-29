'use client'
import React from 'react'
import { useSearchProvider } from '../../providers/SearchProvider'
import { FallingLines } from 'react-loader-spinner'
import { Box, Flex } from '@radix-ui/themes'

export default function Test() {
  const { loading } = useSearchProvider()
  return (
    <Flex justify='center' align='center' className='h-full'>
      {loading ? (
        <Box data-testid='falling-lines-spinner'>
          <FallingLines color='#202020' width='100' visible={true} />
        </Box>
      ) : (
        <></>
      )}
    </Flex>
  )
}
