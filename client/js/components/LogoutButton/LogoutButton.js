import LogoutIcon from '../../../assets/icons/Logout.svg'
import React from 'react'
import {Button} from '../index.js'
import {useAuth} from '../../hooks'
import styles from './LogoutButton.styles'

const LogoutButton = () => {
  const {logout} = useAuth()

  return (
    <Button onPress={logout} style={styles.button}>
      <LogoutIcon />
    </Button>
  )
}

export default LogoutButton
