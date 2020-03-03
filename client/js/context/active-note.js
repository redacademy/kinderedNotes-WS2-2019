import React, {createContext, useState} from 'react'

const ActiveNoteContext = createContext({
  activeNote: null,
  setActiveNote: null,
})

export const ActiveNoteContextProvider = ({children}) => {
  const [activeNote, setActiveNote] = useState(null)

  return (
    <ActiveNoteContext.Provider value={{activeNote, setActiveNote}}>
      {children}
    </ActiveNoteContext.Provider>
  )
}

export default ActiveNoteContext
