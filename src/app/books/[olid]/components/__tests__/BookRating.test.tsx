import { screen, render } from '@testing-library/react'
import BookRating from '../BookRating'

describe('Book Rating', () => {
  it('should render the Rate this book text', () => {
    render(<BookRating book={{ title: 'The Hunger Games' }} />)
    expect(screen.getByText('Rate this book')).toBeInTheDocument()
  })
})
