import { screen, render } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
  it('should render author name', () => {
    render(<Footer />)
    expect(screen.getByText('Spencer Rafada')).toBeInTheDocument()
  })
  it('should render current year', () => {
    const currentYear = new Date().getFullYear().toString()

    render(<Footer />)
    expect(screen.getByText(currentYear)).toBeInTheDocument()
  })
})
