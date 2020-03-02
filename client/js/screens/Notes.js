import React from 'react'
import {SafeAreaView, View} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {ReceivedNotesGrid, SentNotesGrid} from '../components'

const Tab = createMaterialTopTabNavigator()

const Notes = () => (
  <SafeAreaView>
    <View style={{height: '100%'}}>
      <Tab.Navigator>
        <Tab.Screen name="Received" component={ReceivedNotesGrid} />
        <Tab.Screen name="Sent" component={SentNotesGrid} />
      </Tab.Navigator>
    </View>
  </SafeAreaView>
)

export default Notes
