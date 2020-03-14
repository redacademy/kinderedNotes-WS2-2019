import client from './client'
import {
  INBOX,
  OUTBOX,
  VALIDATE_CITY,
  GET_CITY_COORDS,
} from './queries'
import {
  SIGN_UP,
  LOG_IN,
  UPDATE_USER,
  CREATE_NOTE,
  VIEW_NOTE,
  CREATE_NOTE_RESPONSE,
  FAVORITE_NOTE,
} from './mutations'

export default client
export {
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
  FAVORITE_NOTE,
}
