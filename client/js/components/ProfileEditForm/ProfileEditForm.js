import React, {useState, useEffect} from 'react'
import {Text} from 'react-native'
import {useMutation} from '@apollo/react-hooks'
import {UPDATE_USER} from '../../context'
import {Header} from '../Typography'
import {AvatarSelect, TagsInput, TagsList, Input} from '../index'
import {useAuth} from '../../hooks'

const ProfileEditForm = () => {
  const [updateUser] = useMutation(UPDATE_USER)
  const {user} = useAuth()
  const [currentAvatar, setCurrentAvatar] = useState(
    user?.user?.avatar,
  )
  const [currentCountry, setCurrentCountry] = useState(
    user?.user?.country,
  )
  const [currentCity, setCurrentCity] = useState(user?.user?.city)
  const [currentInterests, setCurrentInterests] = useState(
    user?.user?.interests.map(({title}) => title),
  )

  useEffect(() => {
    updateUser({
      variables: {
        avatar: currentAvatar,
        city: currentCity,
        country: currentCountry,
        interests: currentInterests,
      },
    })
    // TODO: set new user data in user context
  }, [
    currentAvatar,
    currentCity,
    currentCountry,
    currentInterests,
    updateUser,
  ])

  return (
    <>
      <AvatarSelect
        currentAvatar={currentAvatar}
        onChange={setCurrentAvatar}
      />
      <Text>TODO: name</Text>

      <Input
        value={currentCountry}
        onChangeText={setCurrentCountry}
        placeholder="Country"
      />

      <Input
        value={currentCity}
        onChangeText={setCurrentCity}
        placeholder="City"
      />

      <Header>Topics of Interest</Header>
      <TagsInput
        value={currentInterests}
        onChange={setCurrentInterests}
        placeholder="Anxiety"
      />
      <TagsList
        tags={currentInterests}
        setTags={setCurrentInterests}
      />
      <Header>Favourite Notes</Header>
      {/* TODO: add favs notes */}
    </>
  )
}

export default ProfileEditForm
