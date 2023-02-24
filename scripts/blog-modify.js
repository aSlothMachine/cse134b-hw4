// user clicks the delete button.
function postDelete(post) {

    // delete blog post from local storage.
    let postList = JSON.parse(localStorage.getItem('postList') || "[]");

    let blogInfo = {
        uniqueid: post.parentElement.id,
        title: post.parentElement.querySelector('#title').innerHTML,
        date: post.parentElement.querySelector('#date').innerHTML,
        summary: post.parentElement.querySelector('#summary').innerHTML
    };
    
    // find blog we want to delete.

    let counter = 0;
    for (const post of postList) {
        
        // compare uniqueIDs.
        if (blogInfo.uniqueid === post.uniqueid) {
            postList.splice(counter, 1);

            // break once found.
            break;
        }
        counter++;
    }
    
    // restore into string again.
    localStorage.setItem("postList", JSON.stringify(postList));

    // remove blog post from displaying.
    post.parentElement.remove();
}

///edit below now.
// user clicks the edit button.
function postEdit(post) {

}