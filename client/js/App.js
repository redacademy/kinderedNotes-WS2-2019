import React, {useState} from 'react'
import {StatusBar, SafeAreaView} from 'react-native'
import {ApolloProvider} from '@apollo/react-hooks'
import {Login, Walkthrough} from './screens'
import {
  client,
  AuthContextProvider,
  TagsContextProvider,
} from './context'
import {SiteTransitionWrapper} from './navigation'

// TODO: refactor to `navigation/routes.js`
import Navigation from './Navigation'

const App = () => {
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(true)

  if (isFirstTimeUser) {
    return (
      <SafeAreaView>
        <Walkthrough onComplete={() => setIsFirstTimeUser(false)} />
      </SafeAreaView>
    )
  }

  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <StatusBar barStyle="dark-content" />
        <TagsContextProvider>
          <SiteTransitionWrapper
            AuthView={Login}
            DefaultView={Navigation}
          />
        </TagsContextProvider>
      </AuthContextProvider>
    </ApolloProvider>
  )
}

export default App
