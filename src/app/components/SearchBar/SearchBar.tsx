'use client'
import { useSearchProvider } from '@/app/providers/SearchProvider'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { TextField } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function SearchBar() {
  const { search, setSearch, getBooks, setLoading } = useSearchProvider()
  const router = useRouter()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('/books')
    setLoading(true)
    try {
      await getBooks()
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <TextField.Root
        data-testid='search-bar-container'
        className='w-full'
        size='3'
        radius='full'
      >
        <TextField.Slot>
          <MagnifyingGlassIcon height='18' width='18' />
        </TextField.Slot>
        <TextField.Input
          placeholder='Search a book...'
          value={search}
          onChange={onChange}
        />
      </TextField.Root>
    </form>
  )
}
