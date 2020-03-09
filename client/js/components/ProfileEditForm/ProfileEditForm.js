import React, {useState} from 'react'
import {Text} from 'react-native'
import {Header} from '../Typography'
import {AvatarSelect, TagsInput, TagsList} from '../index'
import {useAuth} from '../../hooks'

const ProfileEditForm = () => {
  const {user} = useAuth()
  const [currentAvatar, setCurrentAvatar] = useState(
    user?.user?.avatar,
  )

  return (
    <>
      <AvatarSelect
        currentAvatar={currentAvatar}
        onChange={setCurrentAvatar}
      />
      <Text>TODO: name</Text>
      <Header>Topics of Interest</Header>
      <TagsInput placeholder="Anxiety" />
      <TagsList />
      <Header>Favourite Notes</Header>
      {/* add favs notes */}
    </>
  )
}

export default ProfileEditForm
