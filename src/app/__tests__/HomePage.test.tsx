import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home', () => {
  it('should render home page text', () => {
    render(<Home />)

    expect(screen.getByText('Home Page')).toBeInTheDocument()
  })
})
