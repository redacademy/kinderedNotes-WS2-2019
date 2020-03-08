// TODO: Rename file

import {useState} from 'react'
import {Animated} from 'react-native'

const FADE_DURATION = 3000

const useSiteTransition = () => {
  const [authScreenOpacity] = useState(new Animated.Value(1))

  const fadeAuth = val =>
    Animated.timing(authScreenOpacity, {
      toValue: val,
      duration: FADE_DURATION,
    }).start()

  const fadeDefault = val =>
    Animated.timing(authScreenOpacity, {
      toValue: val,
      duration: FADE_DURATION,
    }).start()

  return {
    authScreenOpacity,
    fadeDefault,
    fadeAuth,
    FADE_DURATION,
  }
}

export default useSiteTransition
