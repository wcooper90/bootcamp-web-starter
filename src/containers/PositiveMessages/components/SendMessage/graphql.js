import gql from 'graphql-tag'

export const SEARCH_USERS = gql`
  query ($searchText: String!) {
    searchUsers (searchText: $searchText) {
      id
      firstName
      lastName
    }
  }
`

export const SEND_MESSAGE = gql`
    mutation sendMessage($input: String!) {
        sendMessage(input: $input) {
            id 
            content
            dateSent
            receiver
            sender
        }
    }
`


export default { SEARCH_USERS }
