import gql from 'graphql-tag'

// write a query to display all entries
export const GET_ENTRIES = gql`
    query viewer {
        viewer {
            journalEntries {
                id
                text
                date
            }
        }
    }
`
