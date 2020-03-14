import React, {useState, useEffect} from 'react'
import {Animated, StyleSheet} from 'react-native'
import {useAuth, useSiteTransition} from '../hooks'

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
})

const SiteTransitionWrapper = ({AuthView, DefaultView, style}) => {
  const [activeScreen, setActiveScreen] = useState(
    isLoggedIn ? 'DEFAULT' : 'AUTH',
  )
  const [isTransitioningScreen, setIsTransitioningScreen] = useState(
    false,
  )
  const {isLoggedIn} = useAuth()
  const {
    authScreenOpacity,
    fadeAuth,
    defaultScreenOpacity,
    fadeDefault,
    FADE_DURATION,
  } = useSiteTransition()

  useEffect(() => {
    if (
      isLoggedIn &&
      activeScreen === 'AUTH' &&
      !isTransitioningScreen
    ) {
      setIsTransitioningScreen(true)
      fadeAuth(0)
      setTimeout(() => {
        setActiveScreen('DEFAULT')
        fadeDefault(1)
        setIsTransitioningScreen(false)
      }, FADE_DURATION)
    }
  }, [
    isLoggedIn,
    activeScreen,
    isTransitioningScreen,
    setActiveScreen,
    setIsTransitioningScreen,
    fadeAuth,
    fadeDefault,
    FADE_DURATION,
  ])

  if (activeScreen === 'DEFAULT') {
    return (
      <Animated.View
        style={{...styles.container, opacity: defaultScreenOpacity}}
      >
        <DefaultView />
      </Animated.View>
    )
  }

  return (
    <Animated.View style={{...style, opacity: authScreenOpacity}}>
      <AuthView />
    </Animated.View>
  )
}

export {SiteTransitionWrapper}
