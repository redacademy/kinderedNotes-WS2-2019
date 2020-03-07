import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import {useActiveNote} from '../../hooks'
import {Header} from '../Typography'
import Bookmarked from '../../../assets/icons/Bookmark.svg'
import styles from './ReceivedNote.styles'

const ReceivedNote = () => {
  const {activeNote} = useActiveNote()

  return (
    <SafeAreaView style={styles.receivedContainer}>
      <View style={styles.container}>
        <View style={styles.receivedNote}>
          <Text style={styles.font}>{activeNote.message}</Text>
          <TouchableOpacity style={styles.bookmark}>
            <Bookmarked />
          </TouchableOpacity>
        </View>
        <Header>Who appreciated your note</Header>
      </View>
    </SafeAreaView>
  )
}

export default ReceivedNote
