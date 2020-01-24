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


export default { GET_MESSAGES, SEND_MESSAGE }
