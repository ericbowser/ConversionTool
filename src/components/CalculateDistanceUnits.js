import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import DropdownTemplate from './DropdownTemplate'

function CalculateDistanceUnits () {
  const units = ['Miles', 'Kilometers', 'Meters', 'Feet', 'Yard']
  const [calcValue, setCalcValue] = useState(undefined)

  const calculate = (inputValue, fromUnits, toUnits) => {
    const calcValue = decideCalculation(inputValue, fromUnits, toUnits)
    setCalcValue(calcValue)
  }

  function decideCalculation (inputValue, fromUnits, toUnits) {
    if (fromUnits === 'Miles' && toUnits === 'Kilometers') {
      return inputValue * 1.609344
    }
    if (fromUnits === 'Kilometers' && toUnits === 'Miles') {
      return inputValue / 1.609344
    }
  }

  return (
    <Container>
      <DropdownTemplate props={{ units, calculate, calcValue }} />
    </Container>
  )
}

export default CalculateDistanceUnits
