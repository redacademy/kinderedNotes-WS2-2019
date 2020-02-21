import React from 'react'
import {Notes, Profile, Write} from './screens/index'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

const Stack = createStackNavigator()

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Notes">
        <Stack.Screen
          name="Notes"
          component={Notes}
          options={{title: 'Notes'}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Profile'}}
        />
        <Stack.Screen
          name="Write"
          component={Write}
          options={{title: 'Write'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
