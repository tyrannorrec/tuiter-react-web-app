import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="container p-0 pb-1 mt-2 wd-border-gray-left-right">
                    <div class="container p-0">
                        <div class="row mb-2 d-flex align-items-center">
                            <div class="col col-11">
                                <span><i class="fa fa-search wd-search-icon"></i></span>
                                <input type="search"
                                       class="form-control rounded-pill"
                                       id="search-query"
                                       placeholder="Search Tuiter">
                            </div>
                            <div class="col col-1">
                                <span>
                                    <a href="../settings.html">
                                        <i class="fas fa-cog fa-2x text-primary mx-auto float-end"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <ul class="nav nav-tabs mb-2">
                        <li class="nav-item">
                            <a class="nav-link active" href="../for-you.html">For you</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../trending.html">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../news.html">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../sports.html">Sports</a>
                        </li>
                        <li class="nav-item d-none d-md-block">
                            <a class="nav-link" href="../entertainment.html">Entertainment</a>
                        </li>
                    </ul>
                    <div class="row position-relative">
                        <img class="img-fluid"
                             src="../images/image-7.jpeg"
                             alt="image"/>
                        <div class="position-absolute bottom-0 mb-1 ms-3 text-white">
                            <h3>SpaceX's Starship</h3>
                        </div>
                    </div>
                </div>

                <div>
                    ${PostSummaryList()}
                </div>
                
    `);
}
export default ExploreComponent;
