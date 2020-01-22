import React from 'react'
import ReactTextTransition, { presets } from 'react-text-transition'
import { Container } from './styles'
import { BigText } from '../../UI/bigtext.js'
import {withRouter} from 'react-router';


const PositiveMessages = () => (
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

export default PositiveMessages
