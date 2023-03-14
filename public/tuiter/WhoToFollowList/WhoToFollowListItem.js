const WhoToFollowListItem = (who) => {
    return(`
            <a href="#" class="list-group-item wd-bg-gray">
            <div class="container-fluid ps-0 pe-5">
                <div class="row">
                    <div class="col col-lg-auto col-xl-auto col-xxl-auto">
                        <img class="img-fluid rounded-circle wd-profile-picture-size"
                             src="../images/${who.avatarIcon}"
                             alt="thumbnail"/>
                    </div>
                    <div class="col col-lg-5 col-xl-6 col-xxl-7 ps-0 pe-0">
                        <p class="fw-bold d-inline">${who.userName}</p>
                        <i class="fa fa-check-circle d-inline wd-overwrite-primary"></i>
                        <p class="m-0">@${who.handle}</p>
                    </div>
                    <div class="col col-lg-2 col-xl-3 col-xxl-2 ps-4">
                        <button type="button" class="btn btn-primary rounded-pill mt-1 ps-3 pe-3">
                            Follow
                        </button>
                    </div>
                </div>
            </div>
            </a>
    `);
}

export default WhoToFollowListItem;