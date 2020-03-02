import React from 'react'
import {TouchableOpacity} from 'react-native'
import BlueNote from '../../../assets/icons/Square_Blue.svg'

const NoteColor = props => (
  <TouchableOpacity {...props}>
    <BlueNote />
  </TouchableOpacity>
)

export default NoteColor
