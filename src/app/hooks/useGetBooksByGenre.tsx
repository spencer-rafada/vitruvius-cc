'use client'
import React, { useEffect, useState } from 'react'

let cache = new Map()

export default function useGetBooksByGenre({ genre }: { genre: string }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      if (cache.has(genre)) {
        setData(cache.get(genre))
        return
      }
      setLoading(true)
      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?subject=${genre}&fields=key,title`
        )
        const data = await response.json()
        console.log(data)
        setData(data.docs.splice(0, 20))
      } catch (error) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [genre])

  return { data, loading, error }
}
