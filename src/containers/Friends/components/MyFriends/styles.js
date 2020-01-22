import styled from 'styled-components'

export const MyFriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  margin: 20px;
`

export const MyFriendsTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.family};
  font-weight: bold;
`
