import {gql} from 'apollo-boost'

const INBOX = gql`
  {
    inbox {
      id
      message
    }
  }
`

const OUTBOX = gql`
  {
    outbox {
      id
      message
    }
  }
`

export {INBOX, OUTBOX}
