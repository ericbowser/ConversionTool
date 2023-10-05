import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import DropdownTemplate from './DropdownTemplate'

function CalculateVolumeUnits () {
  const units = ['Liters', 'Gallons', 'Quarts', 'Pints', 'Cups']

  const [calcValue, setCalcValue] = useState(undefined);
  useEffect(() => {}, [calcValue]);

  const calculate = (inputValue, fromUnits, toUnits) => {
    const calcValue = decideCalculation(inputValue, fromUnits, toUnits)
    setCalcValue(calcValue)
  }

  function decideCalculation (inputValue, fromUnits, toUnits) {
    if (fromUnits === 'Gallons' && toUnits === 'Liters') {
      return inputValue / 3.785
    } else if (toUnits === 'Gallons' && fromUnits === 'Liters') {
      return inputValue * 3.785
    }
  }

  return (
    <Container>
      <DropdownTemplate props={{ units, calculate, calcValue }} />
    </Container>
  )
}

export default CalculateVolumeUnits
