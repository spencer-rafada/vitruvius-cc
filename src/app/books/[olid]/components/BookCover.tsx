'use client'
import useBookDetails from '@/app/hooks/useBookDetails'
import {
  DiscordLogoIcon,
  ExternalLinkIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons'
import {
  Box,
  Button,
  Card,
  Dialog,
  Flex,
  IconButton,
  Text,
} from '@radix-ui/themes'
import React, { useState } from 'react'
import { RotatingSquare } from 'react-loader-spinner'
import NextLink from 'next/link'
import { Rating } from 'react-simple-star-rating'

export default function BookCover({ bookId }: { bookId: string }) {
  const { work, book, loading, error } = useBookDetails({ olid: bookId })
  const [rating, setRating] = useState(0)
  const [openDialog, setOpenDialog] = useState(false)
  console.log(book)

  const handleRating = (rate: number) => {
    setRating(rate)
    setOpenDialog(true)
  }

  return (
    <>
      {loading && !error && (
        <Card className='h-1/4 sm:1/2' data-testid='book-details-loading-state'>
          <RotatingSquare color='#202020' width='100' visible={true} />
        </Card>
      )}
      {work && book && !error && !loading && (
        <Card className='w-fit md:w-1/4' data-testid='book-details-book-cover'>
          <Flex
            direction='column'
            gap={{ initial: '2', sm: '3' }}
            align='center'
          >
            <picture>
              <img
                src={`https://covers.openlibrary.org/b/olid/${book.key.replace(
                  '/books/',
                  ''
                )}-L.jpg`}
                alt={`${book.title} cover`}
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 'auto',
                  backgroundImage:
                    'url(https://www.nipponniche.com/wp-content/uploads/2021/04/fentres-pdf.jpeg)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  borderRadius: '5px',
                }}
              />
            </picture>
            <Box data-testid='book-details-rating-container'>
              <Rating
                size={30}
                SVGclassName='inline-block'
                onClick={handleRating}
                initialValue={rating}
              />
            </Box>
            <Box>
              <Button
                data-testid='book-details-buy-button'
                size='3'
                asChild
                color='orange'
                disabled={work.id_amazon.length === 0}
              >
                <NextLink
                  href={`https://www.amazon.com/dp/${
                    work.id_amazon[0] || work.id_amazon[1]
                  }`}
                  target='_blank'
                >
                  Buy on Amazon <ExternalLinkIcon />
                </NextLink>
              </Button>
            </Box>
          </Flex>
        </Card>
      )}
      {error && (
        <Card className='h-1/4 sm:1/2' data-testid='book-details-error-state'>
          <Text size={{ initial: '5', sm: '7' }} color='red' weight='bold'>
            Failed to find book cover. Please try again later.
          </Text>
        </Card>
      )}
      <Dialog.Root
        onOpenChange={setOpenDialog}
        open={openDialog}
        data-testid='book-details-appreciation-dialog'
      >
        <Dialog.Content>
          <Dialog.Title>
            Thanks for rating {book ? book.title : 'this book'}.
          </Dialog.Title>
          <Dialog.Description>
            Your feedback matters. Thank you for helping us improve our
            platform. Happy reading!
          </Dialog.Description>
          <Flex direction='row' gap='5' justify='center' align='center' p='5'>
            <IconButton asChild size='3' radius='full' color='blue'>
              <NextLink href='https://twitter.com' target='_blank'>
                <TwitterLogoIcon width='28' height='28' />
              </NextLink>
            </IconButton>
            <IconButton asChild size='3' radius='full' color='pink'>
              <NextLink
                href='https://www.instagram.com/spenz_dev'
                target='_blank'
              >
                <InstagramLogoIcon width='28' height='28' />
              </NextLink>
            </IconButton>
            <IconButton asChild size='3' radius='full' color='indigo'>
              <NextLink
                href='https://www.linkedin.com/in/spencer-rafada/'
                target='_blank'
              >
                <LinkedInLogoIcon width='28' height='28' />
              </NextLink>
            </IconButton>
            <IconButton asChild size='3' radius='full' color='purple'>
              <NextLink href='https://discord.com' target='_blank'>
                <DiscordLogoIcon width='28' height='28' />
              </NextLink>
            </IconButton>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  )
}
