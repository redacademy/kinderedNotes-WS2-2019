import React, {useState} from 'react'
import {Animated, View, Image, TouchableOpacity} from 'react-native'
import styles from './AvatarSelect.styles'
import AvatarOption from './AvatarOption'
import AVATARS from './avatars'

const AvatarSelect = ({currentAvatar, onChange, large = false}) => {
  const [avatarAnimVals] = useState(
    Array.from({length: AVATARS.length}, () => new Animated.Value(0)),
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

  const labelOffset = avatarAnimVals[0].interpolate({
    inputRange: [0, 1],
    outputRange: [-15, 0],
  })

  const labelOpacity = avatarAnimVals[0].interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  })

  return (
    <View style={styles.container}>
      <AvatarOption
        idx={0}
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
        source={AVATARS[0]}
      />
      <AvatarOption
        idx={1}
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
        source={AVATARS[1]}
      />
      <AvatarOption
        idx={2}
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
        source={AVATARS[2]}
      />
      <AvatarOption
        idx={3}
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
        source={AVATARS[3]}
      />
      <AvatarOption
        idx={4}
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
        source={AVATARS[4]}
      />
      <AvatarOption
        idx={5}
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
        source={AVATARS[5]}
      />

      <TouchableOpacity
        style={{
          ...styles.avatarCurrentContainer,
          ...(large ? styles.avatarCurrentContainerLarge : {}),
        }}
        onPress={toggleIsOpen}
      >
        <Image
          style={{
            ...styles.avatar,
            ...styles.avatarCurrent,
            ...(large ? styles.avatarLarge : {}),
          }}
          source={AVATARS[currentAvatar]}
        />
        <Animated.Text
          style={{
            ...styles.avatarLabel,
            top: labelOffset,
            opacity: labelOpacity,
          }}
        >
          Edit
        </Animated.Text>
      </TouchableOpacity>
    </View>
  )
}

export default AvatarSelect
