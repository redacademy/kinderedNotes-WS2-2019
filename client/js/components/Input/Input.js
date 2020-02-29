import React from 'react'
import {TextInput} from 'react-native'
import styles from './Input.styles'

const Input = ({placeholder, ...props}) => (
  <TextInput placeholder={placeholder} style={styles.input} {...props} />
)

export default Input
