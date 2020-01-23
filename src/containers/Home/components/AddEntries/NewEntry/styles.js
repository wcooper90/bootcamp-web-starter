import styled from 'styled-components'

export const EntryBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const Text = styled.div`
  display: flex;
  background: lightgray;
  text-align: left;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.family};
  font-size: 15px; 
`

export const Date = styled.div`
    display: flex;
    font-family: ${({ theme }) => theme.fonts.family}};
    font-size: 10px;
`
