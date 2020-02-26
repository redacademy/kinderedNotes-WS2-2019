import React, {useState} from 'react'
import {TextInput, View} from 'react-native'

const Input = () => {
  const [placeholder, setPlaceholder] = useState('Write a kind note')
  return (
    <View>
      <TextInput
        type="text"
        name="note-message"
        placeholder={placeholder}
        placeholderTextColor="#000"
        onChangeText={text => setPlaceholder(text)}
      />
    </View>
  )
}

export default Input
