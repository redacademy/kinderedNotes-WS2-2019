import React, {useState} from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import {useActiveNote} from '../../hooks'
import {Input} from '../index'
import NotBookmarked from '../../../assets/icons/Bookmark.svg'
import Bookmarked from '../../../assets/icons/Bookmark_filled.svg'
import styles from './ReceivedNote.styles'

const ReceivedNote = () => {
  const {activeNote} = useActiveNote()
  const [isBookmarked, setIsBookmarked] = useState('')

  return (
    <SafeAreaView style={styles.receivedContainer}>
      <View style={styles.container}>
        <View style={styles.receivedNote}>
          <Text style={styles.font}>{activeNote.message}</Text>
          <TouchableOpacity
            style={styles.bookmark}
            onPress={() => setIsBookmarked(!isBookmarked)}
          >
            {isBookmarked ? <Bookmarked /> : <NotBookmarked />}
          </TouchableOpacity>
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
