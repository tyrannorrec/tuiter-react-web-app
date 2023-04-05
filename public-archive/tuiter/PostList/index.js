import PostItem from "./PostItem.js"
import posts from "./posts.js";

const Index = () => {
    return (`

                <div class="list-group mt-2">
                    ${posts.map(post => {
                        return(PostItem(post));
                    }).join('')}
                </div>
    
    `)
}

export default Index;