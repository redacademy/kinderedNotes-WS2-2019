import React, {useCallback} from 'react'
import {Button, View} from 'react-native'
import {Formik} from 'formik'
import {useAuth} from '../../hooks'
import {Input} from '../index'
import {validateInputs} from './utils'

const AuthForm = () => {
  const {signup, login, isLogin, toggleIsLogin} = useAuth()

  const onAuth = useCallback(
    variables =>
      (isLogin ? login : signup)({
        variables,
      }),
    [isLogin, login, signup],
  )

  return (
    <Formik
      initialValues={{username: 'user', password: 'password'}}
      validate={validateInputs}
      onSubmit={onAuth}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        isValid,
      }) => (
        <View>
          <Input
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
            placeholder="Username"
          />

          <Input
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="Password"
          />

          <Button
            disabled={!isValid}
            onPress={handleSubmit}
            title={isLogin ? 'Log in' : 'Sign up'}
          />

          <Button
            onPress={toggleIsLogin}
            title={
              isLogin
                ? 'Create an account'
                : 'Already have an account'
            }
          />
        </View>
      )}
    </Formik>
  )
}

export default AuthForm
