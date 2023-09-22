import React, { useMemo, useState } from 'react'
import Nav from 'react-bootstrap/Nav'

function App () {
  const [page, setPage] = useState('landing')

  const selectedKey = event => {
    console.log('page event', event)
    if (event) {
      setPage(event)
    }
  }

  useMemo(() => {
    console.log('side effect called for state')
  }, [page])

  return (
    <React.Fragment>
      <Nav onSelect={selectedKey} activeKey={page}>
        <Nav.Item>
          <Nav.Link href='/'></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/length'>Length</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/weight'>Weight</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/volume'>Volume</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/distance'>Distance</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/capture'>Paste Data String</Nav.Link>
        </Nav.Item>
      </Nav>
    </React.Fragment>
  )
}

export default App
