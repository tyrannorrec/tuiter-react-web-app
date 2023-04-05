import React from "react";
import PostList from "../post-list";
import WhatsHappening from "./whats-happening";
import Tuits from "../tuits";

const HomeComponent = () => {
    return(
        <>
            <h5 className="mt-3 ms-1 fw-bold">Home</h5>
            {/*<PostList/>*/}
            <WhatsHappening/>
            <Tuits/>
        </>
    );
};
export default HomeComponent;