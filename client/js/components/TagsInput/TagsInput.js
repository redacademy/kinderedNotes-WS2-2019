import React, {useState} from 'react'
import {Input} from '../index'
import {formatTagInput} from './utils'

const TagsInput = ({value, onChange, placeholder}) => {
  const [tagInput, setTagInput] = useState('')

  // TODO: validate tag on input (eg. no duplicates, max length, max tags amount)

  const handleChangeText = input => {
    if (input === ' ' && tagInput === '') {
      return
    }

    const lastInput = input[input.length - 1]

    if (lastInput === ' ') {
      onChange([formatTagInput(input), ...value])
      setTagInput('')
    } else if (lastInput === ',') {
      onChange([formatTagInput(input.slice(0, -1)), ...value])
      setTagInput('')
    } else {
      setTagInput(input)
    }
  }

  return (
    <Input
      placeholder={placeholder}
      onChangeText={handleChangeText}
      value={tagInput}
    />
  )
}

export default TagsInput
