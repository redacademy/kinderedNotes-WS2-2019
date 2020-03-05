import React from 'react'
import {useActiveNote} from '../../hooks'
import {SafeAreaView, View, Text} from 'react-native'

const SentNote = () => {
  const {activeNote} = useActiveNote()

  return (
    <SafeAreaView>
      <Text>{activeNote.message}</Text>
    </SafeAreaView>
  )
}

export default SentNote
