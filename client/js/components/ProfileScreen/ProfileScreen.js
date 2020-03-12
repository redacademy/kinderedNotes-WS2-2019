import {Image, View} from 'react-native'
import {useAuth} from '../../hooks'
import AVATARS from '../AvatarSelect/avatars'
import React, {useEffect, useState, useContext} from 'react'
import {Text} from 'react-native'
import {useMutation} from '@apollo/react-hooks'
import {UPDATE_USER} from '../../context'
import {TagsContext} from '../../context'
import styles from './ProfileScreen.styles'
import {TagsInput, TagsList} from '../../components'
import {Header} from '../Typography'
import NotesGrid from '../../components/NotesGrid'

const ProfileScreen = ({avatarIndex = 4, name = 'Grazi'}) => {
  const {user} = useAuth()
  const {tags, setTags} = useContext(TagsContext)

  return (
    <View style={styles.profileContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={AVATARS[avatarIndex]} />
        </View>
        <Text style={styles.blueText}>TODO: name</Text>
        <Header>Topics of Interest</Header>
        <TagsInput
          value={tags}
          onChange={setTags}
          placeholder="Anxiety"
        />
        <TagsList tags={tags} setTags={setTags} />
        <Text>TODO -> Favorites</Text>
        {/* add grid */}
      </View>
    </View>
  )
}

export default ProfileScreen
