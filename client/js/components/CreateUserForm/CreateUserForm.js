import React, {useState, useEffect} from 'react'
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native'
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
import Animated, {Easing} from 'react-native-reanimated'
import termsContent from './terms-text'

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  profileContainer: {},
  termsContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
  },
  termsHeader: {
    marginVertical: 23,
  },
  termsText: {
    lineHeight: 27,
    marginBottom: 100,
  },
})

const Terms = ({onComplete}) => {
  const [anim] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 400,
      easing: Easing.quad,
    }).start()
  }, [])

  const onAccept = () => {
    Animated.timing(anim, {
      toValue: 0,
      duration: 400,
      easing: Easing.quad,
    }).start()

    onComplete()
  }

  const offset = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [700, 0],
  })

  return (
    <Animated.View
      style={{
        marginTop: offset,
        opacity: anim,
        ...styles.termsContainer,
      }}
    >
      <ScrollView style={styles.profileContainer}>
        <Header style={styles.termsHeader}>Terms & Conditions</Header>
        <Text style={styles.termsText}>{termsContent}</Text>
      </ScrollView>
      <Button
        style={{
          zIndex: 999,
          position: 'absolute',
          bottom: 0,
        }}
        onPress={onAccept}
      >
        Accept
      </Button>
    </Animated.View>
  )
}

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
        <TagsInput
          value={interestsInput}
          onChange={setInterestsInput}
          placeholder="Anxiety"
        />
        <TagsList tags={interestsInput} setTags={setInterestsInput} />
      </ScrollView>

      {hasAcceptedTerms ? (
        <Button onPress={createUser}>Get Started</Button>
      ) : (
        <Button onPress={openTerms}>Terms and conditions</Button>
      )}

      {termsOpen && <Terms onComplete={acceptTerms} />}
    </SafeAreaView>
  )
}

export default CreateUserForm
