import React, {useState} from 'react'
import {SafeAreaView, Button} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import {Header} from '../Typography'
import {
  AvatarSelect,
  TagsInput,
  TagsList,
  Input,
  styles,
} from '../index'
import {useAuth} from '../../hooks'

const CreateUserForm = ({authData}) => {
  const {signup} = useAuth()
  const [countryInput, setCountryInput] = useState('')
  const [cityInput, setCityInput] = useState('')
  const [currentAvatar, setCurrentAvatar] = useState(0)

  const createUser = () => {
    signup({
      variables: {
        ...authData.variables,
        country: countryInput,
        city: cityInput,
        avatar: currentAvatar,
      },
    })
  }

  return (
    <SafeAreaView style={styles.noteArea}>
      <ScrollView>
        <Header>Profile Information</Header>
        <AvatarSelect
          currentAvatar={currentAvatar}
          onChange={setCurrentAvatar}
        />
        <Input
          value={countryInput}
          onChangeText={setCountryInput}
          placeholder="Country"
        />
        <Input
          value={cityInput}
          onChangeText={setCityInput}
          placeholder="City"
        />
        <Header>Topics of Interest</Header>
        <TagsInput placeholder="TODO" />
        <TagsList />
        <Button onPress={createUser} title="Get Started" />
      </ScrollView>
    </SafeAreaView>
  )
}

export default CreateUserForm
