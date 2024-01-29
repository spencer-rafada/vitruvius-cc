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
}

const SearchContext = createContext<SearchContextProps>({
  search: '',
  setSearch: () => {},
  getBooks: async () => {},
  loading: false,
  setLoading: () => {},
})

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  const getBooks = async () => {
    const res = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(
        search
      )}&fields=key,title,author_name,editions,isbn,publish_date,ratings_average,ratings_count,publisher,author_key,language,first_sentence,person,place,subject`
    )
    const data = await res.json()
    console.log(data)
  }

  return (
    <SearchContext.Provider
      value={{ search, setSearch, getBooks, loading, setLoading }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchProvider = () => {
  return useContext(SearchContext)
}
