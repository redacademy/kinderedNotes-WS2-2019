import {gql} from 'apollo-boost'

const INBOX = gql`
  {
    inbox {
      id
      message
    }
  }
`

export {INBOX}
