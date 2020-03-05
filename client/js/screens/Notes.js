import React from 'react'
import {SafeAreaView, View} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {
  ReceivedNotesGrid,
  SentNote,
  SentNotesGrid,
} from '../components'

const Tab = createMaterialTopTabNavigator()

const Notes = () => (
  <SafeAreaView>
    <View style={{height: '100%'}}>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            //fontSize: 12,
            color: '#48a9c6',
            //fontWeight: 'bold',
          },
          tabStyle: {},
          style: {
            backgroundColor: '#eaf5f8',
          },
          indicatorStyle: {
            bottom: 1,
            backgroundColor: '#48a9c6',
          },
        }}
      >
        <Tab.Screen name="Received" component={ReceivedNotesGrid} />
        {/* <Tab.Screen name="ReceivedNote" component={ReceivedNotesGrid} /> */}
        <Tab.Screen name="Sent" component={SentNotesGrid} />
      </Tab.Navigator>
    </View>
  </SafeAreaView>
)

export default Notes
