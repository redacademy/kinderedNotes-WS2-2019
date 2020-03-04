import React from 'react'
import {Text} from 'react-native'
import styles from './Typography.styles'

const Header = ({children}) => (
  <Text style={styles.header}>{children}</Text>
)

const AuthText = ({children}) => (
  <Text style={styles.authText}>{children}</Text>
)

const Title = ({children}) => (
  <Text style={styles.title}>{children}</Text>
)

export {AuthText, Header, Title}
