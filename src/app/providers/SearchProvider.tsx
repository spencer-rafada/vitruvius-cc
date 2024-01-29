'use client'
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface SearchContextProps {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  bookList: Array<Object>
  setBookList: Dispatch<SetStateAction<Array<Object>>>
}

const SearchContext = createContext<SearchContextProps>({
  search: '',
  setSearch: () => {},
  bookList: [{}],
  setBookList: () => {},
})

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState('')
  const [bookList, setBookList] = useState([{}])

  useEffect(() => {
    console.log('search', search)
    setBookList([{ test: '1' }])
  }, [search])

  return (
    <SearchContext.Provider
      value={{ search, setSearch, bookList, setBookList }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchProvider = () => {
  return useContext(SearchContext)
}
