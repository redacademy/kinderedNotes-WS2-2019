import React from 'react'
import {SafeAreaView, Button} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import {Header} from '../Typography'
import {TagsInput, TagsList, Input, styles} from '../index'
import {useAuth} from '../../hooks'

const CreateUserForm = ({authData}) => {
  const {signup} = useAuth()

  const signUp = () => {
    signup(authData)
  }

  return (
    <SafeAreaView style={styles.noteArea}>
      <ScrollView>
        <Header>Profile Information</Header>
        <Input placeholder="Username"></Input>
        <Input placeholder="Country"></Input>
        <Input placeholder="City"></Input>
        <Header>Topics of Interest</Header>
        <TagsInput placeholder="Write your topic" />
        <TagsList />
        <Button onPress={signUp} title="Get Started" />
      </ScrollView>
    </SafeAreaView>
  )
}

export default CreateUserForm
