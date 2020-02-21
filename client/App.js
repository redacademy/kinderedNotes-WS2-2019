import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native'

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />

    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <Text>Hello world</Text>
      </ScrollView>
    </SafeAreaView>
  </>
)

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
})

export default App
