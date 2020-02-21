import React from 'react'
import {Notes, Profile, Write} from './screens'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Notes">
        <Tab.Screen
          name="Notes"
          component={Notes}
          options={{title: 'Notes'}}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Profile'}}
        />
        <Tab.Screen
          name="Write"
          component={Write}
          options={{title: 'Write'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
