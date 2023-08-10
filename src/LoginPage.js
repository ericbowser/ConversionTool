
import React from 'react'
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const Address = styled.div`
  padding: 50px;
  align-items: center;
  justify-items: center;
  background-color: aliceblue;
  height: 100px;
`;

const TextInput = styled.input`
  background-color: beige;
`;

const LoginHeader = styled.div`
  
`;

const LoginImage = styled.img `
  display: block;
  width: 220px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2em;
`;

function LoginPage() {
    return (
        <React.Fragment>
            <Container fluid>
                <label style={{color: 'blue'}}>test</label>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Label>Address 1</Form.Label>
                        <Form.Label>Address 2</Form.Label>
                        <Form.Label></Form.Label>
                        <Form.Label></Form.Label>
                        <Form.Label></Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                </Form>
            </Container>
        </React.Fragment>
    )
}

export default LoginPage;