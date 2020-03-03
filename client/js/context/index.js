import client, {
  INBOX,
  OUTBOX,
  SIGN_UP,
  LOG_IN,
  CREATE_NOTE,
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
  SIGN_UP,
  LOG_IN,
  CREATE_NOTE,
  AuthContext,
  AuthContextProvider,
  TagsContext,
  TagsContextProvider,
  ActiveNoteContext,
  ActiveNoteContextProvider,
}
