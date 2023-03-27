import { Cycle } from '../../contexts/useTimer'
import { ActionTypes, ActionTypesProps } from './action'
import { produce } from 'immer'

interface CycleState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: CycleState, action: ActionTypesProps) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
    case ActionTypes.INTERRUPT_CURRENT_CYCLE:
      return produce(state, (draft) => {
        const index = draft.cycles.findIndex(
          (cycle) => cycle.id === state.activeCycleId,
        )
        draft.cycles[index].interruptedDate = new Date()
        draft.activeCycleId = null
      })
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
      return produce(state, (draft) => {
        const index = draft.cycles.findIndex(
          (cycle) => cycle.id === state.activeCycleId,
        )
        draft.cycles[index].finishedDate = new Date()
        draft.activeCycleId = null
      })
    default:
      return state
  }
}
