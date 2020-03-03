import {useContext} from 'react'
import {ActiveNoteContext} from '../context'

const useActiveNote = () => {
  const {activeNote, setActiveNote} = useContext(ActiveNoteContext)

  return {activeNote, setActiveNote}
}

export default useActiveNote
