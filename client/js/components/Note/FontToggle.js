import React from 'react'
import {TouchableOpacity} from 'react-native'
import FontIconBlue from '../../../assets/icons/Font_Blue.svg'
import FontIconGreen from '../../../assets/icons/Font_Green.svg'
import FontIconWhite from '../../../assets/icons/Font_White.svg'

const FontToggle = ({color, ...props}) => (
  <TouchableOpacity {...props}>
    {color === 'BLUE' ? (
      <FontIconBlue />
    ) : color === 'GREEN' ? (
      <FontIconGreen />
    ) : (
      <FontIconWhite />
    )}
  </TouchableOpacity>
)

export default FontToggle
