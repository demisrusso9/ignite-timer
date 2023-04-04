// import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { History } from '.'
import { useTimer } from '../../contexts/useTimer'

jest.mock('../../contexts/useTimer')

describe('History Component', () => {
  it('renders correctly', () => {
    const useTimerMocked = jest.mocked(useTimer)

    useTimerMocked.mockReturnValueOnce({
      cycles: [],
    } as any)

    render(<History />)

    expect(screen.getByText('Meu Histórico')).toBeInTheDocument()
  })
  it('renders list cycles', async () => {
    const useTimerMocked = jest.mocked(useTimer)

    useTimerMocked.mockReturnValueOnce({
      cycles: [
        {
          id: 1,
          task: 'fake-task',
          minutesAmount: 20,
          startDate: new Date(),
        },
      ],
    } as any)

    render(<History />)

    expect(screen.getByText('fake-task')).toBeInTheDocument()
    expect(screen.getByText('20 minutos')).toBeInTheDocument()
  })
})
