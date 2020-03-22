import React, {useEffect, useState} from 'react'
import {Text, View} from 'react-native'
import {useMutation} from '@apollo/react-hooks'
import {useAuth} from '../../hooks'
import {UPDATE_USER} from '../../context'
import {TagsInput, TagsList, NotesGrid} from '../index'
import GeneralStatusBarColor from '../GeneralStatusBarColor'
import styles from './ProfileEditForm.styles'
import AvatarSelect from '../AvatarSelect'
import LogoutButton from '../LogoutButton'
import {Header} from '../Typography'
import {ScrollView} from 'react-native-gesture-handler'

const ProfileEditForm = ({navigation}) => {
  const [updateUser] = useMutation(UPDATE_USER, {
    refetchQueries: ['inbox', 'getActiveUser'],
  })
  const {user} = useAuth()
  const [currentAvatar, setCurrentAvatar] = useState(
    user?.user?.avatar,
  )
  const [currentInterests, setCurrentInterests] = useState(
    user?.user?.interests?.map(({title}) => title) || [],
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
        {/* <GeneralStatusBarColor /> */}

        <AvatarSelect
          currentAvatar={currentAvatar}
          onChange={setCurrentAvatar}
          large
        />

        <Text style={styles.usernameTag}>{user?.user?.username}</Text>

        <Header>Topics of Interest</Header>

        <TagsInput
          value={currentInterests}
          onChange={setCurrentInterests}
          placeholder="Anxiety"
        />
        <ScrollView>
          <TagsList
            tags={currentInterests}
            setTags={setCurrentInterests}
          />
          <Header>Favourite Notes</Header>
          <NotesGrid
            data={user?.user?.favoriteNotes}
            onNotePress={onNotePress}
            loading={false}
            error={null}
          />
        </ScrollView>
      </View>
      <LogoutButton />
    </View>
  )
}

export default ProfileEditForm
