import React from "react";
import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./index.css";
import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
    return(
        <>
            <div className="container p-0 pb-1 mt-2 wd-border-gray-left-right">
                <div className="container p-0">
                    <div className="row mb-2 d-flex align-items-center">
                        <div className="col col-11">
                            <span><FontAwesomeIcon icon="search" className="wd-search-icon"></FontAwesomeIcon></span>
                            <input type="search"
                                   className="form-control rounded-pill"
                                   id="search-query"
                                   placeholder="Search Tuiter"></input>
                        </div>
                        <div className="col col-1">
                                <span>
                                    <a href="../settings.html">
                                        <FontAwesomeIcon icon="cog" className="fas fa-2x text-primary mx-auto float-end"></FontAwesomeIcon>
                                    </a>
                                </span>
                        </div>
                    </div>
                </div>

                <ul className="nav nav-tabs mb-2">
                    <li className="nav-item">
                        <NavLink to="tuiter/for-you" className="nav-link active" >For you</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="tuiter/trending" className="nav-link" >Trending</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="tuiter/news" className="nav-link" >News</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="tuiter/sports" className="nav-link" >Sports</NavLink>
                    </li>
                    <li className="nav-item d-none d-md-block">
                        <NavLink to="tuiter/entertainment" className="nav-link" >Entertainment</NavLink>
                    </li>
                </ul>
                <div className="row position-relative">
                    <img className="img-fluid"
                         src="/tuiter/images/image-7.jpeg"
                         alt="img"/>
                    <div className="position-absolute bottom-0 mb-1 ms-3 text-white">
                        <h3>SpaceX's Starship</h3>
                    </div>
                </div>
            </div>

            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;