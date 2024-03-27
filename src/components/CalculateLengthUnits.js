import React, { useState, useEffect, Suspense } from "react";
import Container from "react-bootstrap/Container";
import Units from "../Common";

const DropdownTemplate = React.lazy(() => import("./DropdownTemplate"));

function CalculateLengthUnits() {
  const units = ["Millimeters", "Centimeters", "Inches", "Feet"];
  const [calcValue, setCalcValue] = useState(undefined);
  useEffect(() => {}, [calcValue]);

  function decideCalculation(inputValue, fromUnits, toUnits) {
    let value;
    if (fromUnits === Units.Centimeters && toUnits === Units.Inches) {
      value = inputValue / 2.54;
      return value;
    }
    if (fromUnits === Units.Inches && toUnits === Units.Centimeters) {
      value = inputValue * 2.54;
      return value;
    }
    if (fromUnits === Units.Milliliters && toUnits === Units.Centimeters) {
      value = inputValue / 10;
      return value;
    }
    if (fromUnits === Units.Centimeters && toUnits === Units.Milliliters) {
      value = inputValue * 10;
      return value;
    }
    if (fromUnits === Units.Milliliters && toUnits === Units.Inches) {
      value = inputValue / 25.4; // to inches from milli
      return value;
    }
    if (fromUnits === Units.Inches && toUnits === Units.Milliliters) {
      value = inputValue * 25.4; // to milli from inches
      return value;
    }
    if (fromUnits === "Millimeters" && toUnits === "Feet") {
      value = inputValue * 304.8;
      return value;
    }
    if (fromUnits === "Feet" && toUnits === "Millimeters") {
      value = inputValue / 304.8;
      return value;
    }
  }

  const calculate = (inputValue, fromUnits, toUnits) => {
    const calcValue = decideCalculation(inputValue, fromUnits, toUnits);
    setCalcValue(calcValue);
  };

  return (
    <div>
      <Suspense fallback={<>Loading..</>}>
        <DropdownTemplate props={{ units, calculate, calcValue }} />
      </Suspense>
    </div>
  );
}

export default CalculateLengthUnits;
