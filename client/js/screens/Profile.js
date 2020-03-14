import React from 'react'
import {SafeAreaView} from 'react-native'
import {ProfileEditForm} from '../components'

const Profile = ({navigation}) => (
  <SafeAreaView>
    <ProfileEditForm navigation={navigation} />
  </SafeAreaView>
)

export default Profile
