import React from 'react';
import './App.css';
import { Home } from './Components/Home.js';
import { Nav } from 'react-bootstrap';


function App() {
  return (
    <>
      <NavBar/>
      <Home /> 
      </>
  );
}

export default App;

function NavBar() {
  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/home" className="navStyles">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/dashboard" eventKey="link-1">Dash Board</Nav.Link>
        </Nav.Item>
      </Nav>
      </>
  );
}