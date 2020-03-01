import React, {createContext, useState} from 'react'

const TagsContext = createContext({tags: null, setTags: null})

export const TagsContextProvider = ({children}) => {
  const [tags, setTags] = useState([])

  return (
    <TagsContext.Provider value={{tags, setTags}}>
      {children}
    </TagsContext.Provider>
  )
}

export default TagsContext
