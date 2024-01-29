import { render, screen } from '@testing-library/react'
import Home from '../page'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

describe('Home', () => {
  it('should render home page text', () => {
    render(<Home />)

    expect(screen.getByText('Home Page')).toBeInTheDocument()
  })
})
