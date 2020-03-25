import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import {useActiveNote} from '../../hooks'
import {Header} from '../Typography'
import styles from './SentNote.styles'
import ReplyNote from '../Reply'
import {ScrollView} from 'react-native-gesture-handler'
import {COLORS} from '../styles'

const SentNote = ({onPress}) => {
  const {activeNote} = useActiveNote()

  return (
    <SafeAreaView style={styles.sentContainer}>
      <View style={styles.container}>
        <View
          style={{
            ...styles.sentNote,
            ...(activeNote.style === 'BORDERED' &&
              styles[`sentNote${activeNote.color}`]),
            ...(activeNote.style === 'FILL' &&
              styles[`sentNoteFill${activeNote.color}`]),
          }}
        >
          <View style={styles.messageContainer}>
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
          </View>
          <TouchableOpacity
            style={{
              ...styles.button,
              ...(activeNote.style === 'BORDERED' &&
                styles[`buttonFill${activeNote.color}`]),
            }}
            onPress={onPress}
          >
            <Text
              style={{
                ...styles.font,
                ...(activeNote.style === 'BORDERED'
                  ? styles[`buttonColor${activeNote.color}`]
                  : styles[`buttonColorFilled${activeNote.color}`]),
              }}
            >
              See who read it
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{maxHeight: '100%', height: '45%'}}>
          <Header style={{alignSelf: 'flex-start'}}>
            Who appreciated your note
          </Header>
          <View style={styles.notesContainer}>
            {activeNote.responses &&
              activeNote.responses.map(({id, message, author}) => (
                <ReplyNote
                  key={id}
                  avatarIndex={author.avatar}
                  name={author.username}
                  message={message}
                />
              ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default SentNote
