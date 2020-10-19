import React, { useEffect,useState } from 'react';
import Loader from './loader';
import PostPreview from '../posts/postPreview';
import './home.css';

//homepage for the website, displays a preview of all of the posts
const Home = () =>{
    const [postList,setPostList] = useState([]);
    const [loader, setLoader] = useState(true);
    const [error,setError] = useState(false);

    const handleError = () => {
        setError(true);
        setPostList(null);
    };

    useEffect(()=>{
        const getPostData = async() =>{
            try{
                setError(false); //might need to change this
                const url = `https://vincephung-blog.glitch.me/api/posts`;
                const response = await fetch(url, {mode: 'cors'});

                if(response.ok){
                    const data = await response.json();
                    setPostList(data);
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
    },[]);
    const displayPosts = postList.filter((post)=>post.published);

    return(
        <div className = "home-container">
            {(loader) ? <Loader /> : ""}
            <h1 className="post-header">Current posts</h1>
            <div className ="post-container">
                <div className="post">
                {displayPosts.map((postInfo)=>(
                       <PostPreview 
                            title = {postInfo.title} 
                            key = {postInfo._id}
                            timestamp = {postInfo.timestamp} 
                            lastUpdate = {postInfo.lastUpdate || 'Not edited'}
                            image = {postInfo.image}
                            id = {postInfo._id}
                       />            
                ))}
                </div>
            </div>
        </div>
    )


}

export default Home;