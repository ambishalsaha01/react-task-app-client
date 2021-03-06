import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {  Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <header>
            <Navbar bg="warning py-3" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Task-App</Navbar.Brand>
                    <Nav className="ms-auto nav-item">
                        <Link to="/home">Home</Link>
                        <Link to="/completetask">Completed-Tasks</Link>
                        <Link to="/todo">To-Do</Link>
                        <Link to="/calender">Calender</Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;