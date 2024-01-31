import { render, screen } from '@testing-library/react'
import Navbar from '../Navbar'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

describe('Navbar', () => {
  // it('should render the books tab', () => {
  //   render(<Navbar />)
  //   expect(screen.getByText('Books')).toBeInTheDocument()
  // })
  it('should render the icon to redirect back to home', () => {
    render(<Navbar />)
    expect(screen.getByTestId('home-icon')).toBeInTheDocument()
  })
  it('should render nav link list', () => {
    render(<Navbar />)
    expect(screen.getByTestId('nav-link-list')).toBeInTheDocument()
  })
})
