import React from 'react'
import {View} from 'react-native'
import {Button, Input} from '../../components'
import styles from './Note.styles'

const Note = () => {
  return (
    <View style={styles.container}>
      <View style={styles.noteContainer}>
        <Input />
      </View>
      {/* <Button>Post</Button> */}
    </View>
  )
}

export default Note
