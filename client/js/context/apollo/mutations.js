import {gql} from 'apollo-boost'

const SIGN_UP = gql`
  mutation signUp(
    $username: String!
    $password: String!
    $city: String!
    $country: String!
    $avatar: Int!
    $interests: [String!]!
  ) {
    signup(
      username: $username
      password: $password
      city: $city
      country: $country
      avatar: $avatar
      interests: $interests
    ) {
      user {
        id
        avatar
        country
        city
        interests {
          title
        }
        favoriteNotes {
          id
          message
          color
          style
          font
        }
        # username
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
        avatar
        country
        city
        interests {
          title
        }
        favoriteNotes {
          id
          message
          color
          style
          font
        }
        # username
        # favoriteNotes
      }
      token
    }
  }
`

const UPDATE_USER = gql`
  mutation updateUser(
    $avatar: Int!
    $country: String!
    $city: String!
    $interests: [String!]!
  ) {
    updateUser(
      avatar: $avatar
      country: $country
      city: $city
      interests: $interests
    ) {
      id
      avatar
      country
      city
      interests {
        title
      }
      favoriteNotes {
        id
        message
        color
        style
        font
      }
    }
  }
`

const CREATE_NOTE = gql`
  mutation createNote(
    $message: String!
    $tags: [String!]!
    $font: String!
    $color: String!
    $style: String!
  ) {
    createNote(
      message: $message
      tags: $tags
      font: $font
      color: $color
      style: $style
    ) {
      id
    }
  }
`

const VIEW_NOTE = gql`
  mutation viewNote($id: String!) {
    viewNote(id: $id) {
      id
    }
  }
`

const CREATE_NOTE_RESPONSE = gql`
  mutation createNoteResponse($id: String!, $message: String!) {
    createNoteResponse(id: $id, message: $message) {
      id
    }
  }
`

const FAVORITE_NOTE = gql`
  mutation favoriteNote($id: String!) {
    favoriteNote(id: $id) {
      id
    }
  }
`

export {
  SIGN_UP,
  LOG_IN,
  UPDATE_USER,
  VIEW_NOTE,
  CREATE_NOTE,
  CREATE_NOTE_RESPONSE,
  FAVORITE_NOTE,
}
