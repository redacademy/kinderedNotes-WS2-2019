import React from 'react'
import {StatusBar} from 'react-native'
import {ApolloProvider} from '@apollo/react-hooks'
import {Login} from './screens'
import {client, AuthContextProvider} from './context'
import {SiteTransitionWrapper} from './navigation'

// TODO: refactor to `navigation/routes.js`
import Navigation from './Navigation'

const App = () => (
  <ApolloProvider client={client}>
    <AuthContextProvider>
      <StatusBar barStyle="dark-content" />
      <SiteTransitionWrapper
        AuthView={Login}
        DefaultView={Navigation}
      />
    </AuthContextProvider>
  </ApolloProvider>
)

export default App
