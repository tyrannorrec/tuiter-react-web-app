import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import PostList from "../PostList";

function homeComponent() {
    $('#wd-home').append(`
        <div class="row">
        
            <div class="col col-2 col-lg-1 col-xl-2 col-xxl-2 ps-0 pe-3">
                ${NavigationSidebar('home')}
            </div>

            <div class="col col-10 col-lg-7 col-xl-6 col-xxl-6 ps-2 pe-2 mb-4">
                ${PostList()}
            </div>

            <div class="col d-none d-lg-block col-lg-4 col-xl-4 col-xxl-4 ps-3 pe-0">
                ${PostSummaryList()}
            </div>
        </div>
    `)
}

$(homeComponent);