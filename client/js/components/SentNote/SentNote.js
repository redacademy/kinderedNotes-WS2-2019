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
          {/* TODO */}
          <View style={styles.notesContainer}>
            <ReplyNote
              avatarIndex={0}
              message="thanks for the apple"
            />
            <ReplyNote
              avatarIndex={2}
              message="thanks for the grape"
            />
            <ReplyNote
              avatarIndex={3}
              message="thanks for the orange"
            />
            <ReplyNote
              avatarIndex={4}
              message="thanks for the banana"
            />
            <ReplyNote
              avatarIndex={5}
              message="thanks for the banana"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default SentNote
