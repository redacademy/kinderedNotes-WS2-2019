import React, {useState, useEffect} from 'react'
import {StatusBar, SafeAreaView} from 'react-native'
import {ApolloProvider} from '@apollo/react-hooks'
import {Login, Walkthrough} from './screens'
import {
  client,
  AuthContextProvider,
  TagsContextProvider,
  ActiveNoteContextProvider,
} from './context'
import {SiteTransitionWrapper} from './navigation'
//import GeneralStatusBarColor from './components/GeneralStatusBarColor'

// TODO: refactor to `navigation/routes.js`
import Navigation from './Navigation'
import {IntroTransitionWrapper, UpdateLocalUser} from './components'
import {useAuth} from './hooks'

const App = () => {
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(true)
  const {localUser, user, loading} = useAuth()

  if (loading) {
    return null
  }

  return (
    <IntroTransitionWrapper>
      {!localUser && !user && isFirstTimeUser ? (
        <SafeAreaView>
          <Walkthrough onComplete={() => setIsFirstTimeUser(false)} />
        </SafeAreaView>
      ) : (
        <>
          <StatusBar barStyle="dark-content" />
          {/* <GeneralStatusBarColor /> */}
          <TagsContextProvider>
            <ActiveNoteContextProvider>
              {/* TODO: rename */}
              <SiteTransitionWrapper
                AuthView={Login}
                DefaultView={Navigation}
              />
              {localUser && <UpdateLocalUser />}
            </ActiveNoteContextProvider>
          </TagsContextProvider>
        </>
      )}
    </IntroTransitionWrapper>
  )
}

export default () => (
  <ApolloProvider client={client}>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </ApolloProvider>
)
