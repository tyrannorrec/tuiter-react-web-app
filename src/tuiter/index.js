import React from 'react';
import {Routes, Route} from "react-router";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import NavigationSidebar from "./navigation-sidebar";
import HomeComponent from "./home";
import ExploreComponent from "./explore";
import ProfileComponent from "./profile";
import EditProfileComponent from "./edit-profile";
import WhoToFollowList from "./who-to-follow-list";
import PostSummaryList from "./post-summary-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
const store = configureStore({
    reducer: {who: whoReducer, tuitsData: tuitsReducer, profile: profileReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row">
                <div className="col col-2 col-lg-1 col-xl-2 col-xxl-2 ps-0 pe-3">
                    <NavigationSidebar active="home"/>
                </div>

                <div className="col col-10 col-lg-7 col-xl-6 col-xxl-6 ps-2 pe-2 mb-4">
                    <Routes>
                        <Route path="home"    element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                        <Route path="edit-profile" element={<EditProfileComponent/>}/>
                    </Routes>
                </div>

                <div className="col d-none d-lg-block col-lg-4 col-xl-4 col-xxl-4 ps-3 pe-0">
                    <Routes>
                        {/*<Route path="home"    element={<PostSummaryList/>}/>*/}
                        <Route path="home"    element={<WhoToFollowList/>}/>
                        <Route path="explore" element={<WhoToFollowList/>}/>
                        <Route path="profile" element={<WhoToFollowList/>}/>
                        <Route path="edit-profile" element={<WhoToFollowList/>}/>
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter