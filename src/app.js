import React, { useMemo, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import eb from "./assets/erb_home.png";
import Container from "react-bootstrap/Container";

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
      <img src={eb} className="img-responsive" alt="Cinque Terre" width="15%" />
      <Navbar className="shadow nav-tabs">
        <Nav.Item>
          <Nav.Link href="/"></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/length">Length</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/weight">Weight</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/volume">Volume</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/distance">Distance</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/capture">Paste Data String</Nav.Link>
        </Nav.Item>
      </Navbar>
    </Container>
  );
}

export default App;
