import React from 'react'
import {TouchableOpacity} from 'react-native'
import NoteBlue from '../../../assets/icons/Square_Blue.svg'
import NoteGreenFill from '../../../assets/icons/Square_Green_Filled.svg'
import NoteWhite from '../../../assets/icons/Square_White.svg'

const NoteColor = ({color, ...props}) => (
  <TouchableOpacity {...props}>
    {color === 'BLUE' ? (
      <NoteBlue />
    ) : color === 'GREEN' ? (
      <NoteGreenFill />
    ) : (
      <NoteWhite />
    )}
  </TouchableOpacity>
)

export default NoteColor
