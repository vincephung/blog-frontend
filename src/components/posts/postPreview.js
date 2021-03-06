import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const PostPreview = (props) =>{
    return(
        <Card className="card-container"style={{ width: '18rem' }}>
            <Card.Img className="card-img" variant="top" src={props.image} />
            <Card.Body className="card-body">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    Posted on: {props.timestamp} | Last Edit : {props.lastUpdate}
                </Card.Text>
                <Button variant="link" >
                    <Link to={`/posts/${props.id}`}>View post</Link>
                </Button> 
            </Card.Body>
        </Card>
    )
}



export default PostPreview;