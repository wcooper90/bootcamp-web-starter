/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useReducer } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { RegisterContainer, RegisterError } from './styles'
import { Input } from '../../UI/Input'
import Button from '../../UI/Button'
import { REGISTER } from './graphql'

const Register = () => {
  const registerReducer = (prevState, payload) => ({ ...prevState, ...payload })

  const [registerForm, setRegisterForm] = useReducer(registerReducer, {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dob: '',
  })

  const [register, { error }] = useMutation(REGISTER, {
    variables: {
      input: registerForm,
    },
    onCompleted: ({ register: { token } }) => {
      localStorage.setItem('token', token)
      window.location.replace('/home')
    },
    onError: err => console.log(err),
  })

  if (error) {
    console.log(error)
  }

  return (
    <RegisterContainer>
      <Input
        placeholder="Email"
        value={registerForm.email}
        onChange={e => {
          setRegisterForm({ email: e.target.value.trim() })
        }}
      />
      <Input
        placeholder="Password"
        value={registerForm.password}
        onChange={e => {
          setRegisterForm({ password: e.target.value })
        }}
      />
      <Button
        text="Register"
        onClick={register}
      />
      {error && (
      <RegisterError>
        {error.graphQLErrors !== null && error.graphQLErrors.length > 0 ? error.graphQLErrors[0].message : error.message}
      </RegisterError>
      )}
    </RegisterContainer>
  )
}

export default Register
