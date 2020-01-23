import styled from 'styled-components'

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  width: 300px;
  height: 70px;
  margin: 10px;
  border-radius: 7px;
  padding: 10px;
`

export const Name = styled.p`
  font-family: ${({ theme }) => theme.fonts.family};
  color: ${({ theme }) => theme.colors.offBlack};
  font-size: 20px;
  margin: 0;
  font-weight: bold;
`
