import React from 'react'
import {SafeAreaView} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import {Note} from '../components'

const Write = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Note />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Write
