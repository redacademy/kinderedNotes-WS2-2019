import {gql} from 'apollo-boost'

const INBOX = gql`
  query inbox {
    inbox {
      id
      message
    }
  }
`

const OUTBOX = gql`
  query outbox {
    outbox {
      id
      message
    }
  }
`

export {INBOX, OUTBOX}
