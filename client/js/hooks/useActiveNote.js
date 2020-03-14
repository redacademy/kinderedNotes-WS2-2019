import {useContext} from 'react'
import {ActiveNoteContext} from '../context'

const useActiveNote = () => {
  const {activeNote, setActiveNote, onNoteOpen} = useContext(
    ActiveNoteContext,
  )

  return {activeNote, setActiveNote, onNoteOpen}
}

export default useActiveNote
