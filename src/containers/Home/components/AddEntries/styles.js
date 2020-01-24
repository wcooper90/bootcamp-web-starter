import styled from 'styled-components'

export const EntryTextArea = styled.textarea`
  border: 3px solid ${({ theme }) => theme.colors.purple};
  border-radius: 7px;
  background-color: white;
  padding: 10px;
  font-family: ${({ theme }) => theme.fonts.family};
  transition: all 0.2s ease-out;
  outline: none;
  margin: 10px;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightLilac};
  }

  &:focus {
    background-color: white;
    border-color: ${({ theme }) => theme.colors.orange};
  }
`

export const JournalAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  margin: 20px;
  background-color: white;
  border-radius: 7px;
  box-shadow: 0 2px 7px gray;
  padding: 20px;
`

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.family};
  font-weight: bold;
`
