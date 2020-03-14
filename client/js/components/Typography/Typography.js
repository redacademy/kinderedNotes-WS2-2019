import React from 'react'
import {Text} from 'react-native'
import styles from './Typography.styles'

const Header = ({style, children}) => (
  <Text style={{...styles.header, ...style}}>{children}</Text>
)

const AuthText = ({style, children}) => (
  <Text style={{...styles.authText, ...style}}>{children}</Text>
)

const Slides = ({children}) => (
  <Text style={styles.slides}>{children}</Text>
)

const NotPrev = ({children}) => (
  <Text style={styles.prevSlides}>{children}</Text>
)

const Title = ({style, blue = false, children}) => (
  <Text
    style={{
      ...styles.title,
      ...(blue ? styles.titleBlue : {}),
      ...style,
    }}
  >
    {children}
  </Text>
)

export {AuthText, Header, NotPrev, Slides, Title}
