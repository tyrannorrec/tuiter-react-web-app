import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PostSummaryItem = ( {post} ) => {

    return (
                <li className="list-group-item">
                <div className="container p-1">
                    <div className="row">
                        <div className="col col-9 col-md-10 col-lg-10">
                            <div className="text-secondary">{post.topic}</div>
                            <div className="fw-bold d-inline">{post.userName} {' '}</div>
                            <FontAwesomeIcon icon="check-circle" className="wd-overwrite-primary"></FontAwesomeIcon>
                            <div className="text-secondary d-inline ms-2">- {post.time}</div>
                            <p className="mb-2">{post.title}</p>
                            {post.hasOwnProperty('tuits') ?
                                <div className="text-secondary">{post.tuits} Tuits</div> : ''}
                        </div>
                        <div className="col col-3 col-md-2 col-lg-2 p-2">
                            <img className="img-fluid rounded-3"
                                 src={`/tuiter/images/${post.image}`}
                                 alt="img"/>
                        </div>
                    </div>
                </div>
            </li>
    );
};
export default PostSummaryItem;