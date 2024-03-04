import React, { useState, Suspense, lazy } from "react";
import Container from "react-bootstrap/Container";

const DropdownTemplate = lazy(() => import("./DropdownTemplate"));

function CalculateDistanceUnits() {
  const units = ["Miles", "Kilometers", "Meters", "Feet", "Yard"];
  const [calcValue, setCalcValue] = useState(undefined);

  const calculate = (inputValue, fromUnits, toUnits) => {
    const calcValue = decideCalculation(inputValue, fromUnits, toUnits);
    setCalcValue(calcValue);
  };

  function decideCalculation(inputValue, fromUnits, toUnits) {
    if (fromUnits === "Miles" && toUnits === "Kilometers") {
      return inputValue * 1.609344;
    }
    if (fromUnits === "Kilometers" && toUnits === "Miles") {
      return inputValue / 1.609344;
    }
    if (fromUnits === "Miles" && toUnits === "Meters") {
      return inputValue * 0.00062137;
    }
  }

  return (
    <Container>
      <Suspense>
        <DropdownTemplate props={{ units, calculate, calcValue }} />
      </Suspense>
    </Container>
  );
}

export default CalculateDistanceUnits;
