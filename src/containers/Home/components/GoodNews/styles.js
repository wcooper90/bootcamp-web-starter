import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 550px;
  margin: 20px;
  background-color: white;
  border-radius: 7px;
  box-shadow: 0 2px 7px gray;
  padding: 20px;
  text-align: center;

  #title {
    font-family: monospace;
    font-weight: bold;
  }
`
export const NewsImg = styled.img`
  margin: 20px;
  width: 300px;
  height: auto;
`
