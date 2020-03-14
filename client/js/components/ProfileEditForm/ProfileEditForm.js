import React, {useEffect, useState, useContext} from 'react'
import {Text, View, Image} from 'react-native'
import {useMutation} from '@apollo/react-hooks'
import {useAuth} from '../../hooks'
import {UPDATE_USER, TagsContext} from '../../context'
import {TagsInput, TagsList, NotesGrid} from '../index'
import {Header} from '../Typography'
import AVATARS from '../AvatarSelect/avatars'
import GeneralStatusBarColor from '../GeneralStatusBarColor'
import styles from './ProfileEditForm.styles'

// TODO
const avatar = 2
const username = 'Gabe'

const ProfileEditForm = ({navigation}) => {
  const [updateUser] = useMutation(UPDATE_USER)
  const {tags, setTags} = useContext(TagsContext)

  const {user} = useAuth()
  const [currentAvatar] = useState(user?.user?.avatar)
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

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={AVATARS[avatar]} />
        </View>

        <Text style={styles.blueText}>{username}</Text>

        <Header>Topics of Interest</Header>

        <TagsInput
          value={tags}
          onChange={setTags}
          placeholder="Anxiety"
        />

        <TagsList tags={tags} setTags={setTags} />
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
