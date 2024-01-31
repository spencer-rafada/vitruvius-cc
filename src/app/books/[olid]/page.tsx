export const dynamic = 'force-dynamic'

import React from 'react'

type Props = {
  params: { olid: string }
}

// export async function generateStaticParams() {
//   const books = await fetch(
//     'https://openlibrary.org/search.json?q=the+hunger+games&fields=key,title,author_name,editions,isbn,publish_date,ratings_average,ratings_count,publisher,author_key,language,first_sentence,person,place,subject'
//   ).then((res) => res.json())

//   return books.docs.map((book: any) => ({
//     params: { olid: book.key.replace('/works/', '') },
//   }))
// }

export default function DetailsPage({ params }: Props) {
  return <div>{params.olid}</div>
}
