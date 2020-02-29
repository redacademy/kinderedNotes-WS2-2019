import React from 'react'
import {Text} from 'react-native'
import {SafeAreaView} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import Grid from '../components/grid'

const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>profile page</Text>
        <Grid />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile
