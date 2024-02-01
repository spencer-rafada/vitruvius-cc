export const dynamic =
  process.env.NODE_ENV !== 'production' ? 'auto' : 'force-dynamic'
import React from 'react'
import BookDetails from './components/BookDetails'
import BookCover from './components/BookCover'
import { Box, Flex } from '@radix-ui/themes'
import { Metadata, ResolvingMetadata } from 'next'
import Details from './components/Details/Details'

type Props = {
  params: { olid: string }
}

// This function is called during the build (build time) for GitHub Actions
export async function generateStaticParams() {
  const books = await fetch(
    'https://openlibrary.org/search.json?q=the+hunger+games&fields=key,title,author_name,editions,isbn,publish_date,ratings_average,ratings_count,publisher,author_key,language,first_sentence,person,place,subject'
  ).then((res) => res.json())
  const book = books.docs.map((book: any) => ({
    olid: book.editions?.docs?.[0]?.key?.replace('/books/', ''),
  }))

  return book
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.olid

  const response = await fetch(`https://openlibrary.org/search.json?q=${id}`)
  const data = await response.json()
  const book = data.docs[0]

  return {
    title: `${book.title} | VITLIB `,
    description: `Details of the book ${book.title}`,
  }
}

export default function DetailsPage({ params }: Props) {
  return (
    <>
      <Flex
        direction={{ initial: 'column', sm: 'row' }}
        gap={{ initial: '5', sm: '7' }}
        p={{ initial: '5', md: '8' }}
        className='pt-0 h-fit sm:h-dvh'
        align={{ initial: 'center', sm: 'start' }}
      >
        <BookCover bookId={params.olid} />
        <BookDetails bookId={params.olid} />
      </Flex>
    </>
  )
}
