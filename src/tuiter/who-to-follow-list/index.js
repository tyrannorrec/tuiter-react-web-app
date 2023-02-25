import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return(
        <ul className="list-group mt-2">
            <a className="list-group-item">
                <div className="container-fluid ps-1 pt-1">
                    <h5 className="fw-bold">Who to follow</h5>
                </div>
            </a>
            {
                whoArray.map(who =>
                    <WhoToFollowListItem key={who._id} who={who}/>
                )
            }
        </ul>
    );
};

export default WhoToFollowList;