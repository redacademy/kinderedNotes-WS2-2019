import React, {useState} from 'react'
import {useTags} from '../../hooks'
import {Input} from '../index'
import {formatTagInput} from './utils'

const TagsInput = ({placeholder}) => {
  const {tags, setTags} = useTags()
  const [tagInput, setTagInput] = useState('')

  // TODO: validate tag on input (eg. no duplicate, max length)

  const handleChangeText = input => {
    if (input === ' ' && tagInput === '') {
      return
    }

    const lastInput = input[input.length - 1]

    if (lastInput === ' ') {
      setTags([formatTagInput(input), ...tags])
      setTagInput('')
    } else if (lastInput === ',') {
      setTags([formatTagInput(input.slice(0, -1)), ...tags])
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
