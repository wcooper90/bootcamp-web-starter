import React from 'react'
import MyFriends from './components/MyFriends'
import { FriendsContainer } from './styles'
import AddFriend from './components/AddFriend'

const Friends = () => (
  <FriendsContainer>
    <MyFriends />
    <AddFriend />
  </FriendsContainer>
)

export default Friends
