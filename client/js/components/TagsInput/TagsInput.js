import React from 'react'
import Tags from 'react-native-tags'
import {useTags} from '../../hooks'

const TagsInput = ({placeholder}) => {
  const {tags, setTags} = useTags()

  // TODO: style input
  // TODO: render placeholder
  // TODO: validate tag on input (eg. no duplicate)

  return (
    <Tags
      onChangeTags={tag => tag.length && setTags([tag, ...tags])}
      containerStyle={{justifyContent: 'center'}}
      inputStyle={{backgroundColor: 'white'}}
    />
  )
}

export default TagsInput
