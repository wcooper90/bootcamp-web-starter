// displays the list of messages the user has recieved from their friends

import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_MESSAGES, SEND_MESSAGE } from './graphql'
import Message from './Message'

const ReadMessages = () => {
  const { loading: getMessagesLoading, error: getMessagesError, data: getMessagesData } = useQuery(GET_MESSAGES)

  const [message, setMessage] = useState('')
  const [sendMessage, { error, loading }] = useMutation(SEND_MESSAGE, {
    variables: { input: message },
    refetchQueries: () => [{ query: GET_MESSAGES }],
  })


  if (getMessagesLoading) return 'Loading...'
  if (getMessagesError) return `Error: ${getMessagesError}`

  return (
    <div>

      <input value={message} onChange={e => setMessage(e.target.value)} />
      {loading ? 'Loading...' : <button type="button" onClick={sendMessage}>Send</button>}
      {error && 'Error'}

      {getMessagesData.viewer.messagesReceived.map(el => (
        <p key={el.id}>{`${el.sender.firstName} ${el.sender.lastName}: ${el.content}`}</p>
      ))}

    </div>
  )
}

export default ReadMessages
