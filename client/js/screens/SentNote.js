import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import {useActiveNote} from '../hooks'

const SentNote = () => {
  const {activeNote} = useActiveNote()

  return (
    <SafeAreaView>
      <Text>{activeNote.message} Sent Note Screen</Text>
    </SafeAreaView>
  )
}

export default SentNote
