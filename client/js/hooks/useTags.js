import {useContext} from 'react'
import {TagsContext} from '../context'

const useTags = () => {
  const {tags, setTags} = useContext(TagsContext)

  return {tags, setTags}
}

export default useTags
