import React from 'react'
import {TextInput, View} from 'react-native'
import {COLORS} from '../styles'

const MessageInput = ({value, onChangeText, style, font}) => (
  <View>
    <TextInput
      style={{fontFamily: font === 'DEFAULT' ? 'Nunito' : 'Times'}}
      type="text"
      name="note-message"
      placeholder="Write a kind note"
      placeholderTextColor={
        style === 'FILL'
          ? COLORS.TEXT_PRIMARY.INVERT
          : COLORS.INPUT.PLACEHOLDER
      }
      value={value}
      onChangeText={onChangeText}
    />
  </View>
)

export default MessageInput
