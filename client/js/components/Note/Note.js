import React from 'react'
import {View} from 'react-native'
import MessageInput from './MessageInput'
import ColorPalette from './ColorPalette'
import FontToggle from './FontToggle'
import NoteColor from './NoteColor'
import styles from './Note.styles'

const Note = ({value, onChangeText}) => (
  <View style={styles.container}>
    <View style={styles.noteContainer}>
      <MessageInput value={value} onChangeText={onChangeText} />

      <View style={styles.noteOptions}>
        <FontToggle />
        <ColorPalette />
        <NoteColor />
      </View>
    </View>
  </View>
)

export default Note
