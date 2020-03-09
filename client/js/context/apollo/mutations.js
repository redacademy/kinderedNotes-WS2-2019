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
        # username
        # favoriteNotes
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

export {SIGN_UP, LOG_IN, UPDATE_USER, CREATE_NOTE}
