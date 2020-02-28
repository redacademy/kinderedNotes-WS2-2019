import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import styles from './Button.styles'

const Button = ({children}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.font}>{children}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button
