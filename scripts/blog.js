// initiate here.
window.addEventListener('DOMContentLoaded', main);

function main() {

    // add button event listener.
    const addBtn = document.getElementById("add");
    addBtn.addEventListener("click", () => {
        document.getElementById("addDialog").show();
    }, false);

    // user clicks cancel button 
    const cancelBtn = document.getElementById("cancel");
    cancelBtn.addEventListener("click", cancel);

    // user clicks save button.
    const saveBtn = document.getElementById("save");
    saveBtn.addEventListener("click", save);

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