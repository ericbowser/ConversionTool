
import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import Alert from 'react-bootstrap/Alert';
import Dropdown from 'react-bootstrap/Dropdown';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 1em;
`;
const LeftColumn = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 1;
`
const RightColumn = styled.div`
  grid-column-start: 2;
  grid-column-end: -1;
  grid-row: 1;
`
const TabsContainer = styled(Tabs)`
`
const ButtonContainer = styled(Button)`
`



function MetricToStandardPage() {
    
    const [ fromValue, setFromValue ] = useState(null);
    const [ toValue, setToValue ] = useState(null);
    const [ calcValue, setCalcValue ] = useState(null);
    
    useEffect(() => {
        console.log('from value')
    }, [fromValue]);
    
    useEffect(() => {
        console.log('to value')
    }, [toValue]);
    
    useEffect(() => {
    }, [calcValue]);

    function calculate() {
        console.log(fromValue);
        console.log(toValue);
        const calcValue = fromValue + toValue;
        setCalcValue(calcValue);
    }
    
    function onSelectFrom(fromValue) {
        if (fromValue) {
            console.log(fromValue);
            setFromValue(fromValue);
        }
        else {
            setFromValue(null)
        }
    }
    function onSelectTo(toValue) {
        if (toValue) {
            console.log(toValue);
            setToValue(toValue);
        }
        else {
            setToValue(null)
        }
    }
   
    return (
        <React.Fragment>
            <Grid>
                <Dropdown onSelect={onSelectFrom} key={`From-${fromValue}`}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        From 
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey={"millimeters"} active={fromValue === 'millimeters'}>Millimeters</Dropdown.Item>
                        <Dropdown.Item eventKey={"centimeters"} active={fromValue === 'centimeters'}>Centimeters</Dropdown.Item>
                        <Dropdown.Item eventKey={"inches"} active={fromValue === 'inches'}>Inches</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown onSelect={onSelectTo} key={`To-${toValue}`}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        To
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey={"millimeters"} active={toValue === 'millimeters'}>Millimeters</Dropdown.Item>
                        <Dropdown.Item eventKey={"centimeters"} active={toValue === 'centimeters'}>Centimeters</Dropdown.Item>
                        <Dropdown.Item eventKey={"inches"} active={toValue === 'inches'}>Inches</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Form onSubmit={calculate}>
                    <Form.Label htmlFor="input"></Form.Label>
                    <Form.Text id="input" muted>
                        Input Value
                    </Form.Text>
                    <Form.Control
                        type="text"
                        id="input"
                        aria-describedby="metricToStandard"
                    >
                    </Form.Control>
                    <ButtonContainer type='submit'>Calculate</ButtonContainer>
                </Form>
                {calcValue && (
                    <div>{calcValue}</div>
                )} 
            </Grid>
        </React.Fragment>
    )
}

export default MetricToStandardPage;

