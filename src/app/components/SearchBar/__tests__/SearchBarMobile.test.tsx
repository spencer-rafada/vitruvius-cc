import { screen, render, fireEvent } from '@testing-library/react'
import SearchBarMobile from '../SearchBarMobile'

describe('Search Bar Mobile', () => {
  it('should render the toggle button', () => {
    render(<SearchBarMobile />)
    expect(screen.getByTestId('search-toggle-button')).toBeInTheDocument()
  })
  it('should open the search bar dialog when the button is clicked', () => {
    render(<SearchBarMobile />)
    const button = screen.getByTestId('search-toggle-button')
    fireEvent.click(button)
    expect(
      screen.getByTestId('search-bar-dialog-container')
    ).toBeInTheDocument()
  })
})
