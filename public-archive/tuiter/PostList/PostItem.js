const PostItem = (post) => {
    return (`
                <li class="list-group-item wd-bg-black pe-2">
                    <div class="row pt-1">
                        <div class="col col-2 col-md-auto">
                            <img class = "rounded-pill mt-1 wd-profile-picture-size"
                                 src="${post.profilePicture}"
                                 alt= "Profile"/></img>
                        </div>
                        <div class="col col-9 col-md-10 pe-0">
                            <p class="fw-bold d-inline">${post.userName}</p>
                            <i class="fa fa-check-circle d-inline wd-overwrite-primary"></i>
                            <p class="d-md-none"></p>
                            <p class="text-secondary wd-inline">&nbsp @${post.handle}</p>            
                            <p class="text-secondary wd-inline"><b>·</b>  ${post.time}</p>
                            <p class="mb-2">${post.tuit}</p>
                            
                            <span class="position-absolute top-0 end-0 mt-2 me-3 text-secondary">
                                <i class="fa fa-ellipsis-h"></i>
                            </span>
                            
                            <div class="card border-light bg-black mt-3 me-0">
                                <img class = "wd-max-width rounded-top wd-border-bottom border-light"
                                     src="${post.image}"
                                     alt= "Image"/>
                                </img>
                                <div class="ms-4 mt-2 mb-2 me-3">
                                    <p>${post.title}</p>
                                    <p class="text-secondary">${post.textSummary}</p>
                                    <a href="${post.link}"
                                        class="text-secondary d-inline">
                                        <i class="fa fa-link"></i>
                                        ${post.linkShort}
                                    </a>
                                </div>
                            </div>
                            
                            <div class="pt-3 pb-2 ps-0 pe-0">
                                <div class="d-flex justify-content-between col col-10">
                                    <a href="#"
                                        class="flex-box">
                                        <i class="far fa-comment text-secondary"></i>
                                        <p class="d-inline ms-2 text-secondary">${post.comments}</p>
                                    </a>
                                    <a href="#"
                                        class="flex-box">
                                        <i class="fa fa-retweet text-secondary"></i>
                                        <p class="d-inline ms-2 text-secondary">${post.retuits}</p>
                                    </a>
                                    <a href="#"
                                        class="flex-box">
                                        <i class="far fa-heart text-secondary"></i>
                                        <p class="d-inline ms-2 text-secondary">${post.likes}</p>
                                    </a>
                                    <a href="#"
                                        class="flex-box">
                                        <i class="fa fa-arrow-up-from-bracket text-secondary"></i>
                                    </a>
                                </div>
                                <div class="col col-2"></div>
                            </div>
                         
                        </div>
                    </div>
                </li>
    `)
}

export default PostItem;