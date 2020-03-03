import React from 'react'
import {SafeAreaView} from 'react-native'
import {Header} from '../components/Typography'
import {TagsInput, TagsList, styles} from '../components'

const Profile = () => {
  return (
    <SafeAreaView style={styles.noteArea}>
      {/* add avatar */}
      {/* add name */}
      <Header>Topics of Interest</Header>
      <TagsInput placeholder="Write your topic" />
      <TagsList />
      <Header>Favourite Notes</Header>
      {/* add favs notes */}
    </SafeAreaView>
  )
}

export default Profile
