import { screen, render } from '@testing-library/react'
import GenreContent from '../GenreContent'

describe('Genre Content', () => {
  it('should render the genre content', () => {
    render(<GenreContent key='novel' />)
    expect(screen.getByTestId('genre-content-container')).toBeInTheDocument()
  })
})
