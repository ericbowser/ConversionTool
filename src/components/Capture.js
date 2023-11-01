import React, { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import Post from '../api/labelary'

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`

function Capture () {
  const [dataString, setDataString] = useState('')
  const [zplData, setZplData] = useState('')

  useEffect(() => {}, [dataString])

  useEffect(() => {
    console.log(zplData)
  }, [zplData])

  const handleSubmit = event => {
    event.preventDefault()
    const dataString = event.target[0].value
    if (dataString) {
      setDataString(dataString)
    }
  }

  const ZplData = () => {
/*
    const pasted = document.querySelector('textarea').select();
*/
    console.log(pasted)
/*
    const result = Post().then(res => {
      if (res) {
        // const encode = document.getElementById("zpl_Data")
        // encode.src = res;
        setZplData(res)
      ve
      }
    })
*/
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FlexContainer>
          <textarea
            id={'label'}
            rows={20}
            cols={50}
            style={{ margin: '20px' }}
          >
{/*
            <img src={zplData || ''} alt={'image'} />
*/}
          </textarea>
        </FlexContainer>
      </Form>
      <Button style={{ marginLeft: '17px' }} onClick={ZplData}>
        <span>Generate Zpl</span>
      </Button>
    </Container>
  )
}

export default Capture
