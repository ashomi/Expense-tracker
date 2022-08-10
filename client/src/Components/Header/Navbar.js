import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Context/Context";
const Navbars = () => {
  const { user ,dispatch} = useContext(Context);
  const navigate = useNavigate()
  const handleLogout = async() =>{
    await dispatch({type:"LOGOUT"})
    navigate('/')
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
              <Nav.Item><Link to="/" style={{textDecoration:"none",color:'black'}}>Home</Link></Nav.Item>  
                
                 
                 { user ? <Nav.Item><Link onClick={handleLogout} to="/">Logout</Link></Nav.Item> :<Nav.Item><Link to="/login">Login</Link></Nav.Item>}
               
           <Nav.Item><Link to="/dashboard">Expense Tracker</Link> </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
