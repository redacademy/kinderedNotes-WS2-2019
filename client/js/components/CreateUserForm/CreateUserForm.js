import React, {useState} from 'react'
import {View, SafeAreaView, ScrollView} from 'react-native'
import {Header} from '../Typography'
import {
  AvatarSelect,
  TagsInput,
  TagsList,
  Input,
  Button,
  styles as globalStyles,
} from '../index'
import {useAuth} from '../../hooks'
import Terms from './Terms'
import styles from './CreateUserForm.styles'

const CreateUserForm = ({authData}) => {
  const {signup} = useAuth()
  const [countryInput, setCountryInput] = useState('')
  const [cityInput, setCityInput] = useState('')
  const [currentAvatar, setCurrentAvatar] = useState(0)
  const [interestsInput, setInterestsInput] = useState([])
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)

  const acceptTerms = () => setHasAcceptedTerms(true)
  const openTerms = () => setTermsOpen(true)
  const createUser = () => {
    signup({
      variables: {
        ...authData.variables,
        country: countryInput,
        city: cityInput,
        avatar: currentAvatar,
        interests: interestsInput,
      },
    })
  }

  return (
    <SafeAreaView
      style={{...globalStyles.noteArea, ...styles.container}}
    >
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.profileContainer}>
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
          <TagsInput
            value={interestsInput}
            onChange={setInterestsInput}
            placeholder="Anxiety"
          />
          <TagsList
            tags={interestsInput}
            setTags={setInterestsInput}
          />
        </View>

        {hasAcceptedTerms ? (
          <Button onPress={createUser}>Get Started</Button>
        ) : (
          <Button onPress={openTerms}>Terms and conditions</Button>
        )}
      </ScrollView>

      {termsOpen && <Terms onComplete={acceptTerms} />}
    </SafeAreaView>
  )
}

export default CreateUserForm
