import React from 'react'
import {TouchableOpacity} from 'react-native'
import NoteBlue from '../../../assets/icons/Square_Blue.svg'
import NoteWhite from '../../../assets/icons/Square_White.svg'
import BorderGreen from '../../../assets/icons/Border_Green.svg'

const NoteColor = ({color, ...props}) => (
  <TouchableOpacity {...props}>
    {color === 'BLUE' ? (
      <NoteBlue />
    ) : color === 'GREEN' ? (
      <BorderGreen />
    ) : (
      <NoteWhite />
    )}
  </TouchableOpacity>
)

export default NoteColor
