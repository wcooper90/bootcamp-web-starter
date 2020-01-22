import React from 'react'
import ReactTextTransition, { presets } from 'react-text-transition'
import { BigText } from '../../UI/bigtext'
import { Container } from './styles'
<<<<<<< HEAD
import { BigText } from '../../UI/bigtext.js'
import ReactTextTransition, { presets } from "react-text-transition";
import {withRouter} from 'react-router';
=======
>>>>>>> fbaf13e... edited button style, added login form, started register form


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
