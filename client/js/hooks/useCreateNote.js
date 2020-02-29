import {useMutation} from '@apollo/react-hooks'
import {CREATE_NOTE} from '../context'

const useCreateNote = () => {
  const [createNote, {data: createdNoteData, error}] = useMutation(
    CREATE_NOTE,
  )

  return [createNote, error, createdNoteData]
}

export default useCreateNote
