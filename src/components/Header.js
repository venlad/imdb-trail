import React from 'react'
import {Navbar, Nav, Button, Row} from "react-bootstrap"
import {Link} from 'react-router-dom' 
import Banner from '../components/Banner'
import InnerNav from '../components/InnerNav'
 
function Header() {
    return (
        <>
        <Navbar bg="dark" variant="dark" fluid>
            <Link to="/">
                <Navbar.Brand>IMDB</Navbar.Brand>
            </Link>
            <Nav className="ml-auto">
            <Nav.Link>
                <Button variant="dark">
                    <Link to="/">Search Movie/TV show</Link>
                </Button>
            </Nav.Link>
            <Nav.Link>
                <Button variant="dark">
                    <Link to="/login">Login</Link>
                </Button>
            </Nav.Link>
            </Nav>
        </Navbar>
            <InnerNav />
        </>
    )
}

export default Header
