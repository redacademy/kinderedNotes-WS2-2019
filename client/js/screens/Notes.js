import React from 'react'
import {Text, SafeAreaView, TouchableOpacity} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import {useQuery} from '@apollo/react-hooks'
import {INBOX} from '../context/apollo'
import {useAuth} from '../hooks'

// FIXME: user is functionally logged out on hard reload
const TEMP_LOGOUT = () => {
  const {logout} = useAuth()

  return (
    <TouchableOpacity onPress={logout}>
      <Text>log out</Text>
    </TouchableOpacity>
  )
}

const Notes = () => {
  const {loading, error, data} = useQuery(INBOX)

  return (
    <SafeAreaView>
      <ScrollView>
        {error && (
          <Text>
            Something went wrong. Please restart the App to try again.
          </Text>
        )}

        {loading && <Text>Loading inbox...</Text>}

        {!error && data && (
          <Text>{data.inbox.map(d => JSON.stringify(d))}</Text>
        )}
      </ScrollView>
      <TEMP_LOGOUT />
    </SafeAreaView>
  )
}

export default Notes
