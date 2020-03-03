import React from 'react'
import {SafeAreaView} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import {Header} from '../components/Typography'
import {TagsInput, TagsList} from '../components'

const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* add avatar */}
        <Header>Topics of Interest</Header>
        <TagsInput placeholder="Write your topic" />
        <TagsList />
        <Header>Favourite Notes</Header>
        {/* add favs notes */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile
