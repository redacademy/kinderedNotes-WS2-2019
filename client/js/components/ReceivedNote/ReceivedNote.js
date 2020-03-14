import React, {useState} from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import {useActiveNote} from '../../hooks'
import {Bookmark, Input} from '../index'
import styles from './ReceivedNote.styles'
import {useMutation} from '@apollo/react-hooks'
import {CREATE_NOTE_RESPONSE} from '../../context'

const ReceivedNote = () => {
  const [createNoteResponse] = useMutation(CREATE_NOTE_RESPONSE, {
    refetchQueries: ['inbox'],
  })
  const [replyInput, setReplyInput] = useState('')
  const {activeNote} = useActiveNote()

  const onReplySubmit = () => {
    createNoteResponse({
      variables: {
        id: activeNote.id,
        message: replyInput,
      },
    })
    setReplyInput('')
  }

  return (
    <SafeAreaView style={styles.receivedContainer}>
      <View style={styles.container}>
        <View style={styles.receivedNote}>
          <Text style={styles.font}>{activeNote.message}</Text>
          <Bookmark />
        </View>
        <Input
          value={replyInput}
          onChangeText={setReplyInput}
          placeholder={'Thanks for this note.'}
        />
        <TouchableOpacity
          onPress={onReplySubmit}
          style={styles.replyButton}
        >
          <Text style={styles.reply}>Reply</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ReceivedNote
