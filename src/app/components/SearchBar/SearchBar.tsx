'use client'
import { useSearchProvider } from '@/app/providers/SearchProvider'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { TextField } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function SearchBar() {
  const { search, setSearch } = useSearchProvider()
  const router = useRouter()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push('/books')
    }
  }

  return (
    <TextField.Root
      data-testid='search-bar-container'
      className='w-10/12 md:w-8/12'
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
        onKeyDown={onKeyDown}
      />
    </TextField.Root>
  )
}
