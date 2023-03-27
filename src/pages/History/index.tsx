import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { useTimer } from '../../contexts/useTimer'
import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  const { cycles } = useTimer()

  const formattedDate = (date: Date) =>
    formatDistanceToNow(date, {
      addSuffix: true,
      locale: ptBr,
    })

  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>{formattedDate(new Date(cycle.startDate))}</td>

                {cycle.finishedDate && (
                  <td>
                    <Status statusColor="green">Concluído</Status>
                  </td>
                )}

                {cycle.interruptedDate && (
                  <td>
                    <Status statusColor="red">Interrompido</Status>
                  </td>
                )}

                {!cycle.finishedDate && !cycle.interruptedDate && (
                  <td>
                    <Status statusColor="yellow">Em andamento</Status>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
