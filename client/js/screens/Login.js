import React, {useState} from 'react'
import {SafeAreaView} from 'react-native'
import {AuthForm, CreateUserForm} from '../components'

const Login = () => {
  const [tempUserData, setTempUserData] = useState()

  return (
    <SafeAreaView>
      {tempUserData ? (
        <CreateUserForm authData={tempUserData} />
      ) : (
        <AuthForm onSignUp={setTempUserData} />
      )}
    </SafeAreaView>
  )
}

export default Login
