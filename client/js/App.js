import React from 'react'
import {StatusBar} from 'react-native'
import {ApolloProvider} from '@apollo/react-hooks'
import Navigation from './Navigation'
import {Login} from './screens'
import {client, AuthContextProvider, AuthContext} from './context'

const App = () => (
  <ApolloProvider client={client}>
    <AuthContextProvider>
      <StatusBar barStyle="dark-content" />
      <AuthContext.Consumer>
        {({user}) => (user ? <Navigation /> : <Login />)}
      </AuthContext.Consumer>
    </AuthContextProvider>
  </ApolloProvider>
)

export default App
