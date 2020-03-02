import React, {useState} from 'react'
import {View} from 'react-native'
import MessageInput from './MessageInput'
import ColorPalette from './ColorPalette'
import FontToggle from './FontToggle'
import NoteColor from './NoteColor'
import styles from './Note.styles'

const Note = ({value, onChangeText}) => {
  const [cardStyle, setCardStyle] = useState('BORDERED')
  const [color, setColor] = useState('BLUE')
  const [font, setFont] = useState('DEFAULT')

  const onFontToggle = () =>
    setFont(s => (s === 'DEFAULT' ? 'HANDWRITTEN' : 'DEFAULT'))
  const onColorToggle = () =>
    setColor(s => (s === 'BLUE' ? 'GREEN' : 'BLUE'))
  const onStyleToggle = () =>
    setCardStyle(s => (s === 'FILL' ? 'BORDERED' : 'FILL'))
  const iconColor = cardStyle === 'FILL' ? 'WHITE' : color

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.noteContainer,
          ...styles[`noteContainer${color}`],
          ...(cardStyle === 'FILL' &&
            styles[`noteContainerFill${color}`]),
        }}
      >
        <MessageInput
          style={cardStyle}
          font={font}
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
