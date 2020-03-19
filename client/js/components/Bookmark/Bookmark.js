import React from 'react'
import {TouchableOpacity} from 'react-native'
import {useActiveNote} from '../../hooks'
import BookmarkIcon from '../../../assets/icons/Bookmark.svg'
import BookmarkBlue from '../../../assets/icons/BookmarkBlue.svg'
import BookmarkIconFill from '../../../assets/icons/Bookmark_filled.svg'
import BlueBookmarkIconFill from '../../../assets/icons/Bookmark_filledBlue.svg'
import styles from './Bookmark.styles'

const Bookmark = ({onPress, filled = false}) => {
  const {activeNote} = useActiveNote()
  return (
    <TouchableOpacity style={styles.bookmark} onPress={onPress}>
      {activeNote.style === 'BORDERED' ? (
        filled ? (
          <BlueBookmarkIconFill />
        ) : (
          <BookmarkBlue />
        )
      ) : filled ? (
        <BookmarkIconFill />
      ) : (
        <BookmarkIcon />
      )}
    </TouchableOpacity>
  )
}

export default Bookmark
