import { render, screen } from '@testing-library/react'
import BookDetails from '../BookDetails'
import useBookDetails from '@/app/hooks/useBookDetails'

jest.mock('../../../../../hooks/useBookDetails.tsx')

describe('Book Details', () => {
  beforeEach(() => {
    ;(useBookDetails as jest.Mock).mockReturnValue({
      work: { key: '/books/OL37079411M' },
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

  it('should render the overview container', () => {
    render(<BookDetails bookId='OL37079411M' />)
    expect(
      screen.getByTestId('book-details-overview-container')
    ).toBeInTheDocument()
  })
  it('should render the edition container', () => {
    render(<BookDetails bookId='OL37079411M' />)
    expect(
      screen.getByTestId('book-details-edition-container')
    ).toBeInTheDocument()
  })
  it('should render the related subjects container', () => {
    render(<BookDetails bookId='OL37079411M' />)
    expect(screen.getByTestId('book-details-container')).toBeInTheDocument()
  })
})
