import { screen, render } from '@testing-library/react'
import Book from '../Book'

describe('Book', () => {
  it('should render the book', () => {
    const work = {
      key: '/works/OL12345W',
      title: 'Test Book',
    }
    render(<Book work={work} />)
    expect(screen.getByTestId('book-container')).toBeInTheDocument()
    expect(screen.getByAltText('Test Book cover')).toBeInTheDocument()
  })
})
