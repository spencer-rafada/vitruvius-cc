import { Metadata } from 'next'
import React from 'react'
import BooksContent from './components/BooksContent'

export const metadata: Metadata = {
  title: 'VITLIB | Books',
  description: 'Access all information about a book here',
}

export default function BooksPage() {
  return (
    <>
      <BooksContent />
    </>
  )
}
