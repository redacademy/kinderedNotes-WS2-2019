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
import {ScrollView} from 'react-native-gesture-handler'

const Write = ({navigation}) => {
  const [messageInput, setMessageInput] = useState('')
  const [createNote] = useCreateNote()
  const [options, setOptions] = useState({
    color: 'BLUE',
    font: 'DEFAULT',
    style: 'BORDERED',
  })
  const {tags, setTags} = useContext(TagsContext)

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
      <ScrollView>
        <View style={styles.noteArea}>
          <Note
            value={messageInput}
            onChangeText={setMessageInput}
            options={options}
            onChangeOptions={handleOptionsChange}
          />
          <Header style={{alignSelf: 'flex-start', paddingBottom: 0}}>
            Tag related topics
          </Header>
          <TagsInput
            value={tags}
            onChange={setTags}
            placeholder="Anxiety"
          />
          <TagsList tags={tags} setTags={setTags} />
          <Button onPress={submitNote}>Post</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Write
