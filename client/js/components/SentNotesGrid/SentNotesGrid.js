import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import {OUTBOX} from '../../context/apollo'
import {NotesGrid} from '../index'

const SentNotesGrid = () => {
  const {loading, error, data} = useQuery(OUTBOX)

  return (
    <NotesGrid
      data={data && data.outbox}
      loading={loading}
      error={error}
    />
  )
}

export default SentNotesGrid
