import React from 'react'
import { EntryBox, Date, Text } from './styles'

// eslint-disable-next-line react/prop-types
const NewEntry = ({ text, date }) => (
  <div>
    <EntryBox>
      <Text>{`${text}`}</Text>
      <Date>{date}</Date>
    </EntryBox>
  </div>
)

export default NewEntry
