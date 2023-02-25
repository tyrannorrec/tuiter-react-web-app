import React from "react";
import postsArray from './posts.json';
import PostListItem from "./post-list-item";
import "./index.css";

const PostList = () => {
    return(
        <ul className="list-group mt-2">
            {
                postsArray.map(post =>
                    <PostListItem key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostList;

