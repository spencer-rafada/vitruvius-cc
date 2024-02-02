'use client'
import React, { useState } from 'react'
import { Pencil2Icon } from '@radix-ui/react-icons'
import { Button, Dialog, Flex, Text, TextArea } from '@radix-ui/themes'
import IBook from '@/app/books/Book.types'

export default function ReviewButton({ book }: { book: IBook }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [review, setReview] = useState('')

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value)
  }

  const handleClick = () => {
    setOpen(true)
  }

  const submit = () => {
    setIndex(1)
    console.log('Review:', review)
  }

  return (
    <>
      <Button
        size='4'
        radius='full'
        color='orange'
        data-testid='book-details-write-review'
        className='cursor-pointer'
        onClick={handleClick}
      >
        <Pencil2Icon height='24' width='24' />
        Write a review
      </Button>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Content data-testid='book-details-review-dialog'>
          <Dialog.Title>
            Submit a review for {book ? `${book.title}` : 'this book'}
          </Dialog.Title>
          <Flex direction='column' gap='2'>
            {index === 0 && (
              <TextArea
                placeholder='Write your review here'
                onChange={handleOnChange}
              />
            )}
            {index === 1 && (
              <Flex
                p={{ initial: '7', md: '9' }}
                justify='center'
                align='center'
              >
                <Text size='7' weight='bold' align='center'>
                  Thank you for your review! Happy Reading!
                </Text>
              </Flex>
            )}
            <Flex justify='end' gap='5' pt='3' align='center'>
              <Button
                variant='ghost'
                size='3'
                onClick={() => setOpen(false)}
                className='cursor-pointer'
              >
                {index === 0 ? 'Cancel' : 'Close'}
              </Button>
              {index === 0 && (
                <Button
                  size='3'
                  color='orange'
                  className='cursor-pointer'
                  onClick={submit}
                >
                  Submit
                </Button>
              )}
            </Flex>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  )
}
