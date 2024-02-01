import { screen, render } from '@testing-library/react'
import Details from '../Details'
import useBookDetails from '@/app/hooks/useBookDetails'

jest.mock('../../../../../hooks/useBookDetails.tsx')

describe('Details', () => {
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
  it('should render the container', () => {
    render(<Details bookId='OL37079411M' />)
    expect(screen.getByTestId('books-details-details-tab')).toBeInTheDocument()
  })
  it('should render the OpenLibrary Id', () => {
    render(<Details bookId='OL37079411M' />)
    expect(
      screen.getByTestId('books-details-openlibrary-id')
    ).toBeInTheDocument()
  })
  it('should render the ISBN', () => {
    render(<Details bookId='OL37079411M' />)
    expect(screen.getByTestId('books-details-isbn')).toBeInTheDocument()
  })
})
