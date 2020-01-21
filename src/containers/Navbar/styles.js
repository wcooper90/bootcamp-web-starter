import styled from 'styled-components'
import { NavLink as link } from 'react-router-dom'

export const Container = styled.div`
  height: 100px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.lilac};
`

export const NavLink = styled(link).attrs(({ theme }) => ({
  activeStyle: {
    color: theme.colors.fonts.navlink,
  },
  exact: true,
}))`
  &active: { color: ${({ theme }) => theme.colors.orange} }
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: ${({ theme }) => theme.fonts.header.weight};
  font-size: 22px;
  color: ${({ theme }) => theme.colors.fonts.header};
  margin: 0 40px;
  text-decoration: none;
`
