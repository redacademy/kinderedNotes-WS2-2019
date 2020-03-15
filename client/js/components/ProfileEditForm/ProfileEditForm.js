import React, {useEffect, useState} from 'react'
import {Text, View} from 'react-native'
import {useMutation} from '@apollo/react-hooks'
import {useAuth} from '../../hooks'
import {UPDATE_USER} from '../../context'
import {TagsInput, TagsList, NotesGrid} from '../index'
import {Header} from '../Typography'
import GeneralStatusBarColor from '../GeneralStatusBarColor'
import styles from './ProfileEditForm.styles'
import AvatarSelect from '../AvatarSelect'

const ProfileEditForm = ({navigation}) => {
  const [updateUser] = useMutation(UPDATE_USER)
  const {user} = useAuth()
  const [currentAvatar, setCurrentAvatar] = useState(
    user?.user?.avatar,
  )
  const [currentInterests, setCurrentInterests] = useState(
    user?.user?.interests.map(({title}) => title),
  )

  useEffect(() => {
    updateUser({
      variables: {
        avatar: currentAvatar,
        interests: currentInterests,
      },
    })
    // TODO: set new user data in user context
  }, [currentAvatar, currentInterests, updateUser])

  const onNotePress = () => navigation.navigate('ReceivedNote')

  return (
    <View style={styles.profileContainer}>
      <View style={styles.container}>
        <GeneralStatusBarColor />

        <AvatarSelect
          currentAvatar={currentAvatar}
          onChange={setCurrentAvatar}
          large
        />

        <Text style={styles.blueText}>{user.user.username}</Text>

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
      </View>

      <Header>Favourite Notes</Header>

      <NotesGrid
        data={user.user.favoriteNotes}
        onNotePress={onNotePress}
        loading={false}
        error={null}
      />
    </View>
  )
}

export default ProfileEditForm
