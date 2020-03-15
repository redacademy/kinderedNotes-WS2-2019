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

const VALIDATE_CITY = gql`
  query validateCity($city: String!) {
    validateCity(city: $city)
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

export {INBOX, OUTBOX, VALIDATE_CITY, GET_CITY_COORDS}
