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
    opacity: 1,
    marginHorizontal: -50,
  },
  pen: {
    position: 'absolute',
    right: -30,
    top: -20,
  },
  circle: {
    backgroundColor: COLORS.LIGHT_BLUE,
    borderRadius: 150,
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
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

  const [slideNum, setSlideNum] = useState(1)
  const [waveOffsetTop] = useState(new Animated.Value(-100))
  const [waveOffsetBottom] = useState(new Animated.Value(100))
  const [noteOffset] = useState(new Animated.Value(100))

  const {
    opacity: elementsOpacity,
    fadeIn: elementsFadeIn,
    fadeOut: elementsFadeOut,
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

  const noteSlideIn = () => {
    Animated.timing(noteOffset, {
      toValue: 0,
      duration: ANIMATION_IN_DURATION,
    }).start()
  }

  const animateIn = () => {
    penSlideIn()
    noteSlideIn()
    waveTopSlideIn()
    elementsFadeIn()
  }

  const animateOut = () => {
    waveTopSlideOut()
  }

  useEffect(() => {
    switch (event) {
      case 'NEXT_VIEW':
        setSlideNum(s => s + 1)
        break
      case 'PREV_VIEW':
        setSlideNum(s => s - 1)
        break
      default:
        break
    }

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
  }, [event, state, dispatch, onComplete])

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
      {slideNum === 1 && <Text>Write a kind note</Text>}
      {slideNum === 2 && <Text>slide 2</Text>}
      {slideNum === 3 && <Text>slide 3</Text>}
      <Animated.View
        style={{
          ...styles.container,
          opacity: elementsOpacity,
        }}
      >
        <Animated.View style={styles.circle}>
          <Animated.View
            style={{
              transform: [{translateY: noteOffset}],
            }}
          >
            <Note />
            <Pen style={styles.pen} />
          </Animated.View>
        </Animated.View>
      </Animated.View>
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
