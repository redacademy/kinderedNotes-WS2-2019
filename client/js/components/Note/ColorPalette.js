import React from 'react'
import {TouchableOpacity} from 'react-native'
import PaletteBlue from '../../../assets/icons/Color-palette_Blue.svg'
import PaletteWhite from '../../../assets/icons/Color-palette_White.svg'
import PaletteGreen from '../../../assets/icons/Color-palette_Green.svg'

const ColorPalette = ({color, ...props}) => (
  <TouchableOpacity {...props}>
    {color === 'BLUE' ? (
      <PaletteBlue />
    ) : color === 'GREEN' ? (
      <PaletteGreen />
    ) : (
      <PaletteWhite />
    )}
  </TouchableOpacity>
)

export default ColorPalette
