import React from 'react'
import {Text} from 'react-native'
import {SafeAreaView} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import Nav_Notes from '../../assets/icons/Nav_Notes.svg'

const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>profile page</Text>
        <Nav_Notes style={{width: 100, height: 100}} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile
