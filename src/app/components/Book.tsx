import { Card, Inset } from '@radix-ui/themes'
import React from 'react'
import NextLink from 'next/link'

type IWork = {
  key: string
  title: string
}

export default function Book({ work }: { work: IWork }) {
  return (
    <Card
      asChild
      variant='classic'
      data-testid='book-container'
      className='hover:scale-110 transition-all hover:shadow-xl cursor-pointer'
    >
      <NextLink href={`/books/${work.key.replace('/works/', '')}`} passHref>
        <Inset clip='padding-box'>
          <picture>
            <img
              src={`https://covers.openlibrary.org/w/olid/${work.key.replace(
                '/works/',
                ''
              )}-L.jpg`}
              alt={`${work.title} cover`}
              style={{
                display: 'block',
                objectFit: 'cover',
                width: '100%',
                height: '200px',
                backgroundImage:
                  'url(https://www.nipponniche.com/wp-content/uploads/2021/04/fentres-pdf.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            />
          </picture>
        </Inset>
      </NextLink>
    </Card>
  )
}
