import React from 'react'
import {Navbar, Nav} from "react-bootstrap"
import {Link} from 'react-router-dom' 

function Header() {
    return (
        <>
        <Navbar bg="dark" variant="dark" fluid>
            <Nav className="m-auto">
                <Link to="/user/movies">
                    <Navbar.Brand>-Movies-</Navbar.Brand>
                </Link>
                <Link to="/user/shows">
                    <Navbar.Brand>-Tv Shows-</Navbar.Brand>
                </Link>
                <Link to="/user/topmovies">
                    <Navbar.Brand>-Top Movies-</Navbar.Brand>
                </Link>
                <Link to="/user/topshows">
                    <Navbar.Brand>-Top Tv Shows-</Navbar.Brand>
                </Link>
            </Nav>
        </Navbar>
        </>
    )
}

export default Header
