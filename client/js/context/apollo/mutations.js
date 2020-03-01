import {gql} from 'apollo-boost'

const SIGN_UP = gql`
  mutation signUp($username: String!, $password: String!) {
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
  mutation logIn($username: String!, $password: String!) {
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

const CREATE_NOTE = gql`
  mutation createNote($message: String!, $tags: [String!]!) {
    createNote(message: $message, tags: $tags) {
      id
    }
  }
`

export {SIGN_UP, LOG_IN, CREATE_NOTE}
