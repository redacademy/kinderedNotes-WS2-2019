import React from 'react'
import {SafeAreaView} from 'react-native'
import {Note, Button, styles} from '../components'

const Write = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Note />
      <Button>Post</Button>
    </SafeAreaView>
  )
}

export default Write
