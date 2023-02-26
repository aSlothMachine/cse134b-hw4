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

// user clicks the edit button.
function postEdit(event1) {

    // reveal dialog box.
    document.getElementById("addDialog").show();

    // reveal hidden save button to update blog post and hide save button for adding.
    document.getElementById("save-modify").removeAttribute("hidden");
    document.getElementById("save").setAttribute("hidden", "hidden");

    // load existing input values for blog editing.

    document.querySelector('#tital').value = event1.parentElement.querySelector('#title').innerHTML;
    document.querySelector('#date').value = event1.parentElement.querySelector('#date').innerHTML;
    document.querySelector('#summary').value = event1.parentElement.querySelector('#summary').innerHTML;


    // edit below


    // console.log("postEdit", event.parentNode.children[0]);

    // for (const post of postList) {

    //     // compare uniqueIDs with current post selected and post stored in local storage.
    //     if (event.parentElement.id === post.uniqueid) {
    //         console.log(post);
    //         post.title = event.parentElement.querySelector('#title').innerHTML;
    //         post.date = event.parentElement.querySelector('#date').innerHTML;
    //         post.summary = event.parentElement.querySelector('#summary').innerHTML;

    //         // break once found.
    //         console.log("found:", post.title);
    //         break;
    //     }

    // }

    // console.log("test", event.parentElement.querySelector('#title').innerHTML);
    // post.title =//
    // console.log("update test", document.querySelector('#tital').value);
    // post.date = date = document.querySelector('#date').value;
    // post.summary = document.querySelector('#summary').value;
    // restore into string again.


    // new save button for editing (keep here for scope).
    const saveBtn = document.getElementById("save-modify");
    saveBtn.addEventListener("click", () => {
        let postList = JSON.parse(localStorage.getItem('postList') || "[]");

        // these change the HTML webpage live, but bugs with changing other blogs when not supposed to.

        event1.parentElement.querySelector('#title').innerHTML = document.querySelector('#tital').value;
        event1.parentElement.querySelector('#date').innerHTML = document.querySelector('#date').value;
        event1.parentElement.querySelector('#summary').innerHTML = document.querySelector('#summary').value;

        // this permanently changes the files 

        for (const post of postList) {
            console.log("event.parentElement.id", event1.parentElement.id);
            console.log("post.uniqueid", post.uniqueid);
            // compare uniqueIDs with current post selected and post stored in local storage.
            if (event1.parentElement.id === post.uniqueid) {
                post.title= document.querySelector('#tital').value;
                post.date = document.querySelector('#date').value;
                post.summary = document.querySelector('#summary').value;
                console.log("post.title", post.title);
                console.log("document.querySelector('#tital').value", document.querySelector('#tital').value);
                // break once found.
                break;
            }
        }

        // console.log("--------------");

        localStorage.setItem("postList", JSON.stringify(postList));

        // hide and reveal appropriate buttons.
        document.getElementById("save-modify").setAttribute("hidden", "hidden");
        document.getElementById("save").removeAttribute("hidden");
        console.log("got here");
        // close and clear dialog box.
        document.getElementById("addDialog").close();
        // document.querySelector('#tital').value = "";
        // document.querySelector('#date').value = "";
        // document.querySelector('#summary').value = "";
    }, {once : true});
}