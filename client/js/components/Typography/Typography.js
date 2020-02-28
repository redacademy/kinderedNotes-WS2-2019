import React from 'react'
import {Text} from 'react-native'
import styles from './Typography.styles'

const Header = ({children}) => (
  <Text style={styles.header}>{children}</Text>
)

export {Header}
