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

const AvatarSelect = ({currentAvatar, onChange}) => {
  const [avatarOffetAnim] = useState(new Animated.Value(0))
  const [avatarOptionOpacity] = useState(new Animated.Value(0))
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    Animated.timing(avatarOffetAnim, {
      toValue: isOpen ? 0 : 1,
      duration: 400,
    }).start()
    Animated.timing(avatarOptionOpacity, {
      toValue: isOpen ? 0 : 1,
      duration: 400,
    }).start()

    setIsOpen(s => !s)
  }

  const handleAvatarSelect = avatar => {
    onChange(avatar)
    toggleIsOpen()
  }

  const avatarOffet = avatarOffetAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0rem', '100rem'],
  })

  return (
    <View style={styles.container}>
      <AvatarOption
        onPress={handleAvatarSelect}
        style={{
          opacity: avatarOptionOpacity,
          transform: [
            {rotate: '15deg'},
            {translateX: avatarOffet},
            {rotate: '-15deg'},
          ],
        }}
        source={require('../../../assets/images/memoji-1.jpg')}
      />
      <AvatarOption
        onPress={handleAvatarSelect}
        style={{
          opacity: avatarOptionOpacity,
          transform: [
            {rotate: '65deg'},
            {translateX: avatarOffet},
            {rotate: '-65deg'},
          ],
        }}
        source={require('../../../assets/images/memoji-2.jpg')}
      />
      <AvatarOption
        onPress={handleAvatarSelect}
        style={{
          opacity: avatarOptionOpacity,
          transform: [
            {rotate: '115deg'},
            {translateX: avatarOffet},
            {rotate: '-115deg'},
          ],
        }}
        source={require('../../../assets/images/memoji-3.jpg')}
      />
      <AvatarOption
        onPress={handleAvatarSelect}
        style={{
          opacity: avatarOptionOpacity,
          transform: [
            {rotate: '165deg'},
            {translateX: avatarOffet},
            {rotate: '-165deg'},
          ],
        }}
        source={require('../../../assets/images/memoji-4.jpg')}
      />
      <AvatarOption
        onPress={handleAvatarSelect}
        style={{
          opacity: avatarOptionOpacity,
          transform: [
            {rotate: '215deg'},
            {translateX: avatarOffet},
            {rotate: '-215deg'},
          ],
        }}
        source={require('../../../assets/images/memoji-5.jpg')}
      />
      <AvatarOption
        onPress={handleAvatarSelect}
        style={{
          opacity: avatarOptionOpacity,
          transform: [
            {rotate: '325deg'},
            {translateX: avatarOffet},
            {rotate: '-325deg'},
          ],
        }}
        source={require('../../../assets/images/memoji-6.jpg')}
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
