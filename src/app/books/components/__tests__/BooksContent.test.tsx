import { screen, render } from '@testing-library/react'
import BooksContent from '../BooksContent'
import { useSearchProvider } from '@/app/providers/SearchProvider'

describe('BooksContent', () => {
  it('should not render the search header by default', () => {
    render(<BooksContent />)
    expect(
      screen.queryByTestId('books-header-container')
    ).not.toBeInTheDocument()
  })
})
