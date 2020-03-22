import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import {OUTBOX} from '../../context/apollo'
import {NotesGrid} from '../index'

const SentNotesGrid = ({navigation}) => {
  // const {loading, error, data} = useQuery(OUTBOX, {
  //   fetchPolicy: 'network-only',
  // })
  const {loading, error, data} = useQuery(OUTBOX)

  // FIXME: sort in query
  return (
    <NotesGrid
      data={data && data.outbox.reverse()}
      onNotePress={() => navigation.navigate('SentNote')}
      loading={loading}
      error={error}
      noItemsMessage="Tap on the 'Write' tab in the bottom menu to send your first note!"
    />
  )
}

export default SentNotesGrid
