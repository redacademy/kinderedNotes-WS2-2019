import React, {useState, useEffect} from 'react'
import {Animated} from 'react-native'
import {useAuth, useSiteTransition} from '../hooks'

const SiteTransitionWrapper = ({AuthView, DefaultView, style}) => {
  const {isLoggedIn} = useAuth()
  const [activeScreen, setActiveScreen] = useState(
    isLoggedIn ? 'DEFAULT' : 'AUTH',
  )
  const [isTransitioningScreen, setIsTransitioningScreen] = useState(
    false,
  )
  const {opacity, fadeOut, FADE_DURATION} = useSiteTransition()

  useEffect(() => {
    if (
      isLoggedIn &&
      activeScreen === 'AUTH' &&
      !isTransitioningScreen
    ) {
      setIsTransitioningScreen(true)
      fadeOut()
      setTimeout(() => {
        setActiveScreen('DEFAULT')
        setIsTransitioningScreen(false)
      }, FADE_DURATION)
    }
  }, [
    isLoggedIn,
    activeScreen,
    isTransitioningScreen,
    setActiveScreen,
    setIsTransitioningScreen,
    fadeOut,
    FADE_DURATION,
  ])

  if (activeScreen === 'DEFAULT') {
    return <DefaultView />
  }

  return (
    <Animated.View style={{...style, opacity}}>
      <AuthView />
    </Animated.View>
  )
}

export {SiteTransitionWrapper}
