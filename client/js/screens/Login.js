import React, {useState} from 'react'
import {StyleSheet, View, SafeAreaView} from 'react-native'
import {AuthForm, CreateUserForm} from '../components'
import Logo from '../../assets/icons/Logo_Border.svg'
import WaveTop from '../../assets/icons/Wave_Up.svg'
import WaveBottom from '../../assets/icons/Wave_Down.svg'

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  waveTop: {
    marginHorizontal: -50,
  },
  waveBottom: {
    position: 'absolute',
    bottom: -50,
    marginHorizontal: -50,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginVertical: 35,
  },
})

const Login = () => {
  const [tempUserData, setTempUserData] = useState()

  return (
    <SafeAreaView style={styles.container}>
      <WaveTop style={styles.waveTop} />

      <View style={styles.content}>
        <Logo style={styles.logo} />

        {tempUserData ? (
          <CreateUserForm authData={tempUserData} />
        ) : (
          <AuthForm onSignUp={setTempUserData} />
        )}
      </View>

      <WaveBottom style={styles.waveBottom} />
    </SafeAreaView>
  )
}

export default Login
