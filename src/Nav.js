import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';

const Nav = () =>{
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand >
                <Link to="/home">Blog Home</Link>
            </Navbar.Brand>
        </Navbar>
    )
}

export default Nav