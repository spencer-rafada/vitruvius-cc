import React from 'react'
import { FallingLines } from 'react-loader-spinner'
import { Box, Flex } from '@radix-ui/themes'

export default function Loading() {
  return (
    <Flex justify='center' align='center' className='h-dvh'>
      <Box data-testid='falling-lines-spinner'>
        <FallingLines color='#202020' width='100' visible={true} />
      </Box>
    </Flex>
  )
}
