import { screen, render } from '@testing-library/react'
import Loading from '../Loading'

describe('Loading', () => {
  it('should show the falling lines', () => {
    render(<Loading />)
    expect(screen.getByTestId('falling-lines-spinner')).toBeInTheDocument()
  })
})
