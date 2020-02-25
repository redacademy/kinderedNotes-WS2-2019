import React from 'react'
import {Text, View} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Grid from './grid'

function ReceivedScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Received</Text>
      <Grid />
    </View>
  )
}

function SentScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Sent</Text>
    </View>
  )
}

const Tab = createMaterialTopTabNavigator()

export default function NoteTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Received" component={ReceivedScreen} />
      <Tab.Screen name="Sent" component={SentScreen} />
    </Tab.Navigator>
  )
}
