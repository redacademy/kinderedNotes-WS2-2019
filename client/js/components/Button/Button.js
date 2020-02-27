import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import styles from './Button.styles'

const Button = ({children}) => {
  return (
    <>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.font}>{children}</Text>
      </TouchableOpacity>
    </>
  )
}

export default Button
