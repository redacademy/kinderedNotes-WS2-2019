import React from 'react'
import {TextInput, View} from 'react-native'

const MessageInput = ({value, onChangeText}) => (
  <View>
    <TextInput
      type="text"
      name="note-message"
      placeholder="Write a kind note"
      placeholderTextColor="#888B8D"
      value={value}
      onChangeText={onChangeText}
    />
  </View>
)

export default MessageInput
