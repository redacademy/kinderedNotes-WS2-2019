import React from 'react'
import {Text} from 'react-native'
import {useActiveNote} from '../hooks'

const Note = () => {
  const {activeNote} = useActiveNote()

  return <Text>{activeNote.message}</Text>
}

export default Note
