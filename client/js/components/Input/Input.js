import React from 'react'
import {TextInput} from 'react-native'
import styles from './Input.styles'

const Input = ({placeholder}) => {
  return <TextInput placeholder={placeholder} style={styles.input} />
}

export default Input
