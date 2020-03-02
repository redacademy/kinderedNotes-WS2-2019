import client, {
  INBOX,
  OUTBOX,
  SIGN_UP,
  LOG_IN,
  CREATE_NOTE,
} from './apollo'
import AuthContext, {AuthContextProvider} from './auth'
import TagsContext, {TagsContextProvider} from './tags'

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
}
