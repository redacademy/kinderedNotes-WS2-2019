import React from 'react'
import {View} from 'react-native'
import styles from './Step.styles'

const Step = ({active, children}) => {
  return <View style={active ? styles.onPage : styles.notOnPage} />
}

export default Step
