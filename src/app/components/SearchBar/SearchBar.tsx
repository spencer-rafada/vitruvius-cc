'use client'
import { useSearchProvider } from '@/app/providers/SearchProvider'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Card, Flex, Separator, TextField } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function SearchBar() {
  const { search, setSearch, getBooks, setLoading } = useSearchProvider()
  const router = useRouter()
  const [open, setOpen] = useState(false)

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

  const onFocus = () => {
    setOpen(true)
  }

  return (
    <Flex direction='column' className='w-10/12 md:w-8/12 relative'>
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
            onFocus={onFocus}
            onBlur={() => setOpen(false)}
            placeholder='Search a book...'
            value={search}
            onChange={onChange}
          />
        </TextField.Root>
      </form>
      {open && <Card className='absolute translate-y-[80%]'>Open</Card>}
    </Flex>
  )
}
