import React, {useEffect, useReducer, useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TuitStats = ( {tuit} ) => {

    const dispatch = useDispatch()

    return (
        <>
            <div className="pt-2 ps-0 pe-0">
                <div className="row">
                    <Link to="#"
                          className="col-3 wd-no-decoration">
                        <FontAwesomeIcon icon="comment" className="text-secondary"></FontAwesomeIcon>
                        <div className="d-inline ms-2 text-secondary">{tuit.replies}</div>
                    </Link>
                    <Link to="#"
                          className="col-3 wd-no-decoration">
                        <FontAwesomeIcon icon="retweet" className="text-secondary"></FontAwesomeIcon>
                        <div className="d-inline ms-2 text-secondary">{tuit.retuits}</div>
                    </Link>
                    <Link to="#"
                          className="col-3 wd-no-decoration">
                        <FontAwesomeIcon icon="heart" className={`${tuit.liked ? 'text-danger' : 'text-secondary'}`}
                                         onClick={() => {
                                             if (tuit.liked) {
                                                 dispatch(updateTuitThunk({
                                                     ...tuit,
                                                     likes: tuit.likes - 1,
                                                     liked: !tuit.liked
                                                 }))
                                             } else {
                                                 dispatch(updateTuitThunk({
                                                     ...tuit,
                                                     likes: tuit.likes + 1,
                                                     liked: !tuit.liked
                                                 }))
                                             }
                                         }}>
                        </FontAwesomeIcon>
                        <div className="d-inline ms-2 text-secondary">{tuit.likes}</div>
                    </Link>
                    <Link to="#"
                          className="col-3 wd-no-decoration">
                        <FontAwesomeIcon icon="arrow-up-from-bracket" className="text-secondary"></FontAwesomeIcon>
                    </Link>
                </div>
            </div>
        </>
    )

}
export default TuitStats;