import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavigationSidebar = ( ) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
    <>
        <div className="list-group navigation mt-2 mb-2">
            <Link to="/tuiter/home" className="list-group-item">
                <div className="row">
                    <div className="col col-12 col-xl-2">
                                <span className="fa-stack wd-normalize-margin-t">
                                    <FontAwesomeIcon icon="square" className="fa fa-stack-1x"></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={["fas", "t"]} className="fa fa-stack-1x wd-smaller-size text-secondary"></FontAwesomeIcon>
                                </span>
                    </div>
                    <div className="col d-none d-xl-block col-xl-10"></div>
                </div>
            </Link>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col col-12 col-xl-2">
                        <FontAwesomeIcon icon={"home"}></FontAwesomeIcon>
                    </div>
                    <div className="col d-none d-xl-block col-xl-10">Home</div>
                </div>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col col-12 col-xl-2">
                        <FontAwesomeIcon icon={"hashtag"}></FontAwesomeIcon>
                    </div>
                    <div className="col d-none d-xl-block col-xl-10">Explore</div>
                </div>
            </Link>
            <Link to="/tuiter/notifications" className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col col-12 col-xl-2">
                        <FontAwesomeIcon icon={"bell"}></FontAwesomeIcon>
                    </div>
                    <div className="col d-none d-xl-block col-xl-10">Notifications</div>
                </div>
            </Link>
            <Link to="/tuiter/messages" className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col col-12 col-xl-2">
                        <FontAwesomeIcon icon={"envelope"}></FontAwesomeIcon>
                    </div>
                    <div className="col d-none d-xl-block col-xl-10">Messages</div>
                </div>
            </Link>
            <Link to="/tuiter/bookmarks" className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col col-12 col-xl-2">
                        <FontAwesomeIcon icon={"bookmark"}></FontAwesomeIcon>
                    </div>
                    <div className="col d-none d-xl-block col-xl-10">Bookmarks</div>
                </div>
            </Link>
            <Link to="/tuiter/links" className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col col-12 col-xl-2">
                        <FontAwesomeIcon icon={"list"}></FontAwesomeIcon>
                    </div>
                    <div className="col d-none d-xl-block col-xl-10">Lists</div>
                </div>
            </Link>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col col-12 col-xl-2">
                        <FontAwesomeIcon icon={"user"}></FontAwesomeIcon>
                    </div>
                    <div className="col d-none d-xl-block col-xl-10">Profile</div>
                </div>
            </Link>
            <Link to="/tuiter/more" className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col col-12 col-xl-2">
                                <span className="fa-stack wd-normalize-margin-more me-1">
                                    <FontAwesomeIcon icon={"circle"} className="fa fa-stack-1x"></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={"ellipsis-h"} className="fa fa-stack-1x wd-smaller-size wd-font-black"></FontAwesomeIcon>
                                </span>
                    </div>
                    <div className="col d-none d-xl-block col-xl-10">More</div>
                </div>
            </Link>
        </div>

        <button type="button" className="btn btn-primary wd-override-primary wd-max-width rounded-pill">
            Tuit
        </button>
    </>
    )
};
export default NavigationSidebar;