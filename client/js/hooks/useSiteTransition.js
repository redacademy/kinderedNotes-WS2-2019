import {useState} from 'react'
import {Animated} from 'react-native'

const useSiteTransition = () => {
  const [opacity] = useState(new Animated.Value(1))
  const FADE_DURATION = 3000

  const fadeOut = () =>
    Animated.timing(opacity, {
      toValue: 0,
      duration: FADE_DURATION,
    }).start()

  return {opacity, fadeOut, FADE_DURATION}
}

export default useSiteTransition
