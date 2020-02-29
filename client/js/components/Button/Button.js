import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import styles from './Button.styles'

const Button = ({children, ...props}) => (
  <>
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.font}>{children}</Text>
    </TouchableOpacity>
  </>
)

export default Button
