import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import OutlineButton from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownItem } from "react-bootstrap";

function DropdownTemplate({ props }) {
  const { units, calculate, calcValue } = props;
  const [currentUnits] = useState(undefined);
  const [toUnits, setToUnits] = useState(undefined);
  const [fromUnits, setFromUnits] = useState(undefined);

  useEffect(() => {}, [currentUnits]);

  useEffect(() => {}, [fromUnits]);

  useEffect(() => {}, [toUnits]);

  const onSelectFrom = (fromUnits) => {
    if (fromUnits) {
      setFromUnits(fromUnits);
    }
  };

  const onSelectTo = (toUnits) => {
    if (toUnits) {
      setToUnits(toUnits);
    }
  };

  function getItems(direction) {
    if (units && units.length > 0) {
      return units.map((unit, index, arr) => {
        console.log("key", `${unit}-${index}`);
        return (
          <DropdownItem
            eventKey={unit}
            active={direction === unit}
            key={`${index}-${unit}`}
          >
            {unit}
          </DropdownItem>
        );
      });
    }
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    const calcValue = event.target[0].value;
    if (fromUnits && toUnits && calcValue) {
      calculate(calcValue, fromUnits, toUnits);
    }
  }

  return (
    <Container style={{ padding: "25px" }}>
      <Dropdown onSelect={onSelectFrom}>
        <span style={{ paddingRight: "25px" }}>From Units</span>
        <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
          {fromUnits ?? "From"}
        </Dropdown.Toggle>
        <Dropdown.Menu>{getItems(fromUnits)}</Dropdown.Menu>
      </Dropdown>
      <Dropdown onSelect={onSelectTo}>
        <span style={{ paddingRight: "45px" }}>To Units</span>
        <Dropdown.Toggle variant={"outline-success"} id="dropdown-basic">
          {toUnits ?? "To"}
        </Dropdown.Toggle>
        <Dropdown.Menu>{getItems(toUnits)}</Dropdown.Menu>
      </Dropdown>
      <Form onSubmit={handleOnSubmit}>
        <Form.Label htmlFor="input"></Form.Label>
        <Form.Control
          style={{ width: "130px" }}
          inputMode={"numeric"}
          type="number"
          id="input"
          aria-describedby="metricToStandard"
          placeholder={"Input Units"}
        ></Form.Control>
        <span>
          <OutlineButton
            variant="outline-danger"
            style={{ marginTop: "15px" }}
            type="submit"
          >
            Calculate
          </OutlineButton>
          {calcValue && (
            <span style={{ marginLeft: "33px", color: "greenyellow" }}>
              {calcValue}
            </span>
          )}
        </span>
      </Form>
    </Container>
  );
}

export default DropdownTemplate;
