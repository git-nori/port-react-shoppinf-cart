import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Navbar, Nav, Form, FormControl, Button, InputGroup } from 'react-bootstrap'
import { BsSearch, BsBagFill, BsX } from "react-icons/bs"
import './Header.css'

const Header = () => {
  const [showSearch, setShowSearch] = useState(false)

  const toggleSearch = () => {
    setShowSearch(!showSearch)
  }

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="py-3">
      {showSearch ? (
        <Form className="w-100">
          <InputGroup>
            <FormControl type="text" placeholder="検索する"></FormControl>
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={toggleSearch}><BsX /></Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      ) : (
          <>
            <Navbar.Brand as={Link} to="/">My Shopping Site</Navbar.Brand>
            <Nav className="flex-row out-link ml-auto">
              <Nav.Link className="ml-3" onClick={toggleSearch}><BsSearch /></Nav.Link>
              <Nav.Link className="mx-3" as={Link} to="/cart"><BsBagFill /></Nav.Link>
            </Nav>
            <Navbar.Toggle aria-controls="toggle-nav" />
            <Navbar.Collapse id="toggle-nav">
              <Nav className="in-link">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/catalog">Catalog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
    </Navbar>
  )
}

export default Header