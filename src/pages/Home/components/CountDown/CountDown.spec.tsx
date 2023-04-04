import {
  render,
  screen,
  fireEvent,
  renderHook,
  waitFor,
  act,
} from '@testing-library/react'
import React, { useState } from 'react'
import { CountDown } from '.'
import { useTimer } from '../../../../contexts/useTimer'

jest.mock('../../../../contexts/useTimer')

describe('CountDown Component', () => {
  it('renders correctly', () => {
    const useTimerMocked = jest.mocked(useTimer)

    useTimerMocked.mockReturnValueOnce({
      minutes: '05',
      seconds: '30',
    } as any)

    render(<CountDown />)

    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('changes the tab title when it has a active cycle', async () => {
    const useTimerMocked = jest.mocked(useTimer)

    useTimerMocked.mockReturnValueOnce({
      minutes: '00',
      seconds: '00',
    } as any)

    const { rerender } = render(<CountDown />)

    await waitFor(() => expect(document.title).toBe('Ignite timer'))

    useTimerMocked.mockReturnValueOnce({
      activeCycle: {
        id: 1,
        task: 'fake-task',
        minutesAmount: '20',
      },
      minutes: '20',
      seconds: '00',
    } as any)

    rerender(<CountDown />)

    await waitFor(() => expect(document.title).toBe('20:00'))
  })
})
