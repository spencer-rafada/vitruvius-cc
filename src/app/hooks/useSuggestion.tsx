'use client'
import React, { useEffect, useState } from 'react'
import { genres } from '../components/GenreList'
import useGetBooksByGenre from './useGetBooksByGenre'

export default function useSuggestion({ revalidate }: { revalidate: boolean }) {
  const [randomGenre, setRandomGenre] = useState(
    () => genres[Math.floor(Math.random() * genres.length)]
  )
  const { data, loading, error } = useGetBooksByGenre({
    genre: randomGenre,
    size: 3,
  })

  useEffect(() => {
    if (revalidate) {
      setRandomGenre(() => genres[Math.floor(Math.random() * genres.length)])
    }
  }, [revalidate])

  return { data, loading, error }
}
