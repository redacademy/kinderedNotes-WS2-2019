import React from 'react'
import {Text, SafeAreaView, TouchableOpacity} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import {useQuery} from '@apollo/react-hooks'
import {INBOX} from '../context/apollo'
import Grid from '../components/grid'

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

        {!error && data && <Grid data={data.inbox} />}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Notes
