import SearchBar from './components/SearchBar/SearchBar'
import { Box, Flex } from '@radix-ui/themes'

export default function Home() {
  return (
    <Box p={{ initial: '5', md: '8' }} className='h-full'>
      <Flex justify='center' align='center' className='h-full'>
        <SearchBar />
      </Flex>
    </Box>
  )
}
