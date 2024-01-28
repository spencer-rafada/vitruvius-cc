import SearchBar from './components/SearchBar/SearchBar'
import { Flex } from '@radix-ui/themes'

export default function Home() {
  return (
    <>
      <div>Home Page</div>
      <Flex justify='center' align='center'>
        <SearchBar />
      </Flex>
    </>
  )
}
