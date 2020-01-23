// allows the user to search for friends

import React, { useState } from 'react'


const SearchFriends = () => {
  // use the state hook to keep track of the current person the user is typing
  const [searchFriend, setSearchFriend] = useState('')

  return (
    <div>

      <input type="text" placeholder="Search for a friend!" value={searchFriend} onChange={e => setFriend(e.target.value)} />


    </div>
  )
}


export default SearchFriends
