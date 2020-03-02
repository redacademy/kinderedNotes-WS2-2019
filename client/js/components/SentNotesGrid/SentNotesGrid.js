import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import {OUTBOX} from '../../context/apollo'
import {NotesGrid} from '../index'

const SentNotesGrid = () => {
  const {loading, error, data} = useQuery(OUTBOX)

  // FIXME: sort in query
  return (
    <NotesGrid
      data={data && data.outbox.reverse()}
      loading={loading}
      error={error}
    />
  )
}

export default SentNotesGrid
