// allows the user to search for friends
import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Input } from '../../../../UI/Input'
import { SearchFriendsContainer, AddFriendTitle } from './styles'
import { SEARCH_USERS } from './graphql'
import UserResult from './UserResult'

const AddFriend = () => {
  // use the state hook to keep track of the current person the user is typing
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const { loading, error } = useQuery(SEARCH_USERS, {
    variables: {
      searchText,
    },
    onCompleted: data => {
      setSearchResults(data.searchUsers)
    },
  })

  if (error) return 'Error!'

  return (
    <SearchFriendsContainer>
      <AddFriendTitle>Add Friend</AddFriendTitle>
      <Input
        value={searchText}
        placeholder="Search by name to add"
        onChange={e => {
          setSearchText(e.target.value)
        }}
      />
      {
        searchResults.map(el => (
          <UserResult firstName={el.firstName} lastName={el.lastName} />
        ))
      }
    </SearchFriendsContainer>
  )
}


export default AddFriend
