import React from 'react'
import {TouchableOpacity} from 'react-native'
import {useActiveNote} from '../../hooks'
import BookmarkIcon from '../../../assets/icons/Bookmark.svg'
import BookmarkBlue from '../../../assets/icons/BookmarkBlue.svg'
import BookmarkGreen from '../../../assets/icons/BookmarkGreen.svg'
import BookmarkIconFill from '../../../assets/icons/Bookmark_filled.svg'
import BlueBookmarkIconFill from '../../../assets/icons/Bookmark_filledBlue.svg'
import GreenBookmarkIconFill from '../../../assets/icons/Bookmark_filledGreen.svg'
import styles from './Bookmark.styles'

const Bookmark = ({onPress, filled = false}) => {
  const {activeNote} = useActiveNote()
  return (
    <TouchableOpacity style={styles.bookmark} onPress={onPress}>
      {activeNote.style === 'BORDERED' &&
      activeNote.color === 'BLUE' ? (
        filled ? (
          <BlueBookmarkIconFill />
        ) : (
          <BookmarkBlue />
        )
      ) : activeNote.style === 'BORDERED' &&
        activeNote.color === 'GREEN' ? (
        filled ? (
          <GreenBookmarkIconFill />
        ) : (
          <BookmarkGreen />
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
