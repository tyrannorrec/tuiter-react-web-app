import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return(`
            <div class="list-group mt-2">
                <a class="list-group-item fw-bold">
                    <div class="container-fluid ps-1 pt-1">
                        <p>Who to follow</p>
                    </div>
                </a>
                ${who.map(who => {
                        return(WhoToFollowListItem(who));
                    }).join('')
                }
            </div>
    `);
}

export default WhoToFollowList;