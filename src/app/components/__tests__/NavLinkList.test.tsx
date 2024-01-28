import { screen, render } from '@testing-library/react'
import NavLinkList from '../NavLinkList'
import { usePathname } from 'next/navigation'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

describe('NavLinkList', () => {
  it('should render navlinklist', () => {
    render(<NavLinkList />)
    expect(screen.getByTestId('nav-link-list')).toBeInTheDocument()
  })
  it('should not render search bar on home page', () => {
    ;(usePathname as jest.Mock).mockReturnValue('/')
    render(<NavLinkList />)
    expect(screen.queryByTestId('search-bar')).not.toBeInTheDocument()
  })
  it('should render search bar on other page', () => {
    ;(usePathname as jest.Mock).mockReturnValue('/books')
    render(<NavLinkList />)
    expect(screen.queryByTestId('search-bar')).toBeInTheDocument()
  })
})
