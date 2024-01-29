import { screen, render } from '@testing-library/react'
import BooksContent from '../BooksContent'
import { useSearchProvider } from '@/app/providers/SearchProvider'

describe('BooksContent', () => {
  it('should render the message of your queue', () => {
    render(<BooksContent />)
    expect(screen.getByTestId('books-header-container')).toBeInTheDocument()
  })
})
