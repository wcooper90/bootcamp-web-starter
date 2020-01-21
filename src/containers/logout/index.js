import React from 'react'
import { Container } from './styles'
import ParticlesBg from "particles-bg";
import ReactTextTransition, { presets } from "react-text-transition";
import {withRouter} from 'react-router';



const Friends = () => {

  return (
    <div>
      <ReactTextTransition
              text="bruh "
              spring={presets.molasses}
              className="big"
              delay={800}
              inline
            />
      you just logged out. you fool.
    </div>
  )
}

export default withRouter(Friends)
