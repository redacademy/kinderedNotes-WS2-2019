import React from 'react'
import {View} from 'react-native'
import MessageInput from './MessageInput'
import ColorPalette from './ColorPalette'
import FontToggle from './FontToggle'
import NoteColor from './NoteColor'
import styles from './Note.styles'

const Note = ({value, onChangeText, options, onChangeOptions}) => {
  const {color, font, style} = options

  const onFontToggle = () => {
    if (font === 'DEFAULT') {
      onChangeOptions({font: 'HANDWRITTEN'})
    } else if (font === 'HANDWRITTEN') {
      onChangeOptions({font: 'CURSIVE'})
    } else {
      onChangeOptions({font: 'DEFAULT'})
    }
  }
  const onColorToggle = () => {
    const newVal = color === 'BLUE' ? 'GREEN' : 'BLUE'
    onChangeOptions({color: newVal})
  }
  const onStyleToggle = () => {
    const newVal = style === 'FILL' ? 'BORDERED' : 'FILL'
    onChangeOptions({style: newVal})
  }
  const iconColor = style === 'FILL' ? 'WHITE' : color

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.noteContainer,
          ...styles[`noteContainer${color}`],
          ...(style === 'FILL' &&
            styles[`noteContainerFill${color}`]),
        }}
      >
        <MessageInput
          style={style}
          font={font}
          color={color}
          value={value}
          onChangeText={onChangeText}
        />

        <View style={styles.noteOptions}>
          <FontToggle color={iconColor} onPress={onFontToggle} />
          <ColorPalette color={iconColor} onPress={onColorToggle} />
          <NoteColor color={iconColor} onPress={onStyleToggle} />
        </View>
      </View>
    </View>
  )
}

export default Note
