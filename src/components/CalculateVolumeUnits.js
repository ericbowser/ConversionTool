import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import DropdownTemplate from "./DropdownTemplate";
import Units from "../Common";

function CalculateVolumeUnits() {
  const units = ["Liters", "Gallons", "Quarts", "Pints", "Cups"];

  const [calcValue, setCalcValue] = useState(undefined);
  useEffect(() => {}, [calcValue]);

  const calculate = (inputValue, fromUnits, toUnits) => {
    const calcValue = decideCalculation(inputValue, fromUnits, toUnits);
    setCalcValue(calcValue);
  };

  function decideCalculation(inputValue, fromUnits, toUnits) {
    if (fromUnits === Units.Gallons && toUnits === Units.Liters) {
      return inputValue / 3.785;
    } else if (fromUnits === Units.Liters && toUnits === Units.Gallons) {
      return inputValue * 3.785;
    } else if (fromUnits === Units.Quarts && fromUnits === Units.Gallons) {
      return inputValue / 4;
    } else if (fromUnits === Units.Gallons && toUnits === Units.Quarts) {
      return inputValue * 4;
    } else if (fromUnits === Units.Gallons && toUnits === Units.Pints) {
      return inputValue * 8;
    } else if (fromUnits === Units.Pints && toUnits === Units.Gallons) {
      return inputValue / 8;
    }
  }

  return (
    <Container>
      <DropdownTemplate props={{ units, calculate, calcValue }} />
    </Container>
  );
}

export default CalculateVolumeUnits;
