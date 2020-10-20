import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Comment from './commentDisplay';
import './post.css';

const PostDisplay = (props) => {
  return (
    <div className="postContainer">
      <div className="postSection">
        <h1 className="postTitle">{props.title}</h1>
        <hr />
        <p className="postDate">Posted on {props.timestamp}</p>
        <hr />
        <img class="post-img" src={props.image} alt="post img"></img>
        <hr />
        <p className="postContent">{props.postContent}</p>
        <hr />
      </div>
      <div className="commentForm">
        <Card>
          <Card.Body>
            <Card.Title>Leave a comment:</Card.Title>
            <form className="form-group" onSubmit={props.handleCommentPost}>
              <label className="label" htmlFor="name">
                Name:
              </label>
              <input
                name="commentAuthor"
                value={props.commentAuthor}
                onChange={props.handleCommentChange}
                type="text"
                minLength="5"
                required
              />
              <hr />
              <textarea
                className="form-control"
                rows="3"
                name="content"
                value={props.commentContent}
                onChange={props.handleCommentChange}
                minLength="5"
                required
              ></textarea>
              <Button type="submit" variant="primary">
                Post
              </Button>
            </form>
          </Card.Body>
        </Card>
      </div>
      <div className="commentSection">
        {props.comments.map((comment) => (
          <Comment
            author={comment.author}
            key={comment._id}
            content={comment.content}
            timestamp={comment.timestamp}
          />
        ))}
      </div>
    </div>
  );
};

export default PostDisplay;
