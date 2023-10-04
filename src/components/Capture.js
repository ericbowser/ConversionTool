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
    const result = Post().then(res => {
      if (res) {
        // const encode = document.getElementById("zpl_Data")
        // encode.src = res;
        setZplData(res)
      }
    })
    // const text = new Text();
    // const label = new Label();
    // const grid = new Grid();
    // label.content.push(text);
    // grid.rows.push(new Size(1, SizeType.Relative));
    // grid.rows.push(new Size(1, SizeType.Relative));
    // grid.columns.push(new Size(1, SizeType.Relative));
    // grid.columns.push(new Size(1, SizeType.Relative));
    // grid.padding = new Spacing(10);
    // text.fontFamily = new FontFamily(FontFamilyName.A);
    // text.verticalAlignment = new Alignment(AlignmentValue.Start);
    // text.horizontalAlignment = new Alignment(AlignmentValue.Center);
    // label.content.push(grid);
    // text.text = 'Hello World!';
    // const zpl = label.generateZPL();
    // console.log(zpl);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FlexContainer>
          <textarea
            rows={20}
            cols={50}
            style={{ margin: '20px' }}
            value={zplData || ''}
          >
            <img src={zplData || ''} alt={'image'} />
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
