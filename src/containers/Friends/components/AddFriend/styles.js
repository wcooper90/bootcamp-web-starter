import styled from 'styled-components'

export const SearchFriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  margin: 20px;
`

export const AddFriendTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.family};
  font-weight: bold;
`
