import React from 'react'
import {TouchableOpacity} from 'react-native'
import PaletteBlue from '../../../assets/icons/Color-palette_Blue.svg'

const ColorPalette = props => (
  <TouchableOpacity {...props}>
    <PaletteBlue />
  </TouchableOpacity>
)

export default ColorPalette
