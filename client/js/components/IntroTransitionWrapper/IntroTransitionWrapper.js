import React, {useState, useEffect} from 'react'
import {View, Animated} from 'react-native'
import LogoSVG from '../../../assets/icons/Logo_Border.svg'
import WaveTop from '../../../assets/icons/Wave_Up.svg'
import WaveBottom from '../../../assets/icons/Wave_Down.svg'
import styles from './IntroTransitionWrapper.styles'
import {Title} from '../Typography'
import {useOpacityFadeTransition} from '../../hooks'
import {
  ANIMATION_IN_DURATION,
  ANIMATION_OUT_DURATION,
  ANIMATION_PAUSE_DURATION,
} from './consts'

const IntroTransitionWrapper = ({children}) => {
  const [isDone, setIsDone] = useState(false)
  const [logoScale] = useState(new Animated.Value(0))
  const [waveOffsetTop] = useState(new Animated.Value(-100))
  const [waveOffsetBottom] = useState(new Animated.Value(100))
  const {
    opacity: elementsOpacity,
    fadeIn: elementsFadeIn,
    fadeOut: elementsFadeOut,
  } = useOpacityFadeTransition(0)
  const {
    opacity: bgOpacity,
    fadeOut: bgFadeOut,
  } = useOpacityFadeTransition(1)
  const {
    opacity: contentOpacity,
    fadeIn: fadeInContent,
  } = useOpacityFadeTransition(0)

  const logoScaleUp = () => {
    Animated.timing(logoScale, {
      toValue: 1,
      duration: ANIMATION_IN_DURATION,
    }).start()
  }

  const waveTopSlideIn = () => {
    Animated.timing(waveOffsetTop, {
      toValue: 0,
      duration: ANIMATION_IN_DURATION,
    }).start()
  }

  const waveTopSlideOut = () => {
    Animated.timing(waveOffsetTop, {
      toValue: -100,
      duration: ANIMATION_OUT_DURATION,
    }).start()
  }

  const waveBottomSlideIn = () => {
    Animated.timing(waveOffsetBottom, {
      toValue: 0,
      duration: ANIMATION_IN_DURATION,
    }).start()
  }

  const waveBottomSlideOut = () => {
    Animated.timing(waveOffsetBottom, {
      toValue: 100,
      duration: ANIMATION_OUT_DURATION,
    }).start()
  }

  const animateIn = () => {
    logoScaleUp()
    elementsFadeIn()
    waveBottomSlideIn()
    waveTopSlideIn()
  }

  const animateOut = () => {
    bgFadeOut()
    elementsFadeOut()
    waveTopSlideOut()
    waveBottomSlideOut()
  }

  useEffect(() => {
    animateIn()

    setTimeout(() => {
      animateOut()
    }, ANIMATION_IN_DURATION + ANIMATION_PAUSE_DURATION)

    setTimeout(() => {
      bgFadeOut()
      fadeInContent()
      setIsDone(true)
    }, ANIMATION_IN_DURATION + ANIMATION_PAUSE_DURATION + ANIMATION_OUT_DURATION)
  }, [])

  return (
    <View style={styles.viewWrapper}>
      <Animated.View
        style={{...styles.container, opacity: bgOpacity}}
      >
        <Animated.View
          style={{
            opacity: elementsOpacity,
            transform: [{translateY: waveOffsetTop}],
          }}
        >
          <WaveTop style={styles.wave} />
        </Animated.View>

        <View style={styles.content}>
          <Animated.View
            style={{
              opacity: elementsOpacity,
              transform: [{scale: logoScale}],
            }}
          >
            <LogoSVG style={styles.logo} />
          </Animated.View>

          <Animated.View
            style={{
              opacity: elementsOpacity,
              transform: [{scale: logoScale}],
            }}
          >
            <Title>kindrednotes</Title>
          </Animated.View>
        </View>
        <Animated.View
          style={{
            opacity: elementsOpacity,
            transform: [{translateY: waveOffsetBottom}],
          }}
        >
          <WaveBottom style={styles.wave} />
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={{...styles.floatingContainer, opacity: contentOpacity}}
      >
        {isDone ? children : null}
      </Animated.View>
    </View>
  )
}

export default IntroTransitionWrapper
