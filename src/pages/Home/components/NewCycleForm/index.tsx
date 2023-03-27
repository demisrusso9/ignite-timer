import { useFormContext } from 'react-hook-form'
import { CreateCycleData, useTimer } from '../../../../contexts/useTimer'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export function NewCycleForm() {
  const { createNewCycle, activeCycle } = useTimer()
  const { handleSubmit, register, reset } = useFormContext()

  function handleCreateNewCycle(data: CreateCycleData) {
    createNewCycle(data)
    reset()
  }

  return (
    <FormContainer
      id="startButton"
      onSubmit={handleSubmit(handleCreateNewCycle)}
      action=""
    >
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text"
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={Boolean(activeCycle)}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={1}
        disabled={Boolean(activeCycle)}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
