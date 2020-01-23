import gql from 'graphql-tag'

// write a query to display all entries
export const GET_ENTRIES = gql`
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

// write a mutation to create a new entry
export const ADD_ENTRY = gql`
    mutation addJournalEntry($text: JournalEntry) {
        addJournalEntry(text: $text) {
            text
            date
        }
    }
`
