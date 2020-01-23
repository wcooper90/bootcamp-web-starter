import gql from 'graphql-tag'

// write query to get all journal entries

const GET_ENTRIES = gql`
    query {
        viewer {
            journalEntries {
                text
                date
            }
        }
    }

`

export default GET_ENTRIES
