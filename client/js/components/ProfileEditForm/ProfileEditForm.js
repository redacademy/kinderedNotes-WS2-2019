import React, {useEffect, useState, useContext} from 'react'
import {Text, View, Image} from 'react-native'
import {useMutation} from '@apollo/react-hooks'
import {UPDATE_USER} from '../../context'
import {Header} from '../Typography'
import {TagsInput, TagsList} from '../index'
import {useAuth} from '../../hooks'
import styles from './ProfileEditForm.styles'
import AVATARS from '../AvatarSelect/avatars'
import {TagsContext} from '../../context'

const ProfileEditForm = ({avatarIndex = 4, name = 'Grazi'}) => {
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

  return (
    <View style={styles.profileContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={AVATARS[avatarIndex]} />
        </View>
        <Text style={styles.blueText}>{name}</Text>
        <Header>Topics of Interest</Header>
        <TagsInput
          value={tags}
          onChange={setTags}
          placeholder="Anxiety"
        />
        <TagsList tags={tags} setTags={setTags} />
        <Header>Favourite Notes</Header>
        <Text>TODO -> Favorites</Text>
        {/* add grid */}
      </View>
    </View>
  )
}

export default ProfileEditForm
