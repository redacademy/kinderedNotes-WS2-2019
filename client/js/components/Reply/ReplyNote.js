import React, {useState} from 'react'
import {Text, Image} from 'react-native'
import {useAuth} from '../../hooks'
import AVATARS from '../AvatarSelect/avatars'

const ReplyNote = ({
  avatarIndex = 4,
  name,
  message = 'boooo stupid note',
}) => {
  const {user} = useAuth()

  return (
    <>
      <Image
        style={{height: 200, width: 200}}
        source={AVATARS[avatarIndex]}
      />
      <Text>TODO: name</Text>
      <Text>{message}</Text>
    </>
  )
}

export default ReplyNote
