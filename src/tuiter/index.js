import React from 'react';
import {Routes, Route} from "react-router";
import NavigationSidebar from "./navigation-sidebar";
import HomeComponent from "./home";
import ExploreComponent from "./explore";
import WhoToFollowList from "./who-to-follow-list";
import PostSummaryList from "./post-summary-list";
import Labs from "../labs";

function Tuiter() {
    return (
        <div className="row">
            <div className="col col-2 col-lg-1 col-xl-2 col-xxl-2 ps-0 pe-3">
                <NavigationSidebar active="home"/>
            </div>

            <div className="col col-10 col-lg-7 col-xl-6 col-xxl-6 ps-2 pe-2 mb-4">
                <Routes>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>

            <div className="col d-none d-lg-block col-lg-4 col-xl-4 col-xxl-4 ps-3 pe-0">
                <Routes>
                    <Route path="home"    element={<PostSummaryList/>}/>
                    <Route path="explore" element={<WhoToFollowList/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Tuiter