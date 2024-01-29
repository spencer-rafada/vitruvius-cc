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
  getBooks: () => {}
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  lastSearch: string
  setLastSearch: Dispatch<SetStateAction<string>>
  searchResult: Array<Object>
  setSearchResult: Dispatch<SetStateAction<Array<Object>>>
}

const SearchContext = createContext<SearchContextProps>({
  search: '',
  setSearch: () => {},
  getBooks: async () => {},
  loading: false,
  setLoading: () => {},
  lastSearch: '',
  setLastSearch: () => {},
  searchResult: [{}],
  setSearchResult: () => {},
})

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [lastSearch, setLastSearch] = useState('')
  const [searchResult, setSearchResult] = useState([{}])

  const getBooks = async () => {
    const res = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(
        search
      )}&fields=key,title,author_name,editions,isbn,publish_date,ratings_average,ratings_count,publisher,author_key,language,first_sentence,person,place,subject`
    )
    const data = await res.json()
    setLastSearch(data.q)
    setSearchResult(data.docs)
  }

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        getBooks,
        loading,
        setLoading,
        lastSearch,
        setLastSearch,
        searchResult,
        setSearchResult,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchProvider = () => {
  return useContext(SearchContext)
}
