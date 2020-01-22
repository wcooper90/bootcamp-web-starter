import React from 'react'
import ReactTextTransition, { presets } from 'react-text-transition'
import { Container } from './styles'
import { BigText } from '../../UI/bigtext.js'
import {withRouter} from 'react-router';


const PositiveMessages = () => {

  function getQuote() {
    fetch('https://api.kanye.rest')
        .then((resp) => resp.json())
        .then(function (data) {
            document.getElementById("quote").innerHTML = data.quote;
        });
  }

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
      <button onClick={() => getQuote()}>🔄 Refresh</button>
      <span id="quote"></span>
    </div>
  )
}

export default PositiveMessages
