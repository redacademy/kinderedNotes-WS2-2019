import React from 'react'
import {TextInput, View} from 'react-native'

const Input = props => (
  <View>
    <TextInput
      type="text"
      name="note-message"
      placeholder="Write a kind note"
      placeholderTextColor="#888B8D"
      {...props}
    />
  </View>
)

export default Input
