import React from 'react'
import { Container } from './styles'
import { BigText } from '../../UI/bigtext.js'
import ReactTextTransition, { presets } from "react-text-transition";
import {withRouter} from 'react-router';



const PositiveMessages = () => {

  return (
    <div>
      <BigText>
        <ReactTextTransition
                text="you "
                spring={presets.molasses}
                className="big"
                delay={800}
                inline
              />
        beautiful.
      </BigText>
    </div>
  )
}

export default withRouter(PositiveMessages)
