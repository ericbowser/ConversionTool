import React, { useMemo, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import CalculateLengthUnits from "./components/CalculateLengthUnits";
import CalculateDistanceUnits from "./components/CalculateDistanceUnits";
import CalculateVolumeUnits from "./components/CalculateVolumeUnits";
import CalculateWeightUnits from "./components/CalculateWeightUnits";

const Grid = styled.div`
  box-shadow: black 5px 5px 15px 1px;
  padding: 25px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  word-wrap: break-word;
  @media only screen and (max-width: 650px) {
    ul {
      padding: 5px 15px 0 3px;
    }

    display: inline;
  }
`;

const GridCol1Row1 = styled.div`
  box-shadow: blue 1px 5px 5px 1px;
  padding: 25px;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 2;
`;

const GridCol2Row1 = styled.div`
  box-shadow: blue 1px 5px 5px 1px;
  padding: 25px;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 2;
  grid-column-end: 3;
`;

const GridCol1Row2 = styled.div`
  box-shadow: blue 1px 5px 5px 1px;
  padding: 25px;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 2;
`;

const GridCol2Row2 = styled.div`
  box-shadow: blue 1px 5px 5px 1px;
  padding: 25px;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
`;

function App() {
  const [page, setPage] = useState("landing");

  const selectedKey = (event) => {
    console.log("page event", event);
    if (event) {
      setPage(event);
    }
  };

  useMemo(() => {
    console.log("side effect called for state");
  }, [page]);

  return (
    <Container>
      <h2
        style={{
          textAlign: "center",
          marginTop: "10px",
          padding: "15px",
          color: "darkgoldenrod",
        }}
      >
        Common Unit Conversions
      </h2>
      <Navbar className="shadow nav-tabs" style={{ marginTop: "15px" }}>
        <div>
          <table>
            <tbody>
              <tr>
                <th>Type</th>
                <th>Metric</th>
                <th>Standard (U.S. Customary)</th>
              </tr>
              <tr>
                <td>Length</td>
                <td>1 meter (m)</td>
                <td>3.28084 feet (ft)</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>1 kilogram (kg)</td>
                <td>2.20462 pounds (lb)</td>
              </tr>
              <tr>
                <td>Volume</td>
                <td>1 liter (L)</td>
                <td>0.264172 gallons (gal)</td>
              </tr>
              <tr>
                <td>Temperature</td>
                <td>0°C (degrees Celsius)</td>
                <td>32°F (degrees Fahrenheit)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Navbar>
      <Grid>
        <GridCol1Row1>
          <h6>Length</h6>
          <CalculateLengthUnits />
        </GridCol1Row1>
        <GridCol1Row2>
          <h6>Distance</h6>
          <CalculateDistanceUnits />
        </GridCol1Row2>
        <GridCol2Row1>
          <h6>Volume</h6>
          <CalculateVolumeUnits />
        </GridCol2Row1>
        <GridCol2Row2>
          <h6>Weight</h6>
          <CalculateWeightUnits />
        </GridCol2Row2>
      </Grid>
    </Container>
  );
}

export default App;
