const NavigationSidebar = (active) => {

    const isActive = (active, actual) =>
        active === actual ? 'active':'';

    return(`
            <div class="list-group navigation mt-2 mb-2">
                    <a href="../HomeScreen/index.html" class="list-group-item">
                        <div class="row">
                            <div class="col col-12 col-xl-2">
                                <span class="fa-stack wd-normalize-margin-t">
                                    <i class="fa fa-square fa-2x fa-stack-1x text-primary"></i>
                                    <i class="fa fa-solid fa-t fa-stack-1x fa-inverse"></i>
                                </span>
                            </div>
                            <div class="col d-none d-xl-block col-xl-10"></div>
                        </div>
                    </a>
                    <a href="../HomeScreen/index.html" class="list-group-item ${isActive(active, 'home')}">
                        <div class="row">
                            <div class="col col-12 col-xl-2">
                                <i class="fa fa-home"></i>
                            </div>
                            <div class="col d-none d-xl-block col-xl-10">Home</div>
                        </div>
                    </a>
                    <a href="../ExploreScreen/index.html" class="list-group-item ${isActive(active, 'explore')}">
                        <div class="row">
                            <div class="col col-12 col-xl-2">
                                <i class="fa fa-hashtag wd-larger-size"></i>
                            </div>
                            <div class="col d-none d-xl-block col-xl-10">Explore</div>
                        </div>
                    </a>
                    <a href="../notifications.html" class="list-group-item ${isActive(active, 'notifications')}">
                        <div class="row">
                            <div class="col col-12 col-xl-2">
                                <i class="fa fa-bell wd-larger-size"></i>
                            </div>
                            <div class="col d-none d-xl-block col-xl-10">Notifications</div>
                        </div>
                    </a>
                    <a href="../messages.html" class="list-group-item ${isActive(active, 'messages')}">
                        <div class="row">
                            <div class="col col-12 col-xl-2">
                                <i class="fa fa-envelope wd-larger-size"></i>
                            </div>
                            <div class="col d-none d-xl-block col-xl-10">Messages</div>
                        </div>
                    </a>
                    <a href="../bookmarks/index.html" class="list-group-item ${isActive(active, 'bookmarks')}">
                        <div class="row">
                            <div class="col col-12 col-xl-2">
                                <i class="fa fa-bookmark wd-larger-size"></i>
                            </div>
                            <div class="col d-none d-xl-block col-xl-10">Bookmarks</div>
                        </div>
                    </a>
                    <a href="../lists.html" class="list-group-item ${isActive(active, 'lists')}">
                        <div class="row">
                            <div class="col col-12 col-xl-2">
                                <i class="fa fa-list wd-larger-size"></i>
                            </div>
                            <div class="col d-none d-xl-block col-xl-10">Lists</div>
                        </div>
                    </a>
                    <a href="../profile.html" class="list-group-item ${isActive(active, 'profile')}">
                        <div class="row">
                            <div class="col col-12 col-xl-2">
                                <i class="fa fa-user wd-larger-size"></i>
                            </div>
                            <div class="col d-none d-xl-block col-xl-10">Profile</div>
                        </div>
                    </a>
                    <a href="#" class="list-group-item ${isActive(active, 'more')}">
                        <div class="row">
                            <div class="col col-12 col-xl-2">
                                <span class="fa-stack wd-normalize-margin-more me-1">
                                    <i class="fa fa-circle fa-stack-1x"></i>
                                    <i class="fa fa-ellipsis-h fa-stack-1x wd-smaller-size wd-font-black"></i>
                                </span>
                            </div>
                            <div class="col d-none d-xl-block col-xl-10">More</div>
                        </div>
                    </a>
                </div>

                <button type="button" class="btn btn-primary wd-override-primary wd-max-width rounded-pill">
                    Tuit
                </button>
    `);
}

export default NavigationSidebar;