import React from 'react'
import {SafeAreaView, View} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {ReceivedNotesGrid, SentNotesGrid} from '../components'

const Tab = createMaterialTopTabNavigator()

const Notes = () => (
  <SafeAreaView>
    <View style={{height: '100%'}}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#48a9c6',
          inactiveTintColor: '#83c4d6',
          labelStyle: {
            fontSize: 16,
            textTransform: 'capitalize',
            fontFamily: 'Nunito-Bold',
          },
          style: {
            backgroundColor: '#eaf5f8',
          },

          indicatorStyle: {
            bottom: 0,
            backgroundColor: '#48a9c6',
          },
        }}
      >
        <Tab.Screen name="Received" component={ReceivedNotesGrid} />
        <Tab.Screen name="Sent" component={SentNotesGrid} />
      </Tab.Navigator>
    </View>
  </SafeAreaView>
)

export default Notes
