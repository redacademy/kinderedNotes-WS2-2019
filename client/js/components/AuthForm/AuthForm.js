import React, {useState} from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import {Formik} from 'formik'
import {useAuth} from '../../hooks'
import {Button, Input} from '../index'
import {validateInputs} from './utils'
import styles from './AuthForm.styles'
import {AuthText, Header} from '../Typography'

const AuthForm = ({onSignUp}) => {
  const {login, isLogin, toggleIsLogin} = useAuth()

  const onAuth = variables =>
    (isLogin ? login : onSignUp)({
      variables,
    })

  // TODO: rename state
  const [textEntry, setTextEntry] = useState(true)

  const onPassPress = () => {
    setTextEntry(!textEntry)
  }

  return (
    <Formik
      // TODO: clear dev auth details
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
            <View style={styles.image}>
              <Image
                source={require('../../../assets/icons/User_Grey.png')}
              />
            </View>
            <Input
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              placeholder="Username"
              style={styles.usernameInput}
            />
          </View>

          <View style={styles.username}>
            <View style={styles.image}>
              <Image
                source={require('../../../assets/icons/Lock_Grey.png')}
              />
            </View>
            <Input
              secureTextEntry={textEntry}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              style={styles.usernameInput}
            />
            <TouchableOpacity
              onPress={onPassPress}
              style={styles.image}
            >
              <Image
                source={require('../../../assets/icons/Eye.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.authButtons}>
            <Button disabled={!isValid} onPress={handleSubmit}>
              {isLogin ? 'Login' : 'Sign up'}
            </Button>

            <View style={styles.authContainer}>
              <Button
                onPress={toggleIsLogin}
                style={styles.authToggle}
              >
                <AuthText>
                  {isLogin
                    ? "Don't have an account?"
                    : 'Already have an account? '}
                </AuthText>
                <Header>{!isLogin ? ' Login' : ' Sign Up'}</Header>
              </Button>
            </View>
          </View>
        </View>
      )}
    </Formik>
  )
}

export default AuthForm
