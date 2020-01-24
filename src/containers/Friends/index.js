import React from 'react'
import MyFriends from './components/MyFriends'
import { FriendsContainer } from './styles'
import AddFriend from './components/AddFriend'
import FriendRequests from './components/FriendRequests'

const Friends = () => {
  if (localStorage.getItem('token') === null) {
    window.location.replace('/login')
  }

  return (
    <FriendsContainer>
      <MyFriends />
      <AddFriend />
      <FriendRequests />
    </FriendsContainer>
  )
}

export default Friends
