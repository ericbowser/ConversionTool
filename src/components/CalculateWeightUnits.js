import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import DropdownTemplate from './DropdownTemplate'

function CalculateWeightUnits () {
  const units = ['Grams', 'Kilograms', 'Ounces', 'Pounds']
  const [calcValue, setCalcValue] = useState(undefined)

  useEffect(() => {}, [calcValue])

  const calculate = (inputValue, fromUnits, toUnits) => {
    const calcValue = decideCalculation(inputValue, fromUnits, toUnits)
    setCalcValue(calcValue)
  }

  function decideCalculation (inputValue, toUnits, fromUnits) {
    if (fromUnits === 'Grams' && toUnits === 'Kilograms') {
      return inputValue * 100
    }
    if (fromUnits === 'Kilograms' && toUnits === 'Grams') {
      return inputValue / 100
    }
    // if (toUnits === '' && fromUnits === '')
    // if (toUnits === '' && fromUnits === '')
    // if (toUnits === '' && fromUnits === '')
    // if (fromUnits === '' && toUnits === '')
    // if (fromUnits === '' && toUnits === '')
    // if (fromUnits === '' && toUnits === '')
  }

  return (
    <Container>
      <DropdownTemplate props={{ units, calculate, calcValue }} />
    </Container>
  )
}

export default CalculateWeightUnits
