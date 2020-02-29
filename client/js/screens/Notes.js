import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import {Text, SafeAreaView} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import {INBOX} from '../context/apollo'

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
    </SafeAreaView>
  )
}

export default Notes
