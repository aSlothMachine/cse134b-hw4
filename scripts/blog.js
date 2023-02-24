// initiate here.
function main() {

    // add button event listener.
    const addBtn = document.getElementById("add");
    addBtn.addEventListener("click", () => {

        // reveal dialog box.
        document.getElementById("addDialog").show();

        // user clicks cancel button 
        const cancelBtn = document.getElementById("cancel");
        cancelBtn.addEventListener("click", cancel);

        // user clicks save button.
        const saveBtn = document.getElementById("save");
        saveBtn.addEventListener("click", save);
    }, false);

    // display all posts in local storage on load.
    displayPosts();
}

// user clicks cancel button within dialog.
function cancel(event) {
    // close and clear dialog box.
    document.getElementById("addDialog").close();
    document.querySelector('#tital').value = "";
    document.querySelector('#date').value = "";
    document.querySelector('#summary').value = "";
}

// user clicks save button within dialog.
function save(event) {

    // store blog post.
    let postList = JSON.parse(localStorage.getItem('postList') || "[]");

    let blogInfo = {
        // may need an ID field to track it when editing or deleting. 
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

// show all blog posts in local storage.
function displayPosts() {
    let localPosts = JSON.parse(localStorage.getItem('postList') || "[]");
    let output;

    for (const post of localPosts) {
        output = document.querySelector('#output');
        output.insertAdjacentHTML('afterbegin', postHTMLMarkup(post));
    }
}

// format blog posts here.
function postHTMLMarkup(post) {

    let postMarkup = `
            <h2>${post.title}</h2>
            <p><b>${post.date}</b></p>
            <p>${post.summary}</p>
            <button onclick=\"postEdit(this)\">Edit</button>
            <button onclick=\"postDelete(this)\">Delete</button>`;
        
    return postMarkup;
}

window.addEventListener('DOMContentLoaded', main);

// make the postEdit and postDelte functions. Possibly move these into a new JS file.