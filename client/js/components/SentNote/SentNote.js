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

const SentNote = () => {
  const {activeNote} = useActiveNote()

  return (
    <SafeAreaView style={styles.sentContainer}>
      <View style={styles.container}>
        <View style={styles.sentNote}>
          <View style={styles.messageContainer}>
            <Text style={styles.message}>{activeNote.message}</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.font}>See who read it</Text>
          </TouchableOpacity>
        </View>
        <Header>Who appreciated your note</Header>
        {/* TODO */}
        <ReplyNote avatarIndex={0} message="banana" />
        <ReplyNote avatarIndex={2} message="banana 2" />
        <ReplyNote avatarIndex={3} message="banana3" />
        <ReplyNote avatarIndex={4} message="banana" />
        <ReplyNote avatarIndex={5} message="banana" />
      </View>
    </SafeAreaView>
  )
}

export default SentNote
