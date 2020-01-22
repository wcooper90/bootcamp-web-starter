import React from 'react'
import { useMutation } from '@apollo/react-hooks'
// import the create entry mutation from './graphql'
// (?) import the use state variable

const AddEntries = () => {
  
  // call the mutation from graphql and use mutation to specify the input
  const [addEntry] = useMutation(// mutation name, variables, input)

  // whenever this button is clicked the input that was written above is added to the entries
  return (
    <div> 
        <button type="button" onClick={addEntry}>Add Entry</button>
    </div>
  
  )
}

export default AddEntries
