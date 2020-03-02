import React from 'react'
import {Text, Button} from 'react-native'
import {useWalkthrough} from '../hooks'

const Walkthrough = ({onComplete}) => {
  const {
    state,
    event,
    nextDisabled,
    prevDisabled,
    toggleNextView,
    togglePrevView,
  } = useWalkthrough(onComplete)

  return (
    <>
      <Text>
        {state}, {event}
      </Text>
      <Button
        disabled={nextDisabled}
        onPress={toggleNextView}
        title="next"
      />
      <Button
        disabled={prevDisabled}
        onPress={togglePrevView}
        title="back"
      />
    </>
  )
}

export default Walkthrough
