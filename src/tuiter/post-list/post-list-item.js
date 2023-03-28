import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./index.css";

const PostListItem = ( {post} ) => {
    return (

        <li className="list-group-item bg-black pe-2">
            <div className="row pt-1">
                <div className="col col-2 col-md-auto">
                    <img className= "rounded-pill mt-1 wd-profile-picture-size"
                         src={`/tuiter/images/${post.profilePicture}`}
                         alt= "img"/>
                </div>
                <div className="col col-9 col-md-10 pe-0">
                    <div className="fw-bold d-inline">{post.userName} {' '}</div>
                    <FontAwesomeIcon icon="check-circle" className="d-inline wd-overwrite-primary"></FontAwesomeIcon>
                    <div className="d-md-none"></div>
                    <div className="text-secondary d-inline ms-2">@{post.handle}</div>
                    <div className="text-secondary d-inline">{' '}<b>·</b>  {post.time}</div>
                    <div className="mb-2">{post.tuit}</div>

                    <span className="position-absolute top-0 end-0 mt-2 me-3 text-secondary">
                                    <i className="fa fa-ellipsis-h"></i>
                                </span>

                    <div className="card border-light bg-black mt-3 me-0">
                        <img className= "wd-max-width rounded-top wd-border-bottom border-light"
                             src={`/tuiter/images/${post.image}`}
                             alt= "Image"/>
                    <div className="ms-4 mt-2 mb-2 me-3">
                        <div>{post.title}</div>
                        <div className="text-secondary">{post.textSummary}</div>
                        <Link to={`${post.link}`}
                           className="text-secondary d-inline wd-no-decoration">
                            <FontAwesomeIcon icon="link" className="me-2"></FontAwesomeIcon>
                            {post.linkShort}
                        </Link>
                    </div>
                </div>

            <div className="pt-3 pb-2 ps-0 pe-0">
                <div className="row">
                    <Link to="#"
                       className="col-3 wd-no-decoration">
                        <FontAwesomeIcon icon="comment" className="text-secondary"></FontAwesomeIcon>
                        <div className="d-inline ms-2 text-secondary">{post.comments}</div>
                    </Link>
                    <Link to="#"
                       className="col-3 wd-no-decoration">
                        <FontAwesomeIcon icon="retweet" className="text-secondary"></FontAwesomeIcon>
                        <div className="d-inline ms-2 text-secondary">{post.retuits}</div>
                    </Link>
                    <Link to="#"
                       className="col-3 wd-no-decoration">
                        <FontAwesomeIcon icon="heart" className="text-secondary"></FontAwesomeIcon>
                        <div className="d-inline ms-2 text-secondary">{post.likes}</div>
                    </Link>
                    <Link to="#"
                       className="col-3 wd-no-decoration">
                        <FontAwesomeIcon icon="arrow-up-from-bracket" className="text-secondary"></FontAwesomeIcon>
                    </Link>
                </div>

            </div>

            </div>
            </div>
        </li>
    );
};
export default PostListItem;