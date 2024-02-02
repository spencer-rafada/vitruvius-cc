import { screen, render } from '@testing-library/react'
import GenreList from '../GenreList'

describe('GenreList', () => {
  it('should render the genre list', () => {
    render(<GenreList />)
    expect(screen.getByTestId('genre-list-container')).toBeInTheDocument()
  })
})
