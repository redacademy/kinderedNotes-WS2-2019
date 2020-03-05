import React from 'react'
import {Notes, Note, Profile, SentNote, Write} from './screens'
// import {SentNote} from './components'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import Nav_Notes from '../assets/icons/Nav_Notes'
import Nav_Write from '../assets/icons/Nav_Write'
import Nav_Profile from '../assets/icons/Nav_Profile'
import Nav_Note_LineIcon from '../assets/icons/Nav_Note_LineIcon'
import Nav_Profile_LineIcon from '../assets/icons/Nav_Profile_LineIcon'
import Nav_Edit_LineIcon from '../assets/icons/Nav_Edit_LineIcon'

const NotesStack = createStackNavigator()

function NotesStackScreen() {
  return (
    <NotesStack.Navigator
      screenOptions={{
        headerTintColor: '#48a9c6',
        headerStyle: {
          backgroundColor: '#eaf5f8',
          height: 130,
        },
      }}
    >
      <NotesStack.Screen
        options={{title: ''}}
        name="Notes"
        component={Notes}
      />
      <NotesStack.Screen name="Note" component={Note} />
      <NotesStack.Screen name="SentNote" component={SentNote} />
    </NotesStack.Navigator>
  )
}
const WriteStack = createStackNavigator()

function WriteStackScreen() {
  return (
    <WriteStack.Navigator
      screenOptions={{
        headerTintColor: '#48a9c6',
        headerStyle: {backgroundColor: '#eaf5f8', height: 130},
      }}
    >
      <WriteStack.Screen name="Write a kind note" component={Write} />
    </WriteStack.Navigator>
  )
}

const ProfileStack = createStackNavigator()

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerTintColor: '#48a9c6',
        headerStyle: {backgroundColor: '#eaf5f8', height: 130},
      }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
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
            const {name} = route
            if (name === 'Notes') {
              if (color === 'gray') {
                return <Nav_Note_LineIcon />
              } else {
                return <Nav_Notes />
              }
            } else if (name === 'Write') {
              if (color === 'gray') {
                return <Nav_Edit_LineIcon />
              } else {
                return <Nav_Write />
              }
            } else if (name === 'Profile') {
              if (color === 'gray') {
                return <Nav_Profile_LineIcon />
              } else {
                return <Nav_Profile />
              }
            }
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
            borderBottomColor: 'red',
            borderBottomWidth: 0,
            shadowColor: 'transparent',
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
