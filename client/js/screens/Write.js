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
import {TagsContext} from '../context'
import {useCreateNote} from '../hooks'

const Write = ({navigation}) => {
  const [messageInput, setMessageInput] = useState('')
  const [createNote] = useCreateNote()
  const {tags, setTags} = useContext(TagsContext)
  const [options, setOptions] = useState({
    color: 'BLUE',
    font: 'DEFAULT',
    style: 'BORDERED',
  })

  const submitNote = () => {
    createNote({
      variables: {
        message: messageInput,
        tags,
        ...options,
      },
    })
    setMessageInput('')
    setTags([])
    navigation.navigate('Notes')
  }

  const handleOptionsChange = opts =>
    setOptions(s => ({...s, ...opts}))

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.noteArea}>
        <Note
          value={messageInput}
          onChangeText={setMessageInput}
          options={options}
          onChangeOptions={handleOptionsChange}
        />
        <Header>Tag related topics</Header>
        <TagsInput placeholder="Anxiety" />
        <TagsList />
        <Button onPress={submitNote}>Post</Button>
      </View>
    </SafeAreaView>
  )
}

export default Write
