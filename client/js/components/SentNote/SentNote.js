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

const SentNote = ({onPress}) => {
  const {activeNote} = useActiveNote()

  return (
    <SafeAreaView style={styles.sentContainer}>
      <View style={styles.container}>
        <View style={styles.sentNote}>
          <View style={styles.messageContainer}>
            <Text style={styles.message}>{activeNote.message}</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.font}>See who read it</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{maxHeight: '100%', height: '45%'}}>
          <Header>Who appreciated your note</Header>
          <View style={styles.notesContainer}>
            {activeNote.responses &&
              activeNote.responses.map(({id, message, avatar}) => (
                <ReplyNote
                  key={id}
                  avatarIndex={avatar}
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
