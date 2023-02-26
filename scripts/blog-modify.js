// user clicks the delete button.
function postDelete(event) {

    // delete blog post from local storage.
    let postList = JSON.parse(localStorage.getItem('postList') || "[]");
    
    // find blog we want to delete.
    let counter = 0;

    for (const post of postList) {
        
        // compare uniqueIDs with current post selected and post stored in local storage.
        if (event.parentElement.id === post.uniqueid) {
            postList.splice(counter, 1);

            // break once found.
            break;
        }

        counter++;
    }
    
    // restore into string again.
    localStorage.setItem("postList", JSON.stringify(postList));

    // remove blog post from displaying.
    event.parentElement.remove();
}

// user clicks the edit button. ???????????????????
function postEdit(event) {

    let postList = JSON.parse(localStorage.getItem('postList') || "[]");

    for (const post of postList) {
        
        // compare uniqueIDs with current post selected and post stored in local storage.
        if (event.parentElement.id === post.uniqueid) {
           
            post.title = event.parentElement.querySelector('#title').innerHTML;
            post.date = event.parentElement.querySelector('#date').innerHTML;
            post.summary = event.parentElement.querySelector('#summary').innerHTML;
 
            // break once found.
            break;
        }
    }

    // restore into string again.
    localStorage.setItem("postList", JSON.stringify(postList));
}