import React, { useState } from 'react'
import ReactTextTransition, { presets } from 'react-text-transition'
// import { Container, Row, Col } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import { BigText } from '../../UI/bigtext'
// home page will have a gratitude journal and a 'get a laugh' section (preferably side-by-side?)
// it might also have a positive news section

import { useQuery } from '@apollo/react-hooks'
// import the add entry and get a laugh components
// import the get all entries query from graphql


const Home = () => {
    // use the state hook to keep track of the current text the user is typing
    const [entry, setEntry] = useState('')
    

    // use query to display the previous entries
    const { loading, error, data } = useQuery(//query name)

    if (loading) return 'Loading'
    if (error) return 'Error'

    return (
        <div>
        
            <input type="text" placeholder="Today I'm thankful for..." value={entry} onChange={e => setEntry(e.target.value)} />
          <BigText>
            <ReactTextTransition
              text="Welcome "
              spring={presets.molasses}
              className="big"
              delay={800}
              inline
            />
          </BigText>
            {/* // include the add entry component here
            // map over all the entries data 

            // include the get laugh component here */}

        </div> 
    )


}

export default Home

