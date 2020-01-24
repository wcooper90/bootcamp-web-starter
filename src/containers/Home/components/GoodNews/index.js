// use api to display jokes
import React, { useState, useEffect } from 'react'

import ReactTextTransition, { presets } from 'react-text-transition'

import { BigText2, BigText3 } from '../../../../UI/bigtext'
import { Container } from './styles'

import { Show } from '../../../PositiveMessages/styles'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from '../../../../UI/Button'


const GetNews = () => {
  const [news, setNews] = useState([])
  const [newsIterator, setNewsIterator] = useState(0)

  const [newsReady, setNewsReady] = useState(false)
  const [hasClicked, setHasClicked] = useState(false)

  useEffect(() => {
    fetch('https://happy-news-nmnepmqeqo.now.sh')
      .then(resp => resp.json())
      .then(data => {
        setNews(data)
        if (hasClicked) {
          document.getElementById('title').innerHTML = news[newsIterator].title
          setNewsIterator(newsIterator + 1)
        }
        setNewsReady(true)
      })
  }, [])


  const getGoodNews = () => {
    setHasClicked(true)
    if (newsReady) {
      document.getElementById('title').innerHTML = news[newsIterator].title
      setNewsIterator(newsIterator + 1)

      if (newsIterator === 14) {
        fetch('https://happy-news-nmnepmqeqo.now.sh')
          .then(resp => resp.json())
          .then(data => {
            setNews(data)
          })
        setNewsIterator(0)
      }
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
        <Button id="newsButton" text="Get some news" onClick={getGoodNews} />
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
