import client, {
  INBOX,
  OUTBOX,
  GET_CITY_COORDS,
  GET_ACTIVE_USER,
  VALIDATE_CITY,
  SIGN_UP,
  LOG_IN,
  UPDATE_USER,
  CREATE_NOTE,
  VIEW_NOTE,
  CREATE_NOTE_RESPONSE,
  FAVORITE_NOTE,
  UNFAVORITE_NOTE,
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
  GET_CITY_COORDS,
  GET_ACTIVE_USER,
  VALIDATE_CITY,
  SIGN_UP,
  LOG_IN,
  UPDATE_USER,
  CREATE_NOTE,
  VIEW_NOTE,
  CREATE_NOTE_RESPONSE,
  FAVORITE_NOTE,
  UNFAVORITE_NOTE,
  AuthContext,
  AuthContextProvider,
  TagsContext,
  TagsContextProvider,
  ActiveNoteContext,
  ActiveNoteContextProvider,
}
