import gql from 'graphql-tag'

// write a mutation to create a new entry

// sample mutation:
// const ADD_ENTRY = gql`
//     mutation CreateEntry($input: CreateEntryInput) {
//         createEntry(input: $input) {
//             id
//             text
//             date
//         }
//     }
// `

// export default ADD_ENTRY

export const ADD_ENTRY = gql`
    mutation AddJournalEntry($txtInput: String!) {
        addJournalEntry(text: $txtInput) {
            id
            userId
            date
            text
        }
    }
`

export const UPDATE_ENTRY = gql`
    mutation editJournalEntry($entryId: ID, $text: String!) {
        editJournalEntry(entryId: $entryId, text: $text) {
            id
            date
            text
        }
    }
`

export const GET_CURRENT_ENTRY = gql`
    query Viewer {
        viewer {
            currentJournalEntry {
                id
                userId
                text
                date
            }
        }
    }
`

export const GET_ENTRIES = gql`
    query Viewer {
        viewer {
            journalEntries {
                id
                userId
                text
                date
            }
        }
    }

`
