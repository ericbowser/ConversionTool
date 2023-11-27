import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import OutlineButton from "react-bootstrap/Button";
import styled from "styled-components";
import Alert from "react-bootstrap/Alert";
import Dropdown from "react-bootstrap/Dropdown";
import { useLocation } from "react-router-dom";

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  column-gap: 5%;
`;

function DropdownTemplate({ props }) {
  const { units, calculate, calcValue } = props;
  const [currentUnits, setCurrentUnits] = useState(undefined);
  const [toUnits, setToUnits] = useState(undefined);
  const [fromUnits, setFromUnits] = useState(undefined);

  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    /*
      setCurrentUnits(units)
*/
  }, [currentUnits]);

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
      const item = units.map((unit, index, arr) => {
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

      return item;
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
    <Container style={{ margin: "2em" }}>
      <div>
        <a href="/">Home</a>
      </div>
      <h3>Conversion Units</h3>
      <div
        style={{
          padding: "10px",
          borderRadius: "16px",
        }}
      ></div>
      <Grid>
        <Dropdown onSelect={onSelectFrom}>
          <div style={{ color: "blue" }}>From Units</div>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {fromUnits ?? "From"}
          </Dropdown.Toggle>
          <Dropdown.Menu>{getItems(fromUnits)}</Dropdown.Menu>
        </Dropdown>
        <Dropdown onSelect={onSelectTo}>
          <div style={{ color: "blue" }}>To Units</div>
          <Dropdown.Toggle variant={"primary"} id="dropdown-basic">
            {toUnits ?? "To"}
          </Dropdown.Toggle>
          <Dropdown.Menu>{getItems(toUnits)}</Dropdown.Menu>
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
      </Grid>
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
