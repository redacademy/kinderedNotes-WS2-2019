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
import MailNote from '../../assets/icons/Note_Sample.svg'
import Envelope from '../../assets/icons/Mail.svg'
import Pen from '../../assets/icons/Pen.svg'
import Note from '../../assets/icons/Note.svg'
import Hand from '../../assets/icons/Hand.svg'
import Heart from '../../assets/icons/Heart.svg'
import FadeIn from '../components/FadeIn'
import {useOpacityFadeTransition} from '../hooks'
import {
  ANIMATION_IN_DURATION,
  ANIMATION_OUT_DURATION,
} from '../hooks/useWalkthrough/consts'
import {COLORS} from '../components/styles'
import {ANIMATION_PAUSE_DURATION} from '../components/IntroTransitionWrapper/consts'

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
    bottom: 20,
  },
  wave: {
    opacity: 1,
    marginHorizontal: -50,
  },
  waveBottom: {
    opacity: 1,
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
  } = useWalkthrough(onComplete)

  const [slideNum, setSlideNum] = useState(1)
  const [waveOffsetTop] = useState(new Animated.Value(-100))
  const [waveOffsetBottom] = useState(new Animated.Value(100))
  const [noteOffset] = useState(new Animated.Value(100))
  const [penOffset] = useState(new Animated.Value(-100))
  const [envelopeOffsetTop] = useState(new Animated.Value(-100))
  const [heartOffsetTop] = useState(new Animated.Value(-100))
  const [handsOffsetBottom] = useState(new Animated.Value(100))

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

  const waveTopSlideMiddle = () => {
    Animated.timing(waveOffsetTop, {
      toValue: 300,
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
      toValue: -300,
      duration: ANIMATION_IN_DURATION,
    }).start()
  }

  const waveBottomSlideOut = () => {
    Animated.timing(waveOffsetBottom, {
      toValue: 100,
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
    waveTopSlideIn()
    elementsFadeIn()
  }

  const receiveIn = () => {
    envelopeSlideIn()
  }

  const spreadIn = () => {
    heartSlideIn()
    handsSlideIn()
  }

  const spreadOut = () => {
    elementsFadeOut()
  }

  const animateOut = () => {
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
        setTimeout(() => dispatch('DONE'), 400)
        break
      case 'MAIL_OPENING':
        setTimeout(() => dispatch('DONE'), 400)
        break
      case 'SPREAD_FADING_IN':
        spreadIn()
        setTimeout(() => dispatch('DONE'), ANIMATION_IN_DURATION)
        break
      case 'SPREAD_FADING_OUT':
        spreadOut()
        setTimeout(() => dispatch('DONE'), ANIMATION_IN_DURATION)
        break
      case 'WALKTHROUGH_FADING_OUT':
        animateOut()
        setTimeout(() => {
          onComplete()
        }, ANIMATION_IN_DURATION + ANIMATION_PAUSE_DURATION + ANIMATION_OUT_DURATION)
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
        <Animated.View style={styles.circle}>
          {slideNum === 1 ? (
            <>
              <Animated.View
                style={{
                  ...styles.elementContainer,
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
                  transform: [{translateY: penOffset}],
                }}
              >
                {slideNum === 1 && <Pen />}
              </Animated.View>
            </>
          ) : slideNum === 2 ? (
            <>
              <Animated.View
                style={{
                  ...styles.elementContainer,
                  transform: [{translateY: envelopeOffsetTop}],
                }}
              >
                <FadeIn visible={slideNum === 2}>
                  <Envelope />
                </FadeIn>
              </Animated.View>
            </>
          ) : slideNum === 3 ? (
            <>
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
            </>
          ) : null}
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
      <Animated.View
        style={{
          ...styles.waveBottom,
          opacity: elementsOpacity,
          transform: [{translateY: waveOffsetBottom}],
        }}
      >
        <WaveBottom />
      </Animated.View>
    </SafeAreaView>
  )
}

export default Walkthrough
