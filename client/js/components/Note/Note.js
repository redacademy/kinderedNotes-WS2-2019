import React, {useState} from 'react'
import {
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  View,
} from 'react-native'

const Input = () => {
  const [placeholder, setPlaceholder] = useState('Write a kind note')
  return (
    <View>
      <TextInput
        type="text"
        name="note-message"
        value={placeholder}
        onChangeText={text => setPlaceholder(text)}
      />
    </View>
  )
}

const Note = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Input />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Note
