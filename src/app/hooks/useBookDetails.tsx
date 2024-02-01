import React, { useEffect, useState } from 'react'
import IBook from '../books/Book.types'

let cache = new Map()

export default function useBookDetails({ olid }: { olid: string }) {
  const [work, setWork] = useState<any>([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [book, setBook] = useState<IBook>()

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `https://openlibrary.org/search.json?q=${encodeURIComponent(
            olid
          )}&fields=key,title,author_name,editions,isbn,publish_date,ratings_average,ratings_count,publisher,author_key,language,first_sentence,person,place,subject,number_of_pages_median,id_amazon,lccn`
        )
        const data = await response.json()
        setWork(data.docs?.[0])
        setBook(data.docs?.[0]?.editions?.docs?.[0])
      } catch (error) {
        setError(Boolean(error))
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    fetchBookDetails()
  }, [olid])

  return { work, error, loading, book }
}
