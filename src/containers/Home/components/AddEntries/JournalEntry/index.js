/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-regular-svg-icons'
import {
  JournalEntryContainer, DateText, EntryText, JournalEntryHeader,
} from './styles'

const JournalEntry = ({ text, unixDate }) => {
  const [collapsed, setCollapsed] = useState(true)
  const parsed = parseInt(unixDate, 10)
  const d = new Date(parsed)

  const day = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`

  if (collapsed) {
    return (
      <JournalEntryContainer onClick={() => {
        setCollapsed(false)
      }}
      >
        <JournalEntryHeader>
          <DateText>{day}</DateText>
          <FontAwesomeIcon icon={faPlusSquare} />
        </JournalEntryHeader>
      </JournalEntryContainer>
    )
  }

  return (
    <JournalEntryContainer onClick={() => {
      setCollapsed(true)
    }}
    >
      <JournalEntryHeader>
        <DateText>{day}</DateText>
        <FontAwesomeIcon icon={faMinusSquare} />
      </JournalEntryHeader>
      <EntryText>{text}</EntryText>
    </JournalEntryContainer>
  )
}

export default JournalEntry
