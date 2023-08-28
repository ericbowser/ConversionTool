import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import DropdownTemplate from './DropdownTemplate'

function CalculateLengthUnits () {
  const dropDownUnitsLength = ['Millimeters', 'Centimeters', 'Inches', 'Feet']

  function decideCalculation (inputValue, fromUnits, toUnits) {
    let value
    if (fromUnits === 'Centimeters' && toUnits === 'Inches') {
      value = inputValue / 2.54
      return value
    }
    if (fromUnits === 'Inches' && toUnits === 'Centimeters') {
      value = inputValue * 2.54
      return value
    }
    if (fromUnits === 'Millimeters' && toUnits === 'Centimeters') {
      value = inputValue / 10
      return value
    } else if (fromUnits === 'Centimeters' && toUnits === 'Millimeters') {
      value = inputValue * 10
      return value
    } else if (fromUnits === 'Millimeters' && toUnits === 'Inches') {
      value = inputValue * 25.4
      return value
    } else if (fromUnits === 'Inches' && toUnits === 'Millimeters') {
      value = inputValue / 25.4
      return value
    } else if (fromUnits === 'Millimeters' && toUnits === 'Feet') {
      value = inputValue * 304.8
      return value
    } else if (fromUnits === 'Feet' && toUnits === 'Millimeters') {
      value = inputValue / 304.8
      return value
    }
  }

  const calculate = (inputValue, fromUnits, toUnits, setCalcValue) => {
    console.log('from units', fromUnits)
    console.log('to units', toUnits)

    if (inputValue && fromUnits && toUnits) {
      const calcValue = decideCalculation(inputValue, fromUnits, toUnits)
      setCalcValue(calcValue)
    }
  }

  return (
    <Container>
      <DropdownTemplate props={{ units: dropDownUnitsLength, calculate }} />
    </Container>
  )
}

export default CalculateLengthUnits
