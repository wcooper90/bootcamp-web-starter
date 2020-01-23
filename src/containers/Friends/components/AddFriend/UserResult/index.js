import React from 'react'
import { UserContainer, Name } from './styles'

const UserResult = ({ firstName, lastName }) => (
  <UserContainer>
    <Name>{`${firstName} ${lastName}`}</Name>
  </UserContainer>
)

export default UserResult
