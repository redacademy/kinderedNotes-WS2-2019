import React from 'react'
import {StatusBar} from 'react-native'
import Navigation from './Navigation'
import {ApolloProvider} from '@apollo/react-hooks'
import {client} from './context'

const App = () => (
  <ApolloProvider client={client}>
    <StatusBar barStyle="dark-content" />
    <Navigation />
  </ApolloProvider>
)

export default App
