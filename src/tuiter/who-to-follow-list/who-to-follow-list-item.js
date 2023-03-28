import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const WhoToFollowListItem = ( {who} ) => {
    return(
        <li className="list-group-item">
            <div className="container-fluid ps-0 pe-5">
                <div className="row">
                    <div className="col-lg-auto">
                        <img className="rounded-circle" height={48} alt="img"
                             src={`/tuiter/images/${who.avatarIcon}`}/>
                    </div>
                    <div className="col-lg-5 col-xl-6 col-xxl-7 ps-0 pe-0">
                        <p className="fw-bold d-inline">{who.userName}{' '}</p>
                        <FontAwesomeIcon icon="check-circle" className="d-inline wd-overwrite-primary"></FontAwesomeIcon>
                        <p className="m-0">@{who.handle}</p>
                    </div>
                    <div className="col-lg-2 col-xl-3 col-xxl-2 ps-4">
                        <button className="btn btn-primary rounded-pill position-absolute end-0 mt-1 me-2">Follow</button>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;