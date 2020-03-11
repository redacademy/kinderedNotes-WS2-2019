import React from 'react'
import {Text} from 'react-native'
import styles from './Typography.styles'

const Header = ({style, children}) => (
  <Text style={{...styles.header, ...style}}>{children}</Text>
)

const AuthText = ({style, children}) => (
  <Text style={{...styles.authText, ...style}}>{children}</Text>
)

const Title = ({style, children}) => (
  <Text style={{...styles.title, ...style}}>{children}</Text>
)

export {AuthText, Header, Title}
