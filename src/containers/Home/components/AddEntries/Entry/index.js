import React from 'react'
import { EntryBox, Date, Text } from './styles'

const Entry = ({ text, date }) => (
  <div>
    <EntryBox>
      <Text>{`${text}`}</Text>
      <Date>{date}</Date>
    </EntryBox>
  </div>
)

export default Entry
