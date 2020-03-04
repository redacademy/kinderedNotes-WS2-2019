import {useState} from 'react'
import {Animated} from 'react-native'
import {
  ANIMATION_IN_DURATION,
  ANIMATION_OUT_DURATION,
} from '../consts'

const useOpacityFadeTransition = initialValue => {
  const [opacity] = useState(new Animated.Value(initialValue))

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: ANIMATION_IN_DURATION,
    }).start()
  }

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: ANIMATION_OUT_DURATION,
    }).start()
  }

  return {opacity, fadeIn, fadeOut}
}

export default useOpacityFadeTransition
