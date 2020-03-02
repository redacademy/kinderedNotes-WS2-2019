import {gql} from 'apollo-boost'

const INBOX = gql`
  query inbox {
    inbox {
      id
      message
      color
      style
      font
    }
  }
`

const OUTBOX = gql`
  query outbox {
    outbox {
      id
      message
      color
      style
      font
    }
  }
`

export {INBOX, OUTBOX}
