import React, {useState, useCallback} from 'react'
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import {useAuth} from '../hooks'

const Login = () => {
  const {signup, login, isLogin, toggleIsLogin} = useAuth()
  const [usernameInput, setUsernameInput] = useState('user')
  const [passwordInput, setPasswordInput] = useState('password')

  const onAuth = useCallback(
    () =>
      isLogin
        ? login({
            variables: {
              username: usernameInput,
              password: passwordInput,
            },
          })
        : signup({
            variables: {
              username: usernameInput,
              password: passwordInput,
            },
          }),
    [isLogin, login, signup, usernameInput, passwordInput],
  )

  return (
    <SafeAreaView>
      <TextInput
        value={usernameInput}
        onChangeText={setUsernameInput}
        placeholder="Username"
      />

      <TextInput
        value={passwordInput}
        onChangeText={setPasswordInput}
        placeholder="Password"
      />

      <TouchableOpacity onPress={onAuth}>
        <Text>{isLogin ? 'Log in' : 'Sign up'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleIsLogin}>
        <Text>
          {isLogin ? 'Create an account' : 'Already have an account'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Login
