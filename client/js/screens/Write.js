import React from 'react'
import {SafeAreaView, View} from 'react-native'
import {Note, Button, styles} from '../components'
import {Header} from '../components/Typography'

const Write = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.noteArea}>
        <Note />
        <Header>Tag related topics</Header>
        <Button>Post</Button>
      </View>
    </SafeAreaView>
  )
}

export default Write
