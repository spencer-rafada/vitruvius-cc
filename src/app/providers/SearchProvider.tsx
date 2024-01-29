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
}

const SearchContext = createContext<SearchContextProps>({
  search: '',
  setSearch: () => {},
})

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState('')
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchProvider = () => {
  return useContext(SearchContext)
}
