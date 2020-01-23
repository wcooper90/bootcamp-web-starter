import styled from 'styled-components'

export const JournalEntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightLilac};
  border-radius: 7px;
  padding: 15px;
  margin: 10px;
  width: 100%;
  cursor: pointer;
`

export const JournalEntryHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 25px;
  align-items: baseline;
`

export const DateText = styled.h1`
  font-family: ${({ theme }) => theme.fonts.family};
  font-size: 25px;
  color: ${({ theme }) => theme.colors.offBlack};
`

export const EntryText = styled.p`
  font-family: ${({ theme }) => theme.fonts.family};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.offBlack};
`
