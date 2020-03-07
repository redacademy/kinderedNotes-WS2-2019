import React, {useState} from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import {useActiveNote} from '../../hooks'
import {Header} from '../Typography'
import NotBookmarked from '../../../assets/icons/Bookmark.svg'
import Bookmarked from '../../../assets/icons/Bookmark_filled.svg'
import styles from './ReceivedNote.styles'

const ReceivedNote = () => {
  const {activeNote} = useActiveNote()
  const [isBookmarked, setIsBookmarked] = useState(false)

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
      </View>
    </SafeAreaView>
  )
}

export default ReceivedNote
