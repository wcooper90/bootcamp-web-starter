import gql from 'graphql-tag'

export const GET_MESSAGES = gql`
    query Viewer{
        viewer {
            messagesReceived {
                id
                content
            sender {
                id
                firstName
                lastName
            }
            receiver {
                id
                firstName
                lastName
            }
        }
    }
}
`


export default { GET_MESSAGES }
