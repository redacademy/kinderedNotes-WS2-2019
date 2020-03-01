import {useContext} from 'react'
import {TagsContext} from '../context'

const useTags = () => {
  const {tags, setTags} = useContext(TagsContext)

  const deleteTag = i => {
    const tagsCopy = [...tags]
    tagsCopy.splice(i, 1)
    setTags(tagsCopy)
  }

  return {tags, setTags, deleteTag}
}

export default useTags
