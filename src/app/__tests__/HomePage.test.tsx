import { render, screen } from '@testing-library/react'
import Home from '../page'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

describe('Home', () => {
  it('should render the search bar', () => {
    render(<Home />)

    expect(screen.getByTestId('search-bar-container')).toBeInTheDocument()
  })
})
