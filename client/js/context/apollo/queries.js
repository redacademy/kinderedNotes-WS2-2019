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
      viewers {
        city
        avatar
      }
      responses {
        id
        message
        author {
          username
          avatar
        }
      }
    }
  }
`

const GET_ACTIVE_USER = gql`
  query getActiveUser {
    me {
      id
      username
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

const GET_CITY_COORDS = gql`
  query getCityCoords($city: String!) {
    getCityCoords(city: $city) {
      lat
      lng
    }
  }
`

const VALIDATE_CITY = gql`
  query validateCity($city: String!) {
    validateCity(city: $city)
  }
`

export {
  INBOX,
  OUTBOX,
  GET_ACTIVE_USER,
  GET_CITY_COORDS,
  VALIDATE_CITY,
}
