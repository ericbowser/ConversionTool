
import React, { useState, useEffect } from 'react';
import {Container, Button} from "react-bootstrap";
import styled from 'styled-components';
import Form from "react-bootstrap/Form";
//import {designer} from "zpl-label-designer";
import * as designer from "zpl-label-designer";


const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function Capture() {
    const [dataString, setDataString] = useState('');
    const [zplData, setZplData] = useState('');
    
    useEffect(() => {
    }, [dataString]);
    
    useEffect(() => {
        console.log(zplData)
    }, [zplData]);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const dataString = event.target[0].value;
        if (dataString) {
            setDataString(dataString);
        }
    }
    
    const ZplData = () => {
        
    }
    
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <FlexContainer>
                    <textarea rows={20} cols={50} style={{margin: '20px'}} value={'hello'} />
                    <textarea rows={20} cols={50} style={{margin: '20px'}} value={ dataString || '' } />
                    <textarea rows={20} cols={50} style={{margin: '20px'}} value={zplData || ''} />
                </FlexContainer>
                <Button style={{marginLeft: '17px'}} type={'submit'} value={'Submit'} title={'Submit'}>
                    <span>Submit</span>
                </Button>
            </Form>
            <Button style={{marginLeft: '17px'}} onClick={ZplData}>
                <span>Generate Zpl</span>
            </Button>
            <div>
            </div>
        </Container>
    )
}

export default Capture;