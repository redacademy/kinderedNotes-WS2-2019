import React, {useState} from 'react'
import {SafeAreaView, ScrollView, TextInput, View} from 'react-native'
import {Input} from '../../components'
import styles from './Note.styles'

const Note = () => {
  return (
    <View style={styles.container}>
      <View style={styles.noteContainer}>
        <Input />
      </View>
    </View>
  )
}

export default Note
