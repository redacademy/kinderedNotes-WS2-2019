import React from 'react'
import {View} from 'react-native'
import {Message} from '../../components'
import styles from './Note.styles'

const Note = ({value, onChangeText}) => (
  <View style={styles.container}>
    <View style={styles.noteContainer}>
      <Message value={value} onChangeText={onChangeText} />
      <View style={styles.noteOptions}></View>
    </View>
  </View>
)

export default Note
