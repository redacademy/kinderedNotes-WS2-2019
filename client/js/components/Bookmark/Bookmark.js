import React from 'react'
import {TouchableOpacity} from 'react-native'
import BookmarkIcon from '../../../assets/icons/Bookmark.svg'
import BookmarkIconFill from '../../../assets/icons/Bookmark_filled.svg'
import styles from './Bookmark.styles'

const Bookmark = ({onPress, filled = false}) => (
  <TouchableOpacity style={styles.bookmark} onPress={onPress}>
    {filled ? <BookmarkIconFill /> : <BookmarkIcon />}
  </TouchableOpacity>
)

export default Bookmark
