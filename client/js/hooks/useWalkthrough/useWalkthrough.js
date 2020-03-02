import {useEffect} from 'react'
import useMachine from 'react-use-machine'
import walkthroughMachine from './state-machine.js'

const useWalkthrough = onComplete => {
  const {state, event, dispatch} = useMachine(
    walkthroughMachine,
    'WRITE_FADING_IN',
  )

  useEffect(() => {
    switch (state) {
      case 'WRITE_FADING_IN':
        setTimeout(() => dispatch('DONE'), 400)
        break
      case 'RECEIVE_FADING_IN':
        setTimeout(() => dispatch('DONE'), 400)
        break
      case 'RECEIVE_FADING_OUT':
        setTimeout(() => dispatch('DONE'), 400)
        break
      case 'MAIL_OPENING':
        setTimeout(() => dispatch('DONE'), 400)
        break
      case 'SPREAD_FADING_IN':
        setTimeout(() => dispatch('DONE'), 400)
        break
      case 'SPREAD_FADING_OUT':
        setTimeout(() => dispatch('DONE'), 400)
        break
      case 'WALKTHROUGH_FADING_OUT':
        setTimeout(() => {
          onComplete()
        }, 400)
        break
      default:
        break
    }
  }, [state, dispatch, onComplete])

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
