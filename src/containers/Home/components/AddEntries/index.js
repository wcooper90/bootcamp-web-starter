/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'
import {
  GET_ENTRIES, GET_CURRENT_ENTRY, UPDATE_ENTRY,
} from './graphql'
import { EntryTextArea, JournalAreaContainer, Title } from './styles'
import Button from '../../../../UI/Button'
import JournalEntry from './JournalEntry'

const AddEntries = () => {
  const [entry, setEntry] = useState('')
  const [currentEntryId, setCurrentEntryId] = useState(null)

  const { loading: getCurrentEntryLoading, error: getCurrentEntryError } = useQuery(GET_CURRENT_ENTRY, {
    onCompleted: data => {
      console.log(data)
      if (data.viewer.currentJournalEntry !== null) {
        setEntry(data.viewer.currentJournalEntry.text)
        setCurrentEntryId(data.viewer.currentJournalEntry.id)
      }
    },
    onError: err => console.log(err),
  })

  const { loading: getEntryLoading, error: getEntryError, data: entryData } = useQuery(GET_ENTRIES, {
    onError: err => {
      console.log(err)
    },
    onCompleted: data => {
      console.log(data)
    },
  })

  console.log('current id', currentEntryId)
  console.log('entry', entry)


  // call the mutation from graphql and use mutation to specify the input
  const [updateEntry] = useMutation(UPDATE_ENTRY, {
    variables: {
      entryId: currentEntryId,
      text: entry,
    },
    onCompleted: dat => {
      setCurrentEntryId(dat.editJournalEntry.id)
    },
    /* refetchQueries: () => [{ query: GET_ENTRIES }], */
  })

  if (getEntryError || getCurrentEntryError) return `Error: ${getEntryError}`
  if (getEntryLoading || getCurrentEntryLoading) return 'Loading...'

  // whenever button is clicked the input that was written above is added to the entries
  return (
    <JournalAreaContainer>
      <Title>Add/Edit Today's Entry</Title>
      <EntryTextArea
        rows="6"
        cols="50"
        value={entry}
        placeholder="Type your journal entry and then click save."
        onChange={
        e => {
          setEntry(e.target.value)
        }
      }
      />
      <Button text="Save" onClick={updateEntry} />

      <div style={{ margin: '30px' }} />
      <Title>Previous Entries</Title>
      {entryData.viewer.journalEntries.sort((a, b) => b.date - a.date).map(el => {
        console.log(el)
        return (
          <JournalEntry key={el.id} text={el.text} unixDate={el.date} />
        )
      })}
    </JournalAreaContainer>
  )
}

export default AddEntries

// {loading ? 'Loading...' : <button type="button" onClick={addEntry}>Add Entry</button>}
// {error && 'Error'}
