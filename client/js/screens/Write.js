import React, {useState} from 'react'
import {SafeAreaView, View} from 'react-native'
import {
  Note,
  TagsInput,
  TagsList,
  Button,
  styles,
} from '../components'
import {Header} from '../components/Typography'
import {useCreateNote} from '../hooks'
import {TagsContextProvider} from '../context'

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
        <TagsContextProvider>
          <TagsInput placeholder="Anxiety" />
          <TagsList />
        </TagsContextProvider>
        <Button onPress={submitNote}>Post</Button>
      </View>
    </SafeAreaView>
  )
}

export default Write
