import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'VITLIB | Books',
  description: 'Access all information about a book here',
}

async function getBooks(query: string) {
  const res = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
  )
  const books = await res.json()

  return books
}

export default async function BooksPage({
  searchParams,
}: {
  searchParams: { q: string }
}) {
  const books = await getBooks(searchParams.q)
  return (
    <>
      <div>{searchParams.q}</div>
      <div>{books.docs[0].title}</div>
    </>
  )
}
