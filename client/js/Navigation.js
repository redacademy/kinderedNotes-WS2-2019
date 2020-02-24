import React from 'react'
import {Notes, Profile, Write} from './screens'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import {Text, View} from 'react-native'

function NotesScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Home screen</Text>
    </View>
  )
}
function ProfileScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>profile screen</Text>
    </View>
  )
}
function WriteScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>write screen</Text>
    </View>
  )
}
const NotesStack = createStackNavigator()

function NotesStackScreen() {
  return (
    <NotesStack.Navigator>
      <NotesStack.Screen name="Notes" component={NotesScreen} />
    </NotesStack.Navigator>
  )
}
const WriteStack = createStackNavigator()

function WriteStackScreen() {
  return (
    <WriteStack.Navigator>
      <WriteStack.Screen name="Write" component={WriteScreen} />
    </WriteStack.Navigator>
  )
}

const ProfileStack = createStackNavigator()

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            // let iconName
            // if (route.name === 'Notes') {
            //   iconName = focused
            //     ? 'ios-information-circle'
            //     : 'ios-information-circle-outline'
            // } else if (route.name === 'Settings') {
            //   iconName = focused ? 'ios-list-box' : 'ios-list'
            // }
            // // You can return any component that you like here!
            // return (
            //   <Ionicons name={iconName} size={size} color={color} />
            // )
          },
        })}
        tabBarOptions={{
          activeTintColor: '#48a9c6',
          inactiveTintColor: 'gray',
          activeBackgroundColor: '#eaf5f8',
          inactiveBackgroundColor: '#eaf5f8',
          style: {
            backgroundColor: '#eaf5f8',
            height: 95,
          },
        }}
      >
        <Tab.Screen name="Notes" component={NotesStackScreen} />
        <Tab.Screen name="Write" component={WriteStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
