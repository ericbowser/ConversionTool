import Container from 'react-bootstrap/Container'
import DropdownTemplate from './DropdownTemplate'

function CalculateDistanceUnits () {
  const units = ['Miles', 'Kilometers', 'Meters', 'Feet', 'Yard']

  const calculate = (inputValue, fromUnits, toUnits, setCalcValue) => {
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
      <DropdownTemplate props={{ units, calculate }} />
    </Container>
  )
}

export default CalculateDistanceUnits
