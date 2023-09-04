import {Container} from 'react-bootstrap'
import DropdownTemplate from "./DropdownTemplate";

function CalculateVolumeUnits () {

  const dropDownUnitsVolume = ['Liters', 'Gallons', 'Quarts', 'Pints', 'Cups']

  const calculate = (inputValue, fromUnits, toUnits, setCalcValue) => {
    if (inputValue && fromUnits && toUnits) {
      const calcValue = decideCalculation(inputValue, fromUnits, toUnits)
      setCalcValue(calcValue)
    }
  }
  function decideCalculation (inputValue, fromUnits, toUnits) {
    if (fromUnits === 'Gallons' && toUnits === 'Liters') {
      return inputValue / 3.785;
    }
    
  }
  
  return (
    <Container>
      <DropdownTemplate props={{ units: dropDownUnitsVolume, calculate }} />
    </Container>
  )
}

export default CalculateVolumeUnits
