import React, {useState} from 'react'
import {Text} from 'react-native'
import {AvatarSelect} from '../index'
import {useAuth} from '../../hooks'

const ReplyNote = () => {
  const {user} = useAuth()
  const [currentAvatar] = useState()

  return (
    <>
      <AvatarSelect currentAvatar={currentAvatar} />
      <Text>TODO: name</Text>
      <Text>Thanks for the note</Text>
    </>
  )
}

export default ReplyNote

//avatar -> nome -> message 'thanks for the note'
