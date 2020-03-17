import React, {useState, useEffect} from 'react'
import {Animated, SafeAreaView, StyleSheet} from 'react-native'
import {useAuth, useSiteTransition} from '../hooks'
import WaveTop from '../../assets/icons/Wave_Up.svg'
import WaveBottom from '../../assets/icons/Wave_Down.svg'

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  waveTop: {
    marginHorizontal: -50,
  },
  waveBottom: {
    position: 'absolute',
    bottom: -50,
    marginHorizontal: -50,
  },
})

const SiteTransitionWrapper = ({AuthView, DefaultView, style}) => {
  const [activeScreen, setActiveScreen] = useState(
    isLoggedIn ? 'DEFAULT' : 'AUTH',
  )
  const [isTransitioningScreen, setIsTransitioningScreen] = useState(
    false,
  )
  const {user, isLoggedIn, loading} = useAuth()
  const {
    authScreenOpacity,
    fadeAuth,
    defaultScreenOpacity,
    fadeDefault,
    wavesOpacity,
    fadeWaves,
    FADE_DURATION,
  } = useSiteTransition()

  useEffect(() => {
    if (loading) {
      return
    }

    if (user) {
      setActiveScreen('DEFAULT')
      fadeDefault(1)
      setIsTransitioningScreen(false)
    } else {
      // TODO: delay fade in on logout
      fadeDefault(0)
      fadeAuth(1)
      setActiveScreen('AUTH')
    }
  }, [loading, user, fadeAuth, fadeDefault, FADE_DURATION])

  useEffect(() => {
    if (
      isLoggedIn &&
      activeScreen === 'AUTH' &&
      !isTransitioningScreen
    ) {
      setIsTransitioningScreen(true)
      fadeAuth(0)
      fadeWaves(0)

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
    fadeWaves,
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
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{...styles.waveTop, opacity: wavesOpacity}}
      >
        <WaveTop />
      </Animated.View>

      <Animated.View style={{...style, opacity: authScreenOpacity}}>
        <AuthView />
      </Animated.View>

      <Animated.View
        style={{...styles.waveBottom, opacity: wavesOpacity}}
      >
        <WaveBottom />
      </Animated.View>
    </SafeAreaView>
  )
}

export {SiteTransitionWrapper}
