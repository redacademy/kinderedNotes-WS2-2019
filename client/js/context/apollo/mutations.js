import {gql} from 'apollo-boost'

const SIGN_UP = gql`
  mutation signup($username: String!, $password: String!) {
    signup(username: $username, password: $password) {
      user {
        id
        # username
        # favoriteNotes
        # interests
      }
      token
    }
  }
`

const LOG_IN = gql`
  mutation signup($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        id
        # username
        # favoriteNotes
        # interests
      }
      token
    }
  }
`

export {SIGN_UP, LOG_IN}
