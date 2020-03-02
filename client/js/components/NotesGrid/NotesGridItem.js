import React from 'react'
import {View} from 'react-native'
import styles from './NotesGrid.styles'
import {COLORS} from '../styles'

const NotesGridItem = ({style, color, children}) => (
  <View
    style={{
      ...styles.item,
      backgroundColor:
        style === 'BORDERED'
          ? COLORS.TEXT_PRIMARY.INVERT
          : COLORS[`ACCENT_${color}`],
    }}
  >
    {children}
  </View>
)

export default NotesGridItem
