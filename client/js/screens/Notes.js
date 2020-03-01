import React from 'react'
import {SafeAreaView, View} from 'react-native'
import NoteTab from '../components/NoteTab'

const Notes = () => (
  <SafeAreaView>
    <View style={{height: '100%'}}>
      <NoteTab />
    </View>
  </SafeAreaView>
)

export default Notes
