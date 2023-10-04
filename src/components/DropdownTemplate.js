import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import OutlineButton from 'react-bootstrap/Button'
import styled from 'styled-components'
import Alert from 'react-bootstrap/Alert'
import Dropdown from 'react-bootstrap/Dropdown'
import { useLocation } from 'react-router-dom'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 1em;
`

function DropdownTemplate ({ props }) {
  const { units, calculate } = props
  const [currentUnits, setCurrentUnits] = useState(undefined)
  const [toUnits, setToUnits] = useState(undefined)
  const [fromUnits, setFromUnits] = useState(undefined)
  const [calcValue, setCalcValue] = useState(undefined)

  const location = useLocation()
  console.log(location.pathname)

  useEffect(() => {
    if (!currentUnits && units !== undefined) {
      console.log(units)
      setCurrentUnits(units)
    }
  }, [currentUnits])

  useEffect(() => {}, [fromUnits])

  useEffect(() => {}, [toUnits])

  useEffect(() => {
    // if (calcValue === null) {
    //   setCalcValue(calcValue)
    // }
  }, [calcValue])

  const onSelectFrom = fromUnits => {
    if (fromUnits) {
      setFromUnits(fromUnits)
    }
  }

  const onSelectTo = toUnits => {
    if (toUnits) {
      setToUnits(toUnits)
    }
  }

  function getItems (direction) {
    if (units && units.length > 0) {
      const item = units.map((unit, index, arr) => {
        console.log('key', `${unit}${index}`)
        return (
          <Dropdown.Item
            eventKey={unit}
            active={direction === unit}
            key={`${index}-${unit}`}
          >
            {unit}
          </Dropdown.Item>
        )
      })

      return item
    }
  }

  function handleOnSubmit (event) {
    event.preventDefault()
    const calcValue = event.target[0].value
    if (fromUnits && toUnits && calcValue) {
      console.log('inside handle submit')
      calculate(calcValue, fromUnits, toUnits, setCalcValue)
    }
  }

  return (
    <>
      <Container style={{ padding: '25px' }}>
        <div>
          <a href='/'>Home</a>
        </div>
        <h3>Conversion Units</h3>
        <div
          style={{
            backgroundColor: '#ff30',
            padding: '10px',
            borderRadius: '16px'
          }}
        ></div>
        <Grid style={{ padding: '10px' }}>
          <Dropdown onSelect={onSelectFrom}>
            <div>From Units</div>
            <Dropdown.Toggle variant='outline-primary' id='dropdown-basic'>
              {fromUnits ?? 'From'}
            </Dropdown.Toggle>
            <Dropdown.Menu>{getItems(fromUnits)}</Dropdown.Menu>
          </Dropdown>
          <Dropdown onSelect={onSelectTo}>
            <div>To Units</div>
            <Dropdown.Toggle variant='outline-primary' id='dropdown-basic'>
              {toUnits ?? 'To'}
            </Dropdown.Toggle>
            <Dropdown.Menu>{getItems(toUnits)}</Dropdown.Menu>
          </Dropdown>
          <Form onSubmit={handleOnSubmit}>
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
              <Alert variant='danger' style={{ border: '2px outset #FFA500' }}>
                {calcValue}
              </Alert>
              {/* <span>{toValue}</span> */}
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
    </>
  )
}

export default DropdownTemplate