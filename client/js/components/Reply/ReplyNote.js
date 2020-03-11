import React from 'react'
import {Text, Image, View} from 'react-native'
import {useAuth} from '../../hooks'
import AVATARS from '../AvatarSelect/avatars'
import styles from './ReplyNote.styles'

const ReplyNote = ({
  avatarIndex = 4,
  name = 'Grazi',
  message = '',
}) => {
  const {user} = useAuth()

  return (
    <View style={styles.replyContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={AVATARS[avatarIndex]} />
      </View>
      <View style={styles.replyNote}>
        <Text style={styles.nameReply}>{name}</Text>
        <Text style={styles.messageReply}>{message}</Text>
      </View>
    </View>
  )
}

export default ReplyNote
