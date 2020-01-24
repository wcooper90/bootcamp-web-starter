// displays the list of messages the user has recieved from their friends

import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_MESSAGES } from './graphql'

const ReadMessages = () => {
  const { loading: getMessagesLoading, error: getMessagesError, data: getMessagesData } = useQuery(GET_MESSAGES)


  if (getMessagesLoading) return 'Loading...'
  if (getMessagesError) return `Error: ${getMessagesError}`

  return (
    <div>
      {getMessagesData.viewer.messagesReceived.map(el => (
        <p key={el.id}>{`${el.sender.firstName} ${el.sender.lastName}: ${el.content}`}</p>
      ))}

      {/* {getMessagesData.user.map(el => (
        <p key={el.id}>{`${el.firstName} ${el.lastName}`}</p>
      ))} */}

    </div>
  )
}

export default ReadMessages
