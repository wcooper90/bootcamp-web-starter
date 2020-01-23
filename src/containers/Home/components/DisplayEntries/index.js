import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import GET_ENTRIES from './graphql'
import Entry from './Entry'
// import the create entry mutation from './graphql'

const DisplayEntries = () => {
  const { loading, error, data } = useQuery(GET_ENTRIES)

  if (loading) return 'Loading'
  if (error) return 'Error'

  return (

    <div>

      {data.viewer.journalEntries.map(
        ({ id, text, date }) => <Entry key={id}>{`${text} ${date}`}</Entry>,
      )}

    </div>

  )
}

export default DisplayEntries
