
// alert event listener.
const alertBtn = document.getElementById("alert");

alertBtn.addEventListener("click", () => {

    document.getElementById("alertDialog").showModal();
    document.querySelector("#output").innerHTML = "";   // remove any previous output.

    // user clicks okay button.
    const okBtn = document.getElementById("ok");
    okBtn.addEventListener("click", () => {

        document.getElementById("alertDialog").close();

    }, false);
}, false);

// confirm event listener.
const confBtn = document.getElementById("confirm");

confBtn.addEventListener("click", function () {

    document.getElementById("confirmDialog").showModal();
    document.querySelector("#output").innerHTML = "";   // remove any previous output.

    // user clicks cancel button.
    const cancelBtn = document.getElementById("cancel-confirm");
    cancelBtn.addEventListener("click", function () {

        document.getElementById("confirmDialog").close();
        document.querySelector("#output").innerHTML = "The value returned by the confirm method is : false";
    });

    // user clicks ok button.
    const okBtn = document.getElementById("ok-confirm");
    okBtn.addEventListener("click", function () {

        document.getElementById("confirmDialog").close();
        document.querySelector("#output").innerHTML = "The value returned by the confirm method is : true";
    });
});

// safe prompt event listener.
const safeBtn = document.getElementById("prompt");

safeBtn.addEventListener("click", function () {

    document.getElementById("promptDialog").showModal();
    document.querySelector("#output").innerHTML = "";       // remove any previous output.
    document.querySelector('#usertext').value = "";         // reset input value.

    // user clicks ok button.
    const okBtn = document.getElementById("ok-prompt");
    okBtn.addEventListener("click", function () {

        const input = document.querySelector('#usertext');  // recieves <input> attributes.
        let dirty = input.value;                            // recieves string value.
        let clean = DOMPurify.sanitize(dirty);

        if (clean == null || clean.length == 0) {
            document.querySelector("#output").innerHTML = "User didn't enter anything";
        }
        else {
            document.querySelector("#output").innerHTML = clean;
        }

        document.getElementById("promptDialog").close();
    });

    // user clicks cancel button.
    const cancelBtn = document.getElementById("cancel-prompt");
    cancelBtn.addEventListener("click", function () {

        document.getElementById("promptDialog").close();
        document.querySelector("#output").innerHTML = "User didn't enter anything";
    });
});