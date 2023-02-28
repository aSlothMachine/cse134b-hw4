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
    document.getElementById("addDialog").showModal();

    // reveal edit dialog's hidden save button and hide add dialog's save button.
    document.getElementById("save-modify").removeAttribute("hidden");
    document.getElementById("save").setAttribute("hidden", "hidden");

    // load existing input values for blog editing into form.
    document.querySelector('#tital').value = event1.parentElement.querySelector('#title').innerHTML;
    document.querySelector('#date').value = event1.parentElement.querySelector('#date').innerHTML;
    document.querySelector('#summary').value = event1.parentElement.querySelector('#summary').innerHTML;

    // new save button for editing (keep here for scope).
    const saveBtn = document.getElementById("save-modify");
    saveBtn.addEventListener("click", () => {

        let postList = JSON.parse(localStorage.getItem('postList') || "[]");

        // update the page live.
        event1.parentElement.querySelector('#title').innerHTML = document.querySelector('#tital').value;
        event1.parentElement.querySelector('#date').innerHTML = document.querySelector('#date').value;
        event1.parentElement.querySelector('#summary').innerHTML = document.querySelector('#summary').value;

        // change the post's fields to maintain update.
        for (const post of postList) {

            // compare uniqueIDs with current post selected and post stored in local storage.
            if (event1.parentElement.id === post.uniqueid) {
                post.title = document.querySelector('#tital').value;
                post.date = document.querySelector('#date').value;
                post.summary = document.querySelector('#summary').value;

                // break once found.
                break;
            }
        }

        localStorage.setItem("postList", JSON.stringify(postList));

        // hide edit dialog's save button and reveal add dialog's save button.
        document.getElementById("save-modify").setAttribute("hidden", "hidden");
        document.getElementById("save").removeAttribute("hidden");

        // Only close dialog box; not clear.
        document.getElementById("addDialog").close();
        document.querySelector('#tital').value = "";
        document.querySelector('#date').value = "";
        document.querySelector('#summary').value = "";

    }, { once: true }); // ensure event listener is fired once.
}