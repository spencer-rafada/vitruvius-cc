import { Dialog, Flex, IconButton, Text } from '@radix-ui/themes'
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import NextLink from 'next/link'
import {
  DiscordLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons'

export default function BookRating({
  book,
  size = 30,
}: {
  book: any
  size: number
}) {
  const [rating, setRating] = useState(0)
  const [openDialog, setOpenDialog] = useState(false)

  const handleRating = (rate: number) => {
    setRating(rate)
    setOpenDialog(true)
  }

  return (
    <>
      <Flex direction='column' gap='1' justify='center' align='center'>
        <Rating
          size={size}
          SVGclassName='inline-block'
          onClick={handleRating}
          initialValue={rating}
        />
        <Text>Rate this book</Text>
      </Flex>
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
