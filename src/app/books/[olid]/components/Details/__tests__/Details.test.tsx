import { screen, render } from '@testing-library/react'
import Details from '../Details'

describe('Details', () => {
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
