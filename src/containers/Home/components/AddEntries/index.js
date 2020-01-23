import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { GET_ENTRIES, ADD_ENTRY } from './graphql'
import NewEntry from './NewEntry'
import { EntryInput, EntryButton } from './styles'
// import the create entry mutation from './graphql'

const AddEntries = () => {
  const [entry, setEntry] = useState('')

  const [addEntry] = useMutation(ADD_ENTRY, {
    variables: { text: entry },
  })

  // const [addEntry] = useMutation(ADD_ENTRY, {
  //   update: (client, { data: { GET_ENTRIES } }) => {
  //     try {
  //       const data = client.readQuery({ query: addEntry })

  //       data.viewer.journalEntries = [...data.viewer.journalEntries, addEntry]

  //       client.writeQuery({ query: GET_ENTRIES, data })
  //     } catch (err) {
  //     // error
  //     }
  //   },
  // })


  return (

    <div>

      <EntryInput type="text" placeholder="Today I'm thankful for..." value={entry} onChange={e => setEntry(e.target.value)} />
      <EntryButton type="button" onClick={addEntry}>Add Entry</EntryButton>

    </div>

  )
}

export default AddEntries


// const { loading, error, data } = useQuery(GET_ENTRIES)

//   if (loading) return 'Loading'
//   if (error) return 'Error'

//   return (

//     <div>

//       {data.viewer.journalEntries.map(
//         ({ id, text, date }) => <Entry key={id}>{`${text} ${date}`}</Entry>,
//       )}

//     </div>

//   )
