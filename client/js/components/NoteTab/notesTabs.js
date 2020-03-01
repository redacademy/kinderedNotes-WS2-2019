import React from 'react'
import {Text} from 'react-native'
import {useQuery} from '@apollo/react-hooks'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Grid from '../grid'
import {INBOX} from '../../context/apollo'

function ReceivedScreen() {
  const {loading, error, data} = useQuery(INBOX)

  if (error)
    return (
      <Text>
        Something went wrong. Please restart the App to try again.
      </Text>
    )

  if (loading) return <Text>Loading inbox...</Text>

  return <Grid data={!error && data && data.inbox} />
}

function SentScreen() {
  const data = [] //TODO

  return <Grid data={data} />
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
