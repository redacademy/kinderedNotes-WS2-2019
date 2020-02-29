import {useMutation} from '@apollo/react-hooks'
import {CREATE_NOTE} from '../context'

const useCreateNote = () => {
  const [createNote, {data: createdNoteData, error}] = useMutation(
    CREATE_NOTE,
  )

  const handleCreateNote = args => createNote(args)

  return [handleCreateNote, error, createdNoteData]
}

export default useCreateNote
