import {useMutation} from '@apollo/react-hooks'
import {CREATE_NOTE} from '../context'

const useCreateNote = () => {
  const [createNote, {data, error}] = useMutation(CREATE_NOTE, {
    refetchQueries: ['outbox'],
  })

  const handleCreateNote = args => createNote(args)

  return [handleCreateNote, error, data]
}

export default useCreateNote
