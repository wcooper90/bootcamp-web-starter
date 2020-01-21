import styled from 'styled-components'


export const BigText = styled.h1`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 150px;
  font-color: ${({ theme }) => theme.fonts.header.accent};
  justify-content: center;
`
