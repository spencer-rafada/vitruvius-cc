import { render, screen } from '@testing-library/react'
import SearchBar from '../SearchBar'

describe('SearchBar', () => {
  it('should render the search bar', () => {
    render(<SearchBar />)
    expect(screen.getByTestId('search-bar-container')).toBeInTheDocument()
  })
  it('should render the search bar with the correct placeholder', () => {
    render(<SearchBar />)
    expect(screen.getByPlaceholderText('Search a book...')).toBeInTheDocument()
  })
})
