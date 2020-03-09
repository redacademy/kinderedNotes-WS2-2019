import React, {useState} from 'react'
import {
  Animated,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'
import styles from './AvatarSelect.styles'
import AvatarOption from './AvatarOption'

const AVATAR_AMOUNT = 6

const AvatarSelect = ({currentAvatar, onChange}) => {
  const [avatarAnimVals] = useState(
    Array.from({length: AVATAR_AMOUNT}, () => new Animated.Value(0)),
  )
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    const avatarAnimations = avatarAnimVals.map(anim =>
      Animated.timing(anim, {toValue: isOpen ? 0 : 1, duration: 300}),
    )
    Animated.stagger(27.5, avatarAnimations).start()

    setIsOpen(s => !s)
  }

  const handleAvatarSelect = avatar => {
    onChange(avatar)
    toggleIsOpen()
  }

  const avatarOffsets = avatarAnimVals.map(anim =>
    anim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0rem', '100rem'],
    }),
  )

  return (
    <View style={styles.container}>
      <AvatarOption
        onPress={handleAvatarSelect}
        style={{
          opacity: avatarAnimVals[0],
          transform: [
            {scale: avatarAnimVals[0]},
            {rotate: '325deg'},
            {translateX: avatarOffsets[0]},
            {rotate: '-325deg'},
          ],
        }}
        source={require('../../../assets/images/memoji-6.jpg')}
      />
      <AvatarOption
        onPress={handleAvatarSelect}
        style={{
          opacity: avatarAnimVals[1],
          transform: [
            {scale: avatarAnimVals[1]},
            {rotate: '15deg'},
            {translateX: avatarOffsets[1]},
            {rotate: '-15deg'},
          ],
        }}
        source={require('../../../assets/images/memoji-1.jpg')}
      />
      <AvatarOption
        onPress={handleAvatarSelect}
        style={{
          opacity: avatarAnimVals[2],
          transform: [
            {scale: avatarAnimVals[2]},
            {rotate: '65deg'},
            {translateX: avatarOffsets[2]},
            {rotate: '-65deg'},
          ],
        }}
        source={require('../../../assets/images/memoji-2.jpg')}
      />
      <AvatarOption
        onPress={handleAvatarSelect}
        style={{
          opacity: avatarAnimVals[3],
          transform: [
            {scale: avatarAnimVals[3]},
            {rotate: '115deg'},
            {translateX: avatarOffsets[3]},
            {rotate: '-115deg'},
          ],
        }}
        source={require('../../../assets/images/memoji-3.jpg')}
      />
      <AvatarOption
        onPress={handleAvatarSelect}
        style={{
          opacity: avatarAnimVals[4],
          transform: [
            {scale: avatarAnimVals[4]},
            {rotate: '165deg'},
            {translateX: avatarOffsets[4]},
            {rotate: '-165deg'},
          ],
        }}
        source={require('../../../assets/images/memoji-4.jpg')}
      />
      <AvatarOption
        onPress={handleAvatarSelect}
        style={{
          opacity: avatarAnimVals[5],
          transform: [
            {scale: avatarAnimVals[5]},
            {rotate: '215deg'},
            {translateX: avatarOffsets[5]},
            {rotate: '-215deg'},
          ],
        }}
        source={require('../../../assets/images/memoji-5.jpg')}
      />

      <TouchableOpacity
        style={styles.avatarCurrentContainer}
        onPress={toggleIsOpen}
      >
        <Image
          style={{...styles.avatar, ...styles.avatarCurrent}}
          source={currentAvatar}
        />
        {!isOpen && <Text style={styles.avatarLabel}>Edit</Text>}
      </TouchableOpacity>
    </View>
  )
}

export default AvatarSelect
