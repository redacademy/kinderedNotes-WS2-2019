import React from 'react'
import {View} from 'react-native'
import {Button, Message} from '../../components'
import styles from './Note.styles'

const Note = () => {
  return (
    <View style={styles.container}>
      <View style={styles.noteContainer}>
        <Message />
      </View>
    </View>
  )
}

export default Note
