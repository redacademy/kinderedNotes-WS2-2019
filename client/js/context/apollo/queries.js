import {gql} from 'apollo-boost'

const FEED = gql`
  {
    feed {
      id
    }
  }
`

export {FEED}
