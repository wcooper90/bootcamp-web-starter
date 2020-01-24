// use api to display jokes
import React from 'react'

import ReactTextTransition, { presets } from 'react-text-transition'

import { BigText2, BigText3 } from '../../../../UI/bigtext'
import { Container } from './styles'

import { Show } from '../../../PositiveMessages/styles'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from '../../../../UI/Button'


const GetNews = () => {

  var news = [];
  var newsIterator = 0;

  fetch('https://happy-news-nmnepmqeqo.now.sh')
    .then(resp => resp.json())
    .then(data => {
      news = data;
    })

  function getGoodNews() {

    document.getElementById('title').innerHTML = news[newsIterator].title
    newsIterator += 1;

    if (newsIterator === 14) {
      fetch('https://happy-news-nmnepmqeqo.now.sh')
        .then(resp => resp.json())
        .then(data => {
          news = data;
        })
      newsIterator = 0;
    }
  }


  return (
    <Container>
      <BigText2>
        <ReactTextTransition
          text="Good News"
          spring={presets.default}
          delay={1000}
        />
      </BigText2>
      <Show>
        <Button id="newsButton" text="Good News" onClick={() => getGoodNews()} />
      </Show>
      <BigText3>
        <Show>
          <span id="title" />
        </Show>
      </BigText3>
    </Container>
  )
}
export default GetNews
