import React, {useState} from 'react'
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
import GeneralStatusBarColor from './components/GeneralStatusBarColor'

// TODO: refactor to `navigation/routes.js`
import Navigation from './Navigation'
import {IntroTransitionWrapper} from './components'

const App = () => {
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(true)

  return (
    <IntroTransitionWrapper>
      {isFirstTimeUser ? (
        <SafeAreaView>
          <Walkthrough onComplete={() => setIsFirstTimeUser(false)} />
        </SafeAreaView>
      ) : (
        <ApolloProvider client={client}>
          <AuthContextProvider>
            <StatusBar barStyle="dark-content" />
            <GeneralStatusBarColor />
            <TagsContextProvider>
              <ActiveNoteContextProvider>
                {/* TODO: rename */}
                <SiteTransitionWrapper
                  AuthView={Login}
                  DefaultView={Navigation}
                />
              </ActiveNoteContextProvider>
            </TagsContextProvider>
          </AuthContextProvider>
        </ApolloProvider>
      )}
    </IntroTransitionWrapper>
  )
}

export default App
