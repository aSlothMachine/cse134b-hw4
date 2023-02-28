window.addEventListener('DOMContentLoaded', main);  // initiate here.
var posted;                                         // global variable to grab edited post information.

function main() {

    // add button event listener.
    const addBtn = document.getElementById("add");
    addBtn.addEventListener("click", () => {

        // open dialog box. 
        document.getElementById("addDialog").showModal();

    }, false);

    // user clicks cancel button 
    const cancelBtn = document.getElementById("cancel");
    cancelBtn.addEventListener("click", cancel);

    // user clicks save button when adding post.
    const saveBtnAdd = document.getElementById("save");
    saveBtnAdd.addEventListener("click", save);

    // user clicks save button when editing post.
    const saveBtnEdit = document.getElementById("save-modify");
    saveBtnEdit.addEventListener("click", saveEdit);

    // display all posts in local storage on load.
    let localPosts = JSON.parse(localStorage.getItem('postList') || "[]");
    let output;

    for (const post of localPosts) {
        output = document.querySelector('#output');
        output.insertAdjacentHTML('afterbegin', postHTMLMarkup(post));
    }
}

// user clicks cancel button within dialog.
function cancel(event) {

    // check corner case if user cancels editing post.
    let element = document.getElementById("save-modify");
    let hidden = element.getAttribute("hidden");

    if (!hidden) {
        element.setAttribute("hidden", "hidden");
    }

    element = document.getElementById("save");
    hidden = element.getAttribute("hidden");

    if (hidden) {
        element.removeAttribute("hidden");
    }

    // close and clear dialog box.
    document.getElementById("addDialog").close();
    document.querySelector('#tital').value = "";
    document.querySelector('#date').value = "";
    document.querySelector('#summary').value = "";
}

// user clicks save button within dialog.
function save(event) {

    // access local storage.
    let postList = JSON.parse(localStorage.getItem('postList') || "[]");

    // create an object literal to store in local storage.
    let blogInfo = {
        uniqueid: Math.random().toString(36).substring(2, 9),
        title: document.querySelector('#tital').value,
        date: document.querySelector('#date').value,
        summary: document.querySelector('#summary').value
    };

    postList.push(blogInfo);
    localStorage.setItem("postList", JSON.stringify(postList));

    // close and clear dialog box.
    document.getElementById("addDialog").close();
    document.querySelector('#tital').value = "";
    document.querySelector('#date').value = "";
    document.querySelector('#summary').value = "";

    // show new post here at top of page. 
    let output = document.querySelector('#output');
    output.insertAdjacentHTML('afterbegin', postHTMLMarkup(blogInfo));
}

function saveEdit(event) {

    let postList = JSON.parse(localStorage.getItem('postList') || "[]");

    // update the page live.
    window.posted.parentElement.querySelector('#title').innerHTML = document.querySelector('#tital').value;
    window.posted.parentElement.querySelector('#date').innerHTML = document.querySelector('#date').value;
    window.posted.parentElement.querySelector('#summary').innerHTML = document.querySelector('#summary').value;

    // change the post's fields to maintain update.
    for (const post of postList) {

        // compare uniqueIDs with current post selected and post stored in local storage.
        if (window.posted.parentElement.id === post.uniqueid) {
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
}

// format blog posts here.
function postHTMLMarkup(post) {

    let postMarkup = `<article id=\"${post.uniqueid}\">
            <h2 id="title">${post.title}</h2>
            <p id="date">${post.date}</p>
            <p id="summary">${post.summary}</p>
            <button onclick=\"postEdit(this)\">Edit</button>
            <button onclick=\"postDelete(this)\">Delete</button></article>`;

    return postMarkup;
}