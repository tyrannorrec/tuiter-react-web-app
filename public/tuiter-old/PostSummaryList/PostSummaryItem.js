const PostSummaryItem = (post) => {

    var tuitsString = "";

    if (post.hasOwnProperty('tuits')) {
        tuitsString = (`
                        <p class="text-secondary">${post.tuits} Tuits</p>
                        `)
    }

    return (`
                <li class="list-group-item">
                <div class="container p-1">
                    <div class="row">
                        <div class="col col-9 col-md-10 col-lg-10">
                            <p class="text-secondary">${post.topic}</p>
                            <p class="fw-bold d-inline">${post.userName}</p>
                            <i class="fa fa-check-circle d-inline wd-overwrite-primary"></i>
                            <p class="text-secondary d-inline">- ${post.time}</p>
                            <p class="mb-2">${post.title}</p>
            `) + tuitsString +
            (`
                        </div>
                        <div class="col col-3 col-md-2 col-lg-2 p-2">
                            <img class="img-fluid rounded-3"
                                 src="${post.image}"
                                 alt="thumbnail"/>
                            <!--i class="fa fa-ellipsis-h text-secondary position-absolute end-0 me-3"></i-->
                        </div>
                    </div>
                </div>
            </li>
    `)
}

export default PostSummaryItem;