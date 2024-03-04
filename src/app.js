import React, { useMemo, useState } from "react";
import Container from "react-bootstrap/Container";
import CalculateLengthUnits from "./components/CalculateLengthUnits";
import CalculateDistanceUnits from "./components/CalculateDistanceUnits";
import CalculateVolumeUnits from "./components/CalculateVolumeUnits";
import CalculateWeightUnits from "./components/CalculateWeightUnits";
import {
  Grid,
  GridCol1Row2,
  GridCol2Row2,
  GridCol2Row1,
  GridCol1Row1,
} from "./styles";

function App() {
  return (
    <Container>
      <h2
        style={{
          textAlign: "center",
          marginTop: "10px",
          color: "darkgoldenrod",
        }}
      >
        Common Unit Conversions
      </h2>
      <Container style={{ color: "white", padding: "25px" }}>
        <div>
          <table>
            <tbody>
              <tr>
                <th>Type</th>
                <th style={{ paddingLeft: "18px" }}>Metric</th>
                <th style={{ paddingLeft: "18px" }}>
                  Standard (U.S. Customary)
                </th>
              </tr>
              <tr>
                <td>Length</td>
                <td style={{ paddingLeft: "18px" }}>1 meter (m)</td>
                <td style={{ paddingLeft: "18px" }}>3.28084 feet (ft)</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td style={{ paddingLeft: "18px" }}>1 kilogram (kg)</td>
                <td style={{ paddingLeft: "18px" }}>2.20462 pounds (lb)</td>
              </tr>
              <tr>
                <td>Volume</td>
                <td style={{ paddingLeft: "18px" }}>1 liter (L)</td>
                <td style={{ paddingLeft: "18px" }}>0.264172 gallons (gal)</td>
              </tr>
              <tr>
                <td>Temperature</td>
                <td style={{ paddingLeft: "18px" }}>0°C (degrees Celsius)</td>
                <td style={{ paddingLeft: "18px" }}>
                  32°F (degrees Fahrenheit)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
      <Container>
        <Grid>
          <GridCol1Row1>
            <h6 style={{ textAlign: "center" }}>Length</h6>
            <CalculateLengthUnits />
          </GridCol1Row1>
          <GridCol1Row2>
            <h6 style={{ textAlign: "center" }}>Distance</h6>
            <CalculateDistanceUnits />
          </GridCol1Row2>
          <GridCol2Row1>
            <h6 style={{ textAlign: "center" }}>Volume</h6>
            <CalculateVolumeUnits />
          </GridCol2Row1>
          <GridCol2Row2>
            <h6 style={{ textAlign: "center" }}>Weight</h6>
            <CalculateWeightUnits />
          </GridCol2Row2>
        </Grid>
      </Container>
    </Container>
  );
}

export default App;
