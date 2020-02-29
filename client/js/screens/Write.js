import React, {useState} from 'react'
import {SafeAreaView, View} from 'react-native'
import {Note, Input, Button, styles} from '../components'
import {Header} from '../components/Typography'
import {useCreateNote} from '../hooks'

const Write = ({navigation}) => {
  const [messageInput, setMessageInput] = useState('')
  const [createNote] = useCreateNote()

  const submitNote = () => {
    createNote({
      variables: {
        message: messageInput,
      },
    })
    setMessageInput('')
    navigation.navigate('Notes')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.noteArea}>
        <Note value={messageInput} onChangeText={setMessageInput} />
        <Header>Tag related topics</Header>
        <Input placeholder="Anxiety" />
        <Button onPress={submitNote}>Post</Button>
      </View>
    </SafeAreaView>
  )
}

export default Write
