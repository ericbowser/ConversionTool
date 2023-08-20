import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import OutlineButton from 'react-bootstrap/Button'
import styled from 'styled-components'
import Alert from 'react-bootstrap/Alert'
import Dropdown from 'react-bootstrap/Dropdown'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 1em;
`

function MetricToStandardPage () {
  const [fromValue, setFromValue] = useState(null)
  const [toValue, setToValue] = useState(null)
  const [calcValue, setCalcValue] = useState(null)

  useEffect(() => {}, [fromValue])

  useEffect(() => {}, [toValue])

  useEffect(() => {}, [calcValue])

  function decideCalculation (inputValue) {
    let value
    if (fromValue === 'millimeters' && toValue === 'centimeters') {
      value = inputValue / 10
      return value
    } else if (fromValue === 'centimeters' && toValue === 'millimeters') {
      value = inputValue * 10
      return value
    } else if (fromValue === 'millimeters' && toValue === 'inches') {
      value = inputValue * 25.4
      return value
    } else if (fromValue === 'inches' && toValue === 'millimeters') {
      value = inputValue / 25.4
      return value
    } else if (fromValue === 'millimeters' && toValue === 'feet') {
      value = inputValue * 304.8
      return value
    } else if (fromValue === 'feet' && toValue === 'millimeters') {
      value = inputValue / 304.8
      return value
    }
  }

  function calculate (event) {
    event.preventDefault()
    const inputValue = event.target[0].value

    if (fromValue && toValue) {
      const calcValue = decideCalculation(inputValue)
      setCalcValue(calcValue)
    }
  }

  function onSelectFrom (fromValue) {
    setFromValue(fromValue)
  }
  function onSelectTo (toValue) {
    setToValue(toValue)
  }

  return (
    <React.Fragment>
      <Container style={{ padding: '25px' }}>
        <div>
          <a href='/'>Home</a>
        </div>
        <h3>Conversion Units</h3>
        <div
          style={{
            backgroundColor: '#cfe2ff',
            padding: '10px',
            borderRadius: '16px'
          }}
        ></div>
        <Grid style={{ padding: '10px' }}>
          <Dropdown onSelect={onSelectFrom} key={`From-${fromValue}`}>
            <div>From Units</div>
            <Dropdown.Toggle variant='outline-primary' id='dropdown-basic'>
              {fromValue ?? 'From'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                eventKey={'millimeters'}
                active={fromValue === 'millimeters'}
              >
                Millimeters
              </Dropdown.Item>
              <Dropdown.Item
                eventKey={'centimeters'}
                active={fromValue === 'centimeters'}
              >
                Centimeters
              </Dropdown.Item>
              <Dropdown.Item
                eventKey={'inches'}
                active={fromValue === 'inches'}
              >
                Inches
              </Dropdown.Item>
              <Dropdown.Item eventKey={'feet'} active={fromValue === 'feet'}>
                Feet
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown onSelect={onSelectTo} key={`To-${toValue}`}>
            <div>To Units</div>
            <Dropdown.Toggle variant='outline-primary' id='dropdown-basic'>
              {toValue ?? 'To'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                eventKey={'millimeters'}
                active={toValue === 'millimeters'}
              >
                Millimeters
              </Dropdown.Item>
              <Dropdown.Item
                eventKey={'centimeters'}
                active={toValue === 'centimeters'}
              >
                Centimeters
              </Dropdown.Item>
              <Dropdown.Item eventKey={'inches'} active={toValue === 'inches'}>
                Inches
              </Dropdown.Item>
              <Dropdown.Item eventKey={'feet'} active={toValue === 'feet'}>
                Feet
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Form onSubmit={calculate}>
            <Form.Label htmlFor='input'></Form.Label>
            <Form.Text id='input' muted>
              Input Value
            </Form.Text>
            <Form.Control
              type='text'
              id='input'
              aria-describedby='metricToStandard'
            ></Form.Control>
            <OutlineButton
              variant='outline-dark'
              style={{ marginTop: '15px' }}
              type='submit'
            >
              Calculate
            </OutlineButton>
          </Form>
          {calcValue && (
            <React.Fragment>
              <Alert>{calcValue}</Alert>
              <span>{toValue}</span>
            </React.Fragment>
          )}
        </Grid>
        <div style={{ backgroundColor: 'pink' }}></div>
      </Container>
      <Container style={{ textAlign: 'center', marginTop: '25%' }}>
        <Alert variant='primary'>
          <footer>
            <p>
              {' '}
              <span style={{ color: 'grey' }}>Author: Erb</span>{' '}
              <span style={{ color: 'teal' }}>(Eric Ryan Bowser)</span>
            </p>
          </footer>
        </Alert>
      </Container>
    </React.Fragment>
  )
}

export default MetricToStandardPage
