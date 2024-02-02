'use client'
import React, { useEffect, useState } from 'react'

export default function useGetBooksByGenre(key: string) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?subject=${key}&fields=key,title`
        )
        const data = await response.json()
        setData(data.docs.splice(0, 15))
      } catch (error) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [key])

  return { data, loading, error }
}
