import React, {useEffect, useState} from 'react'
import {
  Animated,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import {useOpacityFadeTransition, useWalkthrough} from '../hooks'
import {FadeIn, Step} from '../components'
import {
  ANIMATION_IN_DURATION,
  ANIMATION_OUT_DURATION,
} from '../hooks/useWalkthrough/consts'
import {ANIMATION_PAUSE_DURATION} from '../components/IntroTransitionWrapper/consts'
import {NotPrev, Slides} from '../components/Typography'
import {COLORS} from '../components/styles'

import WaveTop from '../../assets/icons/Wave_Up.svg'
import WaveBottom from '../../assets/icons/Wave_Down.svg'
import Envelope from '../../assets/icons/Mail.svg'
import Pen from '../../assets/icons/Pen.svg'
import Note from '../../assets/icons/Note.svg'
import Hand from '../../assets/icons/Hand.svg'
import Heart from '../../assets/icons/Heart.svg'

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
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 35,
  },
  wave: {
    opacity: 1,
    marginHorizontal: -50,
  },
  waveBottom: {
    opacity: 1,
    marginHorizontal: -50,
    position: 'absolute',
    bottom: -50,
  },
  elementContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  penContainer: {
    position: 'absolute',
    right: 65,
    top: 60,
  },
  circle: {
    backgroundColor: COLORS.LIGHT_BLUE,
    borderRadius: 150,
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  heartContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center',
  },
  handsContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: -15,
    bottom: 0,
    alignItems: 'center',
  },
  font: {
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
    color: COLORS.BLUE,
    textAlign: 'center',
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
  } = useWalkthrough()

  const [slideNum, setSlideNum] = useState(1)
  const [waveOffsetTop] = useState(new Animated.Value(-100))
  const [waveOffsetBottom] = useState(new Animated.Value(100))
  const [noteOffset] = useState(new Animated.Value(100))
  const [penOffset] = useState(new Animated.Value(-100))
  const [envelopeOffsetTop] = useState(new Animated.Value(-100))
  const [heartOffsetTop] = useState(new Animated.Value(-100))
  const [handsOffsetBottom] = useState(new Animated.Value(100))
  const [circleScaleAnim] = useState(new Animated.Value(1))

  const {
    opacity: elementsOpacity,
    fadeIn: elementsFadeIn,
    fadeOut: elementsFadeOut,
  } = useOpacityFadeTransition(0)
  const {
    opacity: wavesOpacity,
    fadeIn: wavesFadeIn,
  } = useOpacityFadeTransition(0)
  const {
    opacity: noteOpacity,
    fadeIn: noteFadeIn,
    fadeOut: noteFadeOut,
  } = useOpacityFadeTransition(0)
  const {
    opacity: envelopeOpacity,
    fadeIn: envelopeFadeIn,
    fadeOut: envelopeFadeOut,
  } = useOpacityFadeTransition(0)

  const waveTopSlideIn = () => {
    Animated.timing(waveOffsetTop, {
      toValue: 0,
      duration: ANIMATION_IN_DURATION,
    }).start()
  }

  const waveTopSlideMiddle = () => {
    Animated.timing(waveOffsetTop, {
      toValue: 330,
      duration: ANIMATION_IN_DURATION,
    }).start()
  }

  const waveTopSlideOut = () => {
    Animated.timing(waveOffsetTop, {
      toValue: 0,
      duration: ANIMATION_OUT_DURATION,
    }).start()
  }

  const waveBottomSlideIn = () => {
    Animated.timing(waveOffsetBottom, {
      toValue: -330,
      duration: ANIMATION_IN_DURATION,
    }).start()
  }

  const waveBottomSlideOut = () => {
    Animated.timing(waveOffsetBottom, {
      toValue: 35,
      duration: ANIMATION_OUT_DURATION,
    }).start()
  }

  const penSlideIn = () => {
    Animated.timing(penOffset, {
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

  const envelopeSlideIn = () => {
    Animated.timing(envelopeOffsetTop, {
      toValue: 0,
      duration: ANIMATION_IN_DURATION,
    }).start()
  }

  const heartSlideIn = () => {
    Animated.timing(heartOffsetTop, {
      toValue: 0,
      duration: ANIMATION_IN_DURATION,
    }).start()
  }

  const handsSlideIn = () => {
    Animated.timing(handsOffsetBottom, {
      toValue: 0,
      duration: ANIMATION_IN_DURATION,
    }).start()
  }

  const animateIn = () => {
    penSlideIn()
    noteSlideIn()
    noteFadeIn()
    waveTopSlideIn()
    wavesFadeIn()
    elementsFadeIn()
  }

  const receiveIn = () => {
    noteFadeOut()
    envelopeFadeIn()
    envelopeSlideIn()
  }

  const spreadIn = () => {
    heartSlideIn()
    handsSlideIn()
  }

  const spreadOut = () => {
    elementsFadeOut()
  }

  const circleFadeOut = () => {
    Animated.timing(circleScaleAnim, {
      toValue: 0.6,
      duration: ANIMATION_OUT_DURATION,
    }).start()
  }

  const animateOut = () => {
    circleFadeOut()
    waveTopSlideMiddle()
    waveBottomSlideIn()

    setTimeout(() => {
      waveTopSlideOut()
      waveBottomSlideOut()
    }, ANIMATION_IN_DURATION + ANIMATION_PAUSE_DURATION)
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
        receiveIn()
        setTimeout(() => {
          dispatch('DONE')
        }, ANIMATION_IN_DURATION)
        break
      case 'RECEIVE_FADING_OUT':
        noteFadeIn()
        setTimeout(() => dispatch('DONE'), 400)
        break
      case 'SPREAD_FADING_IN':
        spreadIn()
        setTimeout(() => dispatch('DONE'), ANIMATION_IN_DURATION)
        break
      case 'SPREAD_FADING_OUT':
        setTimeout(() => {
          dispatch('DONE')
        }, ANIMATION_OUT_DURATION)
        break
      case 'WALKTHROUGH_FADING_OUT':
        animateOut()
        spreadOut()
        setTimeout(() => {
          onComplete()
        }, ANIMATION_IN_DURATION + ANIMATION_PAUSE_DURATION + ANIMATION_OUT_DURATION)
        break
      default:
        break
    }
  }, [event, state, dispatch, onComplete])

  const circleScale = circleScaleAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
  })

  return (
    <SafeAreaView style={styles.wrapper}>
      <Animated.View
        style={{
          opacity: wavesOpacity,
          transform: [{translateY: waveOffsetTop}],
        }}
      >
        <WaveTop style={styles.wave} />
      </Animated.View>

      {slideNum === 1 && (
        <FadeIn visible={slideNum === 1}>
          <Text style={styles.font}>Write a kind note</Text>
        </FadeIn>
      )}
      {slideNum === 2 && (
        <FadeIn visible={slideNum === 2}>
          <Text style={styles.font}>Receive a kind note</Text>
        </FadeIn>
      )}
      {slideNum === 3 && (
        <FadeIn visible={slideNum === 3}>
          <Text style={styles.font}>Spread kindness</Text>
        </FadeIn>
      )}

      <Animated.View
        style={{
          ...styles.container,
          opacity: elementsOpacity,
        }}
      >
        <Animated.View
          style={{
            ...styles.circle,
            transform: [{scale: circleScale}],
          }}
        >
          <Animated.View
            style={{
              ...styles.elementContainer,
              opacity: noteOpacity,
              transform: [{translateY: noteOffset}],
            }}
          >
            <FadeIn visible={slideNum === 1}>
              <Note />
            </FadeIn>
          </Animated.View>
          <Animated.View
            style={{
              ...styles.penContainer,
              opacity: noteOpacity,
              transform: [{translateY: penOffset}],
            }}
          >
            <Pen />
          </Animated.View>
          <Animated.View
            style={{
              ...styles.elementContainer,
              opacity: envelopeOpacity,
              transform: [{translateY: envelopeOffsetTop}],
            }}
          >
            <FadeIn visible={slideNum === 2}>
              <Envelope />
            </FadeIn>
          </Animated.View>
          <Animated.View
            style={{
              ...styles.elementContainer,
              transform: [{translateY: heartOffsetTop}],
            }}
          >
            <FadeIn visible={slideNum === 3}>
              <View style={styles.heartContainer}>
                <Heart />
              </View>
            </FadeIn>
          </Animated.View>
          <Animated.View
            style={{
              ...styles.elementContainer,
              transform: [{translateY: handsOffsetBottom}],
            }}
          >
            <FadeIn visible={slideNum === 3}>
              <View style={styles.handsContainer}>
                <Hand />
              </View>
            </FadeIn>
          </Animated.View>
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={{
          ...styles.actions,
          opacity: elementsOpacity,
        }}
      >
        <TouchableOpacity
          disabled={prevDisabled}
          onPress={togglePrevView}
        >
          {slideNum !== 1 ? (
            <Slides>BACK</Slides>
          ) : (
            <NotPrev>BACK</NotPrev>
          )}
        </TouchableOpacity>
        <Step active={slideNum === 1} />
        <Step active={slideNum === 2} />
        <Step active={slideNum === 3} />
        <TouchableOpacity
          disabled={nextDisabled}
          onPress={toggleNextView}
        >
          <Slides>NEXT</Slides>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={{
          ...styles.waveBottom,
          opacity: wavesOpacity,
          transform: [{translateY: waveOffsetBottom}],
        }}
      >
        <WaveBottom />
      </Animated.View>
    </SafeAreaView>
  )
}

export default Walkthrough
