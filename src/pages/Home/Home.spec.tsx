import { render, screen, fireEvent } from '@testing-library/react'
import { Home } from '.'
import { useTimer } from '../../contexts/useTimer'

jest.mock('../../contexts/useTimer')

describe('Home Component', () => {
  it('renders correctly', () => {
    const useTimerMocked = jest.mocked(useTimer)

    useTimerMocked.mockReturnValue({
      minutes: '05',
      seconds: '30',
    } as any)

    render(<Home />)

    expect(screen.getByText('Começar')).toBeInTheDocument()
  })
})
