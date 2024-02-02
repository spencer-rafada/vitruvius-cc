import { screen, render } from '@testing-library/react'
import Suggested from '../Suggested'
import useSuggestion from '@/app/hooks/useSuggestion'
jest.mock('../../hooks/useSuggestion')

describe('Suggested', () => {
  beforeEach(() => {
    ;(useSuggestion as jest.Mock).mockReturnValue({
      data: [
        {
          key: '/books/OL37079411M',
          title: "Harry Potter and the Philosopher's Stone",
        },
        {
          key: '/books/OL37079412M',
          title: "Harry Potter and the Philosopher's Stone",
        },
        {
          key: '/books/OL37079413M',
          title: "Harry Potter and the Philosopher's Stone",
        },
      ],
      loading: false,
      error: false,
    })
  })
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('renders the Suggested component', () => {
    render(<Suggested />)
    expect(screen.getByTestId('home-suggested-container')).toBeInTheDocument()
  })
  it('should render the suggested header', () => {
    render(<Suggested />)
    expect(screen.getByTestId('home-suggested-header')).toBeInTheDocument()
  })
  it('should render the suggested list', () => {
    render(<Suggested />)
    expect(screen.getByTestId('home-suggested-list')).toBeInTheDocument()
  })
})
