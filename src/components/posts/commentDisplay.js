import React from 'react';
import './post.css';

const Comment = (props) =>{
    return(
        <div className="commentContainer">
            <div className="singleComment">
                <h4 className="commentAuthor">{props.author}</h4>
                <p>{props.content}</p>
                <p className="commentDate">{props.timestamp}</p>
            </div>
        </div>
    )
}

export default Comment;