// TODO: Rename file

import {useState} from 'react'
import {Animated} from 'react-native'

const FADE_DURATION = 800

const useSiteTransition = () => {
  const [authScreenOpacity] = useState(new Animated.Value(0))
  const [defaultScreenOpacity] = useState(new Animated.Value(0))
  const [wavesOpacity] = useState(new Animated.Value(1))

  const fadeAuth = val =>
    Animated.timing(authScreenOpacity, {
      toValue: val,
      duration: FADE_DURATION,
    }).start()

  const fadeDefault = val =>
    Animated.timing(defaultScreenOpacity, {
      toValue: val,
      duration: FADE_DURATION,
    }).start()

  const fadeWaves = val =>
    Animated.timing(wavesOpacity, {
      toValue: val,
      duration: FADE_DURATION,
    }).start()

  return {
    authScreenOpacity,
    fadeAuth,
    defaultScreenOpacity,
    fadeDefault,
    wavesOpacity,
    fadeWaves,
    FADE_DURATION,
  }
}

export default useSiteTransition
