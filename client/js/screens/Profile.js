import React from 'react'
import {SafeAreaView, View} from 'react-native'
import {Header} from '../components/Typography'
import {TagsInput, TagsList, styles} from '../components'

const Profile = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.profileArea}>
        {/* add avatar */}
        {/* add name */}
        <Header>Topics of Interest</Header>
        <TagsInput placeholder="Anxiety" />
        <TagsList />
        <Header>Favourite Notes</Header>
        {/* add favs notes */}
      </SafeAreaView>
    </View>
  )
}

export default Profile
