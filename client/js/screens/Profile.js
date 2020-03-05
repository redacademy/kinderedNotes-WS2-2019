import React from 'react'
import {SafeAreaView} from 'react-native'
import {Header} from '../components/Typography'
import {TagsInput, TagsList, styles} from '../components'

const Profile = () => {
  return (
    <SafeAreaView style={styles.noteArea}>
      <Header>Profile Information</Header>
      {/* add avatar */}
      {/* add name */}
      <TagsInput placeholder="Username" />
      <TagsInput placeholder="Country" />
      <TagsInput placeholder="City" />
      <Header>Topics of Interest</Header>
      <TagsInput placeholder="Write your topic" />
      <TagsList />
      <Header>Favourite Notes</Header>
      {/* add favs notes */}
    </SafeAreaView>
  )
}

export default Profile
