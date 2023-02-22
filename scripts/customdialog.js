
// alert event listener.
const alertBtn = document.getElementById("alert");

alertBtn.addEventListener("click", () => {
    document.getElementById("alertDialog").show();
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
    document.getElementById("confirmDialog").show();
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