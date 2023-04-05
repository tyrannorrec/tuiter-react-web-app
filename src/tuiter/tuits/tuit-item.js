import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {deleteTuit} from "../reducers/tuits-reducer";
const TuitItem = ( {tuit} ) => {

    const liked = tuit.liked
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(

        <li className="list-group-item bg-black pe-3">
            <div className="row pt-1">
                <div className="col col-2 col-md-auto">
                    <img className= "rounded-pill mt-1 wd-profile-picture-size"
                         src={`/tuiter/images/${tuit.image}`}
                         alt= "img"/>
                </div>
                <div className="col col-9 col-md-10 pe-0">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <div className="fw-bold d-inline">{tuit.userName}</div>
                    <FontAwesomeIcon icon="check-circle" className="d-inline text-primary ms-2"></FontAwesomeIcon>
                    <div className="d-md-none"></div>
                    <div className="text-secondary d-inline ms-2">@{tuit.handle}</div>
                    <div className="text-secondary d-inline">{' '}<b>·</b> {tuit.time}</div>
                    <div className="mb-2">{tuit.tuit}</div>

                    <span className="position-absolute top-0 end-0 mt-2 me-3 text-secondary">
                                    <i className="fa fa-ellipsis-h"></i>
                                </span>

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
                                <FontAwesomeIcon icon="heart" className={`text-secondary 
                                                ${liked ? 'text-danger' : 'text-secondary'}`}></FontAwesomeIcon>
                                <div className="d-inline ms-2 text-secondary">{tuit.likes}</div>
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
export default TuitItem;