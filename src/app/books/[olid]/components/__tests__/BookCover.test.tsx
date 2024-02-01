import { screen, render, fireEvent, getByRole } from '@testing-library/react'
import BookCover from '../BookCover'
import useBookDetails from '@/app/hooks/useBookDetails'

jest.mock('../../../../hooks/useBookDetails.tsx')

describe('BookCover', () => {
  beforeEach(() => {
    ;(useBookDetails as jest.Mock).mockReturnValue({
      work: { key: '/books/OL37079411M', id_amazon: ['123'] },
      book: {
        isbn: ['9781408855652'],
        key: '/books/OL37079411M',
        language: ['eng'],
        publish_date: ['2014'],
        publisher: ['Bloomsbury Childrens'],
        title: "Harry Potter and the Philosopher's Stone",
      },
      error: false,
      loading: false,
    })
  })
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render the book cover', () => {
    ;(useBookDetails as jest.Mock).mockReturnValue({
      work: { id_amazon: ['123'] },
      book: { key: '/books/OL37079411M' },
      loading: false,
      error: false,
    })
    render(<BookCover bookId='OL37079411M' />)
    expect(screen.getByTestId('book-details-book-cover')).toBeInTheDocument()
  })
  it('should render the buy button', () => {
    render(<BookCover bookId='OL37079411M' />)
    expect(screen.queryByTestId('book-details-buy-button')).toBeInTheDocument()
  })
  it('should render the loading state', () => {
    ;(useBookDetails as jest.Mock).mockReturnValue({
      work: { id_amazon: ['123'] },
      book: { key: '/books/OL37079411M' },
      loading: true,
      error: false,
    })
    render(<BookCover bookId='OL37079411M' />)
    expect(screen.getByTestId('book-details-loading-state')).toBeInTheDocument()
  })
  it('should render the error state', () => {
    ;(useBookDetails as jest.Mock).mockReturnValue({
      work: { id_amazon: ['123'] },
      book: { key: '/books/OL37079411M' },
      loading: false,
      error: true,
    })
    render(<BookCover bookId='OL37079411M' />)
    expect(screen.queryByTestId('book-details-error-state')).toBeInTheDocument()
  })
  it('should render the rating component', () => {
    render(<BookCover bookId='OL37079411M' />)
    expect(
      screen.queryByTestId('book-details-rating-container')
    ).toBeInTheDocument()
  })
})
