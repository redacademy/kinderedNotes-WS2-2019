import React from 'react'
import {TouchableOpacity} from 'react-native'
import FontIcon from '../../../assets/icons/Font_Blue.svg'

const FontToggle = props => (
  <TouchableOpacity {...props}>
    <FontIcon />
  </TouchableOpacity>
)

export default FontToggle
