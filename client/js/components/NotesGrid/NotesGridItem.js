import React from 'react'
import {TouchableOpacity} from 'react-native'
import styles from './NotesGrid.styles'
import {COLORS} from '../styles'

const NotesGridItem = ({style, color, onPress, children}) => (
  <TouchableOpacity
    style={{
      ...styles.item,
      backgroundColor:
        style === 'BORDERED'
          ? COLORS.TEXT_PRIMARY.INVERT
          : COLORS[`ACCENT_${color}`],
      borderColor:
        style === 'BORDERED' ? COLORS[`ACCENT_${color}`] : 0,
      borderWidth: style === 'BORDERED' ? 0.5 : 0,
    }}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
)

export default NotesGridItem
