import React, {useState} from 'react'
import {Text} from 'react-native'
import {Header} from '../Typography'
import {AvatarSelect, TagsInput, TagsList} from '../index'

const ProfileEditForm = () => {
  const [currentAvatar, setCurrentAvatar] = useState(
    require('../../../assets/images/memoji-1.jpg'),
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
