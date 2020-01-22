import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.lightLilac};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoginError = styled.p`
  font-family: monospace;
  color: red;
`
