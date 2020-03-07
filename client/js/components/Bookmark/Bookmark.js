import React, {useState} from 'react'
import {TouchableOpacity} from 'react-native'
import NotBookmarked from '../../../assets/icons/Bookmark.svg'
import Bookmarked from '../../../assets/icons/Bookmark_filled.svg'
import styles from './Bookmark.styles'

const Bookmark = () => {
  const [isBookmarked, setIsBookmarked] = useState('')

  return (
    <TouchableOpacity
      style={styles.bookmark}
      onPress={() => setIsBookmarked(!isBookmarked)}
    >
      {isBookmarked ? <Bookmarked /> : <NotBookmarked />}
    </TouchableOpacity>
  )
}

export default Bookmark
