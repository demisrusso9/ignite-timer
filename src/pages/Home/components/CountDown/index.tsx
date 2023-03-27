import { differenceInSeconds } from 'date-fns'
import { useEffect } from 'react'
import { useTimer } from '../../../../contexts/useTimer'
import { CountdownContainer, Separator } from './styles'

export function CountDown() {
  const {
    minutes,
    seconds,
    activeCycle,
    activeCycleId,
    totalSeconds,
    handleAmountSecondsPassed,
    markCurrentCycleAsFinished,
  } = useTimer()

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()

          handleAmountSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          handleAmountSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    handleAmountSecondsPassed,
  ])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    } else {
      document.title = 'Ignite timer'
    }
  }, [activeCycle, minutes, seconds])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
