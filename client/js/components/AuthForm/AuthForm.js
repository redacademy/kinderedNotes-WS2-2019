import React, {useCallback} from 'react'
import {Button, View, Image, TextInput} from 'react-native'
import {Formik} from 'formik'
import {useAuth} from '../../hooks'
import {Input} from '../index'
import {validateInputs} from './utils'
import UserIcon from '../../../assets/icons/User_Grey.png'
import styles from './AuthForm.styles'

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
        <View style={styles.form}>
          <View style={styles.username}>
            <Image
              source={require('../../../assets/icons/User_Grey.png')}
            />
            <Input
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              placeholder="Username"
            />
          </View>

          <Input
            secureTextEntry={true}
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
