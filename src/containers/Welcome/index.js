import React from 'react'
import { BigText, BigText2 } from '../../UI/bigtext.js'
import { Button } from '../../UI/button.js'
import ReactTextTransition, { presets } from "react-text-transition";
import { NavLink as link } from 'react-router-dom'


const Welcome = () => {


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
    <BigText2>
    <ReactTextTransition
            text="to your happy place"
            spring={presets.molasses}
            className="small"
            delay={1700}
            inline
          />
          <Button>
            <nav>
              Take me --><span></span><span></span><span></span><span></span>
            </nav>
          </Button>
    </BigText2>
    </div>
  )
}

export default Welcome
