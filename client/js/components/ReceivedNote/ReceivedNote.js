import React, {useState} from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import {useActiveNote, useAuth} from '../../hooks'
import {Bookmark, Input} from '../index'
import styles from './ReceivedNote.styles'
import {useMutation} from '@apollo/react-hooks'
import {CREATE_NOTE_RESPONSE, FAVORITE_NOTE} from '../../context'
import {COLORS} from '../styles'

const ReceivedNote = () => {
  const [createNoteResponse] = useMutation(CREATE_NOTE_RESPONSE, {
    refetchQueries: ['inbox'],
  })
  const [favoriteNote] = useMutation(FAVORITE_NOTE)
  const [replyInput, setReplyInput] = useState('')
  const {activeNote} = useActiveNote()
  const {user} = useAuth()
  const isFavorite = user?.user?.favoriteNotes?.some(
    ({id}) => id === activeNote.id,
  )

  const onReplySubmit = () => {
    createNoteResponse({
      variables: {
        id: activeNote.id,
        message: replyInput,
      },
    })
    setReplyInput('')
  }

  const toggleFavorite = () => {
    if (isFavorite) {
      console.log('TODO: remove note as favorite')
    } else {
      favoriteNote({variables: {id: activeNote.id}})
    }
  }

  return (
    <SafeAreaView style={styles.receivedContainer}>
      <View style={styles.container}>
        <View
          style={{
            ...styles.receivedNote,
            ...(activeNote.style === 'BORDERED' &&
              styles[`receivedNote${activeNote.color}`]),
            ...(activeNote.style === 'FILL' &&
              styles[`receivedNoteFill${activeNote.color}`]),
          }}
        >
          <Text
            style={{
              ...styles.message,
              fontFamily:
                activeNote.font === 'DEFAULT'
                  ? 'Nunito-SemiBold'
                  : activeNote.font === 'HANDWRITTEN'
                  ? 'Playlist-Script'
                  : 'PermanentMarker',
              color:
                activeNote.style === 'FILL'
                  ? COLORS.TEXT_PRIMARY.INVERT
                  : COLORS.INPUT.PLACEHOLDER,
            }}
          >
            {activeNote.message}
          </Text>
          <Bookmark filled={isFavorite} onPress={toggleFavorite} />
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
