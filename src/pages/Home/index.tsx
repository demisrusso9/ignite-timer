import { Play, HandPalm } from 'phosphor-react'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { NewCycleForm } from './components/NewCycleForm'
import { CountDown } from './components/CountDown'

import { useTimer } from '../../contexts/useTimer'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo precisa ser de no mínimo de 5')
    .max(60, 'O ciclo precisa ser de no máximo de 60'),
})

export type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { interruptCurrentCycle, activeCycle } = useTimer()

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { watch } = newCycleForm

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <FormProvider {...newCycleForm}>
        <NewCycleForm />
      </FormProvider>

      <CountDown />

      {activeCycle ? (
        <StopCountdownButton type="button" onClick={interruptCurrentCycle}>
          <HandPalm size={24} /> Interromper
        </StopCountdownButton>
      ) : (
        <StartCountdownButton
          disabled={isSubmitDisabled}
          type="submit"
          form="startButton"
        >
          <Play size={24} /> Começar
        </StartCountdownButton>
      )}
    </HomeContainer>
  )
}
