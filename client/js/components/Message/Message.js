import React, {useState} from 'react'
import {TextInput, View} from 'react-native'

const Message = () => {
  const [placeholder, setPlaceholder] = useState('Write a kind note')
  return (
    <View>
      <TextInput
        type="text"
        name="note-message"
        placeholder={placeholder}
        placeholderTextColor="#888B8D"
        onChangeText={text => setPlaceholder(text)}
      />
    </View>
  )
}

export default Message
