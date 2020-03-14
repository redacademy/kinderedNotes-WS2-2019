import useMachine from 'react-use-machine'
import walkthroughMachine from './state-machine.js'

const useWalkthrough = () => {
  const {state, event, dispatch} = useMachine(
    walkthroughMachine,
    'WRITE_FADING_IN',
  )

  const toggleNextView = () => dispatch('NEXT_VIEW')
  const togglePrevView = () => dispatch('PREV_VIEW')
  const nextDisabled = ![
    'WRITE_VIEW',
    'RECEIVE_VIEW',
    'SPREAD_VIEW',
  ].includes(state)
  const prevDisabled = !['RECEIVE_VIEW', 'SPREAD_VIEW'].includes(
    state,
  )

  return {
    state,
    event,
    dispatch,
    nextDisabled,
    prevDisabled,
    toggleNextView,
    togglePrevView,
  }
}

export default useWalkthrough
