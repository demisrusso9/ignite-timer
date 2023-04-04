import { render, screen } from '@testing-library/react'
import { Header } from '.'

jest.mock('react-router-dom')

describe('Component', () => {
  it('renders correctly', () => {
    render(<Header />)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
