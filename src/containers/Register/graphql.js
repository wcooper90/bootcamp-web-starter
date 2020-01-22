import gql from 'graphql-tag'

export const REGISTER = gql`
  mutation ($registerInput: RegisterInput!) {
    register (registerInput: $registerInput) {
      token
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`
