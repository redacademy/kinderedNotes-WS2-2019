import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import {Text} from 'react-native'
import {SafeAreaView} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import {FEED} from '../context/apollo'

const Notes = () => {
  const {
    loading,
    error,
    data: {feed},
  } = useQuery(FEED)

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>notes page</Text>

        {error ? (
          <Text>
            Something went wrong. Please restart the App to try again.
          </Text>
        ) : null}

        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <Text>{feed.map(d => d.id)}</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Notes
