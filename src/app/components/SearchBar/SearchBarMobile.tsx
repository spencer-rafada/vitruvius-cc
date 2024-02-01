'use client'
import { Cross1Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Dialog, Flex, IconButton } from '@radix-ui/themes'
import React, { useState } from 'react'
import SearchBar from './SearchBar'

export default function SearchBarMobile() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <IconButton
        data-testid='search-toggle-button'
        variant='solid'
        radius='full'
        onClick={() => setOpen(true)}
      >
        <MagnifyingGlassIcon width='18' height='18' />
      </IconButton>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Content
          data-testid='search-bar-dialog-container'
          className='h-1/2'
        >
          <Flex gap='3' align='center' justify='between'>
            <SearchBar />
            <IconButton
              variant='solid'
              color='gray'
              radius='full'
              onClick={() => setOpen(false)}
            >
              <Cross1Icon width='18' height='18' />
            </IconButton>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  )
}
