//basically when page is fetching, show the loading screen bar
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './loader.css';

const Loader = () => {
    return(
        <div className ="loading-container">
            <h1>Loading...</h1>
            <Spinner animation="border" variant="primary" role="status">
            </Spinner>  
        </div>
        )
}

export default Loader;