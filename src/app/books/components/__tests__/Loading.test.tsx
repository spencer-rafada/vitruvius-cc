import { screen, render } from '@testing-library/react'
import Loading from '../Loading'
import { useSearchProvider } from '@/app/providers/SearchProvider'

jest.mock('../../../providers/SearchProvider.tsx', () => ({
  useSearchProvider: jest.fn(),
}))

describe('Loading', () => {
  it('should show the falling lines', () => {
    ;(useSearchProvider as jest.Mock).mockReturnValue({ loading: true })
    render(<Loading />)
    expect(screen.getByTestId('falling-lines-spinner')).toBeInTheDocument()
  })
})
