import React from 'react'
import {SafeAreaView} from 'react-native'
import {Note} from '../components'
import {useCreateNote} from '../hooks'

const Write = () => {
  const [createNote] = useCreateNote()

  return (
    <SafeAreaView>
      <Note onSubmit={createNote} />
    </SafeAreaView>
  )
}

export default Write
