'use client'
import { useState, useEffect } from 'react'

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Run the handleResize function once to set the initial state
    if (typeof window !== 'undefined') {
      handleResize()

      // Subscribe to window resize events
      window.addEventListener('resize', handleResize)

      // Unsubscribe from the event when the component is unmounted
      return () => window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}
