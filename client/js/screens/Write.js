import React, {useState, useContext} from 'react'
import {SafeAreaView, View} from 'react-native'
import {
  Note,
  TagsInput,
  TagsList,
  Button,
  styles,
} from '../components'
import {Header} from '../components/Typography'
import {TagsContextProvider, TagsContext} from '../context'
;<TagsContextProvider></TagsContextProvider>
import {useCreateNote} from '../hooks'

const Write = ({navigation}) => {
  const [messageInput, setMessageInput] = useState('')
  const [createNote] = useCreateNote()
  const {tags, setTags} = useContext(TagsContext)

  const submitNote = () => {
    createNote({
      variables: {
        message: messageInput,
        tags,
      },
    })
    setMessageInput('')
    setTags([])
    navigation.navigate('Notes')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.noteArea}>
        <Note value={messageInput} onChangeText={setMessageInput} />
        <Header>Tag related topics</Header>
        <TagsInput placeholder="Anxiety" />
        <TagsList />
        <Button onPress={submitNote}>Post</Button>
      </View>
    </SafeAreaView>
  )
}

export default Write
