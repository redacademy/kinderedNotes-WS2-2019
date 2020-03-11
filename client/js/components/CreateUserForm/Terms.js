import React, {useState, useEffect} from 'react'
import Animated, {Easing} from 'react-native-reanimated'
import {ScrollView, Text} from 'react-native'
import {Button} from '../index'
import {Header} from '../Typography'
import styles from './CreateUserForm.styles'
import termsContent from './terms-text'

const Terms = ({onComplete}) => {
  const [anim] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 400,
      easing: Easing.quad,
    }).start()
  }, [])

  const onAccept = () => {
    Animated.timing(anim, {
      toValue: 0,
      duration: 400,
      easing: Easing.quad,
    }).start()

    onComplete()
  }

  const offset = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [700, 0],
  })

  return (
    <Animated.View
      style={{
        marginTop: offset,
        opacity: anim,
        ...styles.termsContainer,
      }}
    >
      <ScrollView style={styles.profileContainer}>
        <Header style={styles.termsHeader}>Terms & Conditions</Header>
        <Text style={styles.termsText}>{termsContent}</Text>
      </ScrollView>
      <Button style={styles.termsButton} onPress={onAccept}>
        Accept
      </Button>
    </Animated.View>
  )
}

export default Terms
