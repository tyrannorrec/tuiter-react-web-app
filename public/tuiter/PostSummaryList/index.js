import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
                <ul class="list-group mt-2 mb-2 wd-border-gray">

                    ${posts.map(post => {
                        return(PostSummaryItem(post));
                    }).join('')}
                
                </ul>
   
    `)
}

export default PostSummaryList;