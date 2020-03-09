import {gql} from 'apollo-boost'

const SIGN_UP = gql`
  mutation signUp(
    $username: String!
    $password: String!
    $city: String!
    $country: String!
    $avatar: Int!
  ) {
    signup(
      username: $username
      password: $password
      city: $city
      country: $country
      avatar: $avatar
    ) {
      user {
        id
        avatar
        country
        city
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
        avatar
        country
        city
        # username
        # favoriteNotes
        # interests
      }
      token
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

export {SIGN_UP, LOG_IN, CREATE_NOTE}
