import React from 'react'
import {useQuery, useMutation} from '@apollo/react-hooks'
import {INBOX, VIEW_NOTE} from '../../context/apollo'
import {NotesGrid} from '../index'
import MessageNote from '../../../assets/icons/Message_Note'

const ReceivedNotesGrid = ({navigation}) => {
  const {loading, error, data} = useQuery(INBOX, {
    fetchPolicy: 'network-only',
  })
  const [viewNote] = useMutation(VIEW_NOTE)

  // FIXME: sort in query
  return (
    <NotesGrid
      data={data && data.inbox.reverse()}
      bg="BLUE"
      onNotePress={id => {
        navigation.navigate('ReceivedNote')
        viewNote({variables: {id}})
      }}
      loading={loading}
      error={error}
      Icon={MessageNote}
      noItemsMessage="Add some more interests to your profile and start receiving kind notes!"
    />
  )
}

export default ReceivedNotesGrid
