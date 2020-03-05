import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import {useActiveNote} from '../hooks'

const ReceivedNote = () => {
  const {activeNote} = useActiveNote()

  return (
    <SafeAreaView>
      <Text>{activeNote.message} Received Note Screen</Text>
    </SafeAreaView>
  )
}

export default ReceivedNote
