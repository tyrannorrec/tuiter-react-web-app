import React from "react";
import PostSummaryItem from "./post-summary-item";
import postsArray from "../data/posts";
// import {useSelector} from "react-redux";

const PostSummaryList = () => {
    // const postsArray = useSelector(state => state.tuits)

    return(
        <ul className="list-group mt-2">
            {
                postsArray.map(post =>
                    <PostSummaryItem key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;

