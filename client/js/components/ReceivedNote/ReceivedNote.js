import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import {useActiveNote} from '../../hooks'
import {Bookmark, Input} from '../index'
import styles from './ReceivedNote.styles'

const ReceivedNote = () => {
  const {activeNote} = useActiveNote()

  return (
    <SafeAreaView style={styles.receivedContainer}>
      <View style={styles.container}>
        <View style={styles.receivedNote}>
          <Text style={styles.font}>{activeNote.message}</Text>
          <Bookmark />
        </View>
        <Input placeholder={'Thanks for this note.'} />
        <TouchableOpacity style={styles.replyButton}>
          <Text style={styles.reply}>Reply</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ReceivedNote
