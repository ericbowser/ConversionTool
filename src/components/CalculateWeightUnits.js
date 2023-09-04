import { Container } from 'react-bootstrap'
import DropdownTemplate from "./DropdownTemplate";
function CalculateWeightUnits () {
  const dropDownUnitsWeight = ['Grams', 'Kilograms', 'Ounces', 'Pounds']
    
  const calculate = () => {
      
  }
    
  return (
    <Container>
      <DropdownTemplate props={{units: dropDownUnitsWeight, calculate}} />
    </Container>
  )
}

export default CalculateWeightUnits
