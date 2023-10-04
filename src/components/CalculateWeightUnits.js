import { Container } from 'react-bootstrap'
import DropdownTemplate from './DropdownTemplate'
function CalculateWeightUnits () {
  const units = ['Grams', 'Kilograms', 'Ounces', 'Pounds']

  useMemo(() => {
    console.log('effect for calcValue')
    if (calcValue > 0.0) {
      setCalcValue(calcValue)
    }
  }, [calcValue])

  const calculate = (inputValue, fromUnits, toUnits, setCalcValue) => {
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
      <DropdownTemplate props={{ units, calculate }} />
    </Container>
  )
}

export default CalculateWeightUnits
