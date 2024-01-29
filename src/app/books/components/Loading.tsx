import React from 'react'
import { FallingLines } from 'react-loader-spinner'
import { Box, Flex } from '@radix-ui/themes'

export default function Test() {
  return (
    <Flex justify='center' align='center' className='h-full'>
      <Box data-testid='falling-lines-spinner'>
        <FallingLines color='#202020' width='100' visible={true} />
      </Box>
    </Flex>
  )
}
