import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

const Nav = () =>{
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home">Blog Home</Navbar.Brand>
        </Navbar>
    )
}

export default Nav