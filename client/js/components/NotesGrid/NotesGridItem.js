import React from 'react'
import {View} from 'react-native'
import styles from './NotesGrid.styles'

const NotesGridItem = ({bg = '#48a9c6', children}) => (
  <View
    style={{
      ...styles.item,
      backgroundColor: bg,
    }}
  >
    {children}
  </View>
)

export default NotesGridItem
