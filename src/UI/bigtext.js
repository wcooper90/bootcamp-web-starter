import styled from 'styled-components'


export const BigText = styled.h1`
  font-family: ${({ theme }) => theme.fonts.family};
  font-weight: bold;
  font-size: 150px;
  color: ${({ theme }) => theme.fonts.header.accent};
  margin: auto;
`

export const BigText2 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.family};
  font-weight: bold;
  color: ${({ theme }) => theme.fonts.header.accent};
  margin: auto;
`

export const BigText3 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.family};
  font-weight: normal;
  font-size: 25px;
  color: ${({ theme }) => theme.fonts.header.accent};
  margin: auto;
`
