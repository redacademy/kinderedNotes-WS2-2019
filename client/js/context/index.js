import client, {
  INBOX,
  OUTBOX,
  VALIDATE_CITY,
  GET_CITY_COORDS,
  SIGN_UP,
  LOG_IN,
  UPDATE_USER,
  CREATE_NOTE,
  VIEW_NOTE,
  CREATE_NOTE_RESPONSE,
} from './apollo'
import AuthContext, {AuthContextProvider} from './auth'
import TagsContext, {TagsContextProvider} from './tags'
import ActiveNoteContext, {
  ActiveNoteContextProvider,
} from './active-note'

export {
  client,
  INBOX,
  OUTBOX,
  VALIDATE_CITY,
  GET_CITY_COORDS,
  SIGN_UP,
  LOG_IN,
  UPDATE_USER,
  CREATE_NOTE,
  VIEW_NOTE,
  CREATE_NOTE_RESPONSE,
  AuthContext,
  AuthContextProvider,
  TagsContext,
  TagsContextProvider,
  ActiveNoteContext,
  ActiveNoteContextProvider,
}
