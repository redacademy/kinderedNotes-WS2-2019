import React from 'react'
import {Animated, Image, TouchableOpacity} from 'react-native'
import styles from './AvatarSelect.styles'

const AvatarOption = ({source, style, onPress}) => (
  <Animated.View style={{...styles.avatarContainer, ...style}}>
    <TouchableOpacity
      style={styles.avatarButton}
      onPress={() => onPress(source)}
    >
      <Image
        style={{
          ...styles.avatar,
          ...styles.avatarOption,
        }}
        source={source}
      />
    </TouchableOpacity>
  </Animated.View>
)

export default AvatarOption
