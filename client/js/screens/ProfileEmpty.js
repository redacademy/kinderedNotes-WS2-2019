import React from 'react'
import {SafeAreaView} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import {Header} from '../components/Typography'
import {TagsInput, TagsList, Input} from '../components'

const ProfileEmpty = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header>Profile Information</Header>
        <Input placeholder="Username"></Input>
        <Input placeholder="Country"></Input>
        <Input placeholder="City"></Input>
        <Header>Topics of Interest</Header>
        <TagsInput placeholder="Write your topic" />
        <TagsList />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileEmpty
