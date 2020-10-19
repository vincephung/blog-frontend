import React,{useState,useEffect} from 'react';
import Loader from '../home/loader';
import PostDisplay from './PostDisplay'

const Post = ({match}) =>{
    const [postInfo,setPostInfo] = useState([]);
    const [commentInfo,setCommentInfo] = useState([]);
    const [commentAuthor,setCommentAuthor] = useState('');
    const [commentContent,setCommentContent] = useState('');
    const [loader, setLoader] = useState(true);
    const [error,setError] = useState(false);

    const handleError = () => {
        setError(true);
        setPostInfo(null);
    };

    useEffect(()=>{
        const getPostData = async() =>{
            try{
                setError(false); //might need to change this
                const url = `https://vincephung-blog.glitch.me/api/posts/${match.params.id}`;
                const response = await fetch(url, {mode: 'cors'});

                if(response.ok){
                    const data = await response.json();

                    setPostInfo(data);
                    
                    setLoader(false);
                    return data;
                }else{
                    handleError();
                }
            }catch(err){
                throw new Error(err);
            }
        }
        getPostData();

        const getCommentData = async() =>{
            try{
                setError(false); //might need to change this
                const url = `https://vincephung-blog.glitch.me/api/posts/${match.params.id}/comments`;
                const response = await fetch(url, {mode: 'cors'});

                if(response.ok){
                    const data = await response.json();
                    setCommentInfo(data);

                    setLoader(false);
                    return data;
                }else{
                    handleError();
                }
            }catch(err){
                throw new Error(err);
            }
        }
        getCommentData();

    },[match.params.id]);

    const handleCommentPost = async(e) =>{
        e.preventDefault();
        //the body of the response needs to be "author" and "content"
        let author = commentAuthor;
        let content = commentContent;

        const url = `https://vincephung-blog.glitch.me/api/posts/${match.params.id}/comments`;
        const response = await fetch(url,
            {   
                mode:'cors',
                method:'post',
                headers:{'Content-Type': 'application/json'}, 
                body: JSON.stringify({author,content})
            });
            
        const data = await response.json();
        setCommentContent('');
        setCommentAuthor('');
        setCommentInfo(commentInfo.concat(data));
    }
    const handleCommentChange = (e) =>{
        const {name} = e.target;
        name === 'commentAuthor' ? setCommentAuthor(e.target.value) : setCommentContent(e.target.value);
    }

    return(
        <div>
            {(loader) ? <Loader /> : ""}
            <PostDisplay 
                title = {postInfo.title}
                timestamp = {postInfo.timestamp} 
                lastUpdate = {postInfo.lastUpdate || 'Not edited'}
                image = {postInfo.image}
                comments = {commentInfo}
                postContent = {postInfo.content}
                id = {postInfo._id}
                handleCommentPost = {handleCommentPost}
                handleCommentChange = {handleCommentChange}
                commentAuthor = {commentAuthor}
                commentContent = {commentContent}
            />
        </div>
    )
}

export default Post;