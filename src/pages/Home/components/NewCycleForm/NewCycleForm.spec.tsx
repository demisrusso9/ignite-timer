import { render, screen, fireEvent } from '@testing-library/react'
import { NewCycleForm } from '.'
import { useTimer } from '../../../../contexts/useTimer'

jest.mock('react-hook-form', () => {
  return {
    useFormContext() {
      return {
        handleSubmit: jest.fn(),
        register: jest.fn(),
        reset: jest.fn(),
      }
    },
  }
})

jest.mock('../../../../contexts/useTimer', () => {
  return {
    useTimer() {
      return {
        handleCreateNewCycle: jest.fn(),
      }
    },
  }
})

describe('NewCycleForm Component', () => {
  it('renders correctly', () => {
    render(<NewCycleForm />)
    expect(screen.getByText('minutos.')).toBeInTheDocument()

    screen.logTestingPlaygroundURL()
  })

  // it('Submit', () => {
  //   const submitFormMock = jest.spyOn()

  //   const { debug } = render(<NewCycleForm />)

  //   const taskInput = screen.getByRole('combobox', {
  //     name: /vou trabalhar em/i,
  //   })

  //   const minutesInput = screen.getByRole('spinbutton', { name: /durante/i })

  //   fireEvent.change(taskInput, { target: { value: 'fake-test-task' } })
  //   fireEvent.change(minutesInput, { target: { value: 20 } })

  //   debug()
  // })
})
