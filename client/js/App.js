import React from 'react'
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
import {IntroTransitionWrapper} from './components'
import {useAuth} from './hooks'

const App = () => {
  const {
    loading,
    isReturningVisitor,
    onWalkthroughComplete,
  } = useAuth()

  if (loading) {
    return null
  }

  return (
    <IntroTransitionWrapper>
      {isReturningVisitor ? (
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
            </ActiveNoteContextProvider>
          </TagsContextProvider>
        </>
      ) : (
        <SafeAreaView>
          <Walkthrough onComplete={() => onWalkthroughComplete()} />
        </SafeAreaView>
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
