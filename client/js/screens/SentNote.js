import React from 'react'
import {SentNote} from '../components'

const SentNoteScreen = ({navigation}) => (
  <SentNote onPress={() => navigation.navigate('RecipientMap')} />
)

export default SentNoteScreen
