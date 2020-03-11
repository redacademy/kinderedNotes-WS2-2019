import React, {useState, useEffect} from 'react'
import {Animated} from 'react-native'

const FadeIn = ({visible, children, ...props}) => {
  const [visibility] = useState(new Animated.Value(visible ? 1 : 0))

  useEffect(() => {
    Animated.timing(visibility, {
      toValue: visible ? 1 : 0,
      duration: 800,
    }).start()
  }, [visible])

  return (
    <Animated.View
      style={{
        opacity: visibility,
      }}
      {...props}
    >
      {children}
    </Animated.View>
  )
}

export default FadeIn
