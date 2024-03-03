import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import OutlineButton from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Dropdown from "react-bootstrap/Dropdown";
import { useLocation } from "react-router-dom";

function DropdownTemplate({ props }) {
  const { units, calculate, calcValue } = props;
  const [currentUnits] = useState(undefined);
  const [toUnits, setToUnits] = useState(undefined);
  const [fromUnits, setFromUnits] = useState(undefined);

  const location = useLocation();
  console.log(window.width);

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
        console.log("key", `${unit}${index}`);
        return (
          <Dropdown.Item
            eventKey={unit}
            active={direction === unit}
            key={`${index}-${unit}`}
          >
            {unit}
          </Dropdown.Item>
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
    <Container style={{ marginBottom: "2em" }}>
      <Dropdown onSelect={onSelectFrom} style={{ padding: "15px" }}>
        <div style={{ color: "blue" }}>
          <span style={{ padding: "5px" }}>From Units</span>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {fromUnits ?? "From"}
          </Dropdown.Toggle>
          <Dropdown.Menu>{getItems(fromUnits)}</Dropdown.Menu>
        </div>
      </Dropdown>
      <Dropdown onSelect={onSelectTo} style={{ padding: "15px" }}>
        <div style={{ color: "blue" }}>
          <span style={{ padding: "5px" }}>To Units</span>
          <Dropdown.Toggle variant={"primary"} id="dropdown-basic">
            {toUnits ?? "To"}
          </Dropdown.Toggle>
          <Dropdown.Menu>{getItems(toUnits)}</Dropdown.Menu>
        </div>
      </Dropdown>
      <Form onSubmit={handleOnSubmit}>
        <Form.Label htmlFor="input"></Form.Label>
        <Form.Control
          type="text"
          id="input"
          aria-describedby="metricToStandard"
        ></Form.Control>
        <OutlineButton
          variant="outline-dark"
          style={{ marginTop: "15px" }}
          type="submit"
        >
          Calculate
        </OutlineButton>
      </Form>
      {calcValue && (
        <Container style={{ margin: "23px" }}>
          <div style={{ backgroundColor: "green" }}></div>
          <Alert
            variant="success"
            style={{ width: "auto", textAlign: "center" }}
          >
            {calcValue}
          </Alert>
        </Container>
      )}
    </Container>
  );
}

export default DropdownTemplate;
