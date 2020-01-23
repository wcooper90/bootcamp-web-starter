import gql from 'graphql-tag'

// write a query to display all entries
const GET_ENTRIES = gql`
    query {
        viewer {
            journalEntries {
                id
                text
                date
            }
        }
    }
`
export default GET_ENTRIES
