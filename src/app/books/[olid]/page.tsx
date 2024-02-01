export const dynamic =
  process.env.NODE_ENV !== 'production' ? 'auto' : 'force-dynamic'
import React from 'react'
import BookDetails from './components/BookDetails'

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

export default function DetailsPage({ params }: Props) {
  return (
    <>
      <BookDetails bookId={params.olid} />
    </>
  )
}
