import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_ENTRIES } from './graphql'
import Entry from './Entry'
import { MyEntriesContainer, MyEntriesTitle } from './styles'

const DisplayEntries = () => {
  const { loading, error, data } = useQuery(GET_ENTRIES)

  if (loading) return 'Loading'
  if (error) return 'Error'


  return (
    <div>
      <MyEntriesContainer>
        <MyEntriesTitle>Gratitude Journal</MyEntriesTitle>
        {data.viewer.journalEntries.map(elem => (
          <Entry key={elem.id} text={elem.text} date={elem.date} />
        ))}
      </MyEntriesContainer>

    </div>
  )
}

export default DisplayEntries
