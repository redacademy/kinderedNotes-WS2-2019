import React, {useState} from 'react'
import {View} from 'react-native'
import {Button, Input} from '../../components'
import styles from './Note.styles'

const Note = ({onSubmit}) => {
  const [messageInput, setMessageInput] = useState('')
  const submitNote = () => {
    onSubmit({
      variables: {
        message: messageInput,
      },
    })
    setMessageInput('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.noteContainer}>
        <Input value={messageInput} onChangeText={setMessageInput} />
      </View>
      <Button onPress={submitNote}>Post</Button>
    </View>
  )
}

export default Note
