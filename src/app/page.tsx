import GenreList from './components/GenreList'
import SearchBar from './components/SearchBar/SearchBar'
import { Box, Flex } from '@radix-ui/themes'
import Suggested from './components/Suggested'

export default function Home() {
  return (
    <Box p={{ initial: '5', md: '8' }} className='h-full'>
      <Flex
        justify='center'
        align='center'
        className='h-full'
        direction='column'
      >
        <Flex
          direction='column'
          className='w-10/12 md:w-8/12'
          gap={{ initial: '2', md: '4' }}
        >
          <SearchBar />
          <GenreList />
          <Suggested />
        </Flex>
      </Flex>
    </Box>
  )
}
