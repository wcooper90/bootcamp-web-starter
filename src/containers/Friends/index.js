import React from 'react'
import { Container } from './styles'
import { BigText } from '../../UI/bigtext.js'
import ParticlesBg from "particles-bg";
import ReactTextTransition, { presets } from "react-text-transition";
import {withRouter} from 'react-router';



const Friends = () => {
  console.log('RANDOM MESSAGE')

  return (
    <div>
      <BigText>
        <ReactTextTransition
                text="Welcome "
                spring={presets.molasses}
                className="big"
                delay={800}
                inline
              />
      </BigText>
      yeaint got a damn friend yet
    </div>
  )
}

export default withRouter(Friends)
