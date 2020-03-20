import React from 'react'
import {useAuth} from '../../hooks'
import styles from './LogoutButton.styles'
import {Text, View} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'

const LogoutButton = () => {
  const {logout} = useAuth()

  return (
    <View style={styles.logoutContainer}>
      <Text style={styles.click}>Click here to </Text>
      <TouchableOpacity onPress={logout} style={styles.authToggle}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LogoutButton
