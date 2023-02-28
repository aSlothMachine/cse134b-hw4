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
function postEdit(event) {

    // reveal dialog box.
    document.getElementById("addDialog").showModal();

    // reveal edit dialog's hidden save button and hide add dialog's save button.
    document.getElementById("save-modify").removeAttribute("hidden");
    document.getElementById("save").setAttribute("hidden", "hidden");

    // load existing input values for blog editing into form.
    console.log("outside save function", document.querySelector('#tital').value = event.parentElement.querySelector('#title').innerHTML);
    document.querySelector('#tital').value = event.parentElement.querySelector('#title').innerHTML;
    document.querySelector('#date').value = event.parentElement.querySelector('#date').innerHTML;
    document.querySelector('#summary').value = event.parentElement.querySelector('#summary').innerHTML;

    // send blog post edit to window.
    posted = event;
}