import React, {useEffect, useState} from 'react'
import {
  Animated,
  Text,
  Button,
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native'
import {useWalkthrough} from '../hooks'
import LogoSVG from '../../assets/icons/Logo_Border.svg'
import WaveTop from '../../assets/icons/Wave_Up.svg'
import WaveBottom from '../../assets/icons/Wave_Down.svg'
import Pen from '../../assets/icons/Pen.svg'
import Note from '../../assets/icons/Note.svg'
import {useOpacityFadeTransition} from '../hooks'
import {
  ANIMATION_IN_DURATION,
  ANIMATION_OUT_DURATION,
} from '../hooks/useWalkthrough/consts'
import {COLORS} from '../components/styles'

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    alignItems: 'center',
    height: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  actions: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
  },
  wave: {
    opacity: 0.7,
    marginHorizontal: -50,
  },
})

const Walkthrough = ({onComplete}) => {
  const {
    state,
    event,
    dispatch,
    nextDisabled,
    prevDisabled,
    toggleNextView,
    togglePrevView,
  } = useWalkthrough(onComplete)

  const [waveOffsetTop] = useState(new Animated.Value(-100))

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

  const penSlideIn = () => {
    Animated.timing(waveOffsetBottom, {
      toValue: 0,
      duration: ANIMATION_IN_DURATION,
    }).start()
  }

  const animateIn = () => {
    penSlideIn()
    waveTopSlideIn()
    elementsFadeIn()
  }

  const animateOut = () => {
    waveTopSlideOut()
  }

  useEffect(() => {
    switch (state) {
      case 'WRITE_FADING_IN':
        animateIn()
        setTimeout(() => {
          dispatch('DONE')
        }, ANIMATION_IN_DURATION)
        break
      case 'RECEIVE_FADING_IN':
        setTimeout(() => dispatch('DONE'), 400)
        break
      case 'RECEIVE_FADING_OUT':
        setTimeout(() => dispatch('DONE'), 400)
        break
      case 'MAIL_OPENING':
        setTimeout(() => dispatch('DONE'), 400)
        break
      case 'SPREAD_FADING_IN':
        setTimeout(() => dispatch('DONE'), 400)
        break
      case 'SPREAD_FADING_OUT':
        setTimeout(() => dispatch('DONE'), 400)
        break
      case 'WALKTHROUGH_FADING_OUT':
        setTimeout(() => {
          onComplete()
        }, 400)
        break
      default:
        break
    }
  }, [state, dispatch, onComplete])

  return (
    <SafeAreaView style={styles.wrapper}>
      <Animated.View
        style={{
          opacity: elementsOpacity,
          transform: [{translateY: waveOffsetTop}],
        }}
      >
        <WaveTop style={styles.wave} />
      </Animated.View>
      <View style={styles.container}>
        <Text>
          {state}, {event}
        </Text>
        <Text>Write a kind note</Text>
      </View>
      <View style={styles.actions}>
        <Button
          disabled={nextDisabled}
          onPress={toggleNextView}
          title="next"
        />
        <Button
          disabled={prevDisabled}
          onPress={togglePrevView}
          title="back"
        />
      </View>
    </SafeAreaView>
  )
}

export default Walkthrough
