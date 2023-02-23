import {cancel, save} from './blog-cancel-save.js';

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
