export { cancel, save };

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

    // initiate array to store user input.
    const blogInfo = [
        document.querySelector('#tital').value,
        document.querySelector('#date').value,
        document.querySelector('#summary').value
    ];

    // close and clear dialog box.
    document.getElementById("addDialog").close();
    document.querySelector('#tital').value = "";
    document.querySelector('#date').value = "";
    document.querySelector('#summary').value = "";

    // store blog post.
    storePost(blogInfo);
}

function storePost(event) {

}