/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { LoginContainer, LoginError } from './styles'
import { Input } from '../../UI/Input'
import Button from '../../UI/Button'
import { LOGIN } from './graphql'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [login, { error }] = useMutation(LOGIN, {
    variables: {
      email,
      password,
    },
    onCompleted: ({ login: { token } }) => {
      localStorage.setItem('token', token)
      window.location.replace('/home')
    },
    onError: err => console.log(err),
  })

  if (error) {
    console.log(error)
  }

  return (
    <LoginContainer>
      <Input
        placeholder="Email"
        value={email}
        onChange={e => {
          setEmail(e.target.value.trim())
        }}
      />
      <Input
        placeholder="Password"
        value={password}
        onChange={e => {
          setPassword(e.target.value)
        }}
      />
      <Button
        text="Login"
        onClick={login}
      />
      {error && (
      <LoginError>
        {error.graphQLErrors !== null && error.graphQLErrors.length > 0 ? error.graphQLErrors[0].message : error.message}
      </LoginError>
      )}
    </LoginContainer>
  )
}

export default Login
