
// user clicks dark mode button, so change variables.
function darkMode() {
    // Get the root element
    var r = document.querySelector(':root');

    // Set the value of variables to other variable values.
    r.style.setProperty('--text-primary', '#fff');
    r.style.setProperty('--text-secondary', '#fff');
    r.style.setProperty('--text-tertiary', 'rgba(0, 136, 169, 1)');
    r.style.setProperty('--bg-body', '#312F2F');

    // change button HTML and background color.
    document.getElementById('contactBtn').style.background='#FE621D';
    document.getElementById('darkPage').style.background='#FE621D';
    document.getElementById('darkPage').innerHTML = "Light Mode";
    document.getElementById("darkPage").onclick = lightMode;
}

// user clicks dark mode button, so revert changes.
function lightMode() {
    // Get the root element
    var r = document.querySelector(':root');

    // Set the value of variables to other variable values.
    r.style.setProperty('--text-primary', '#312F2F');
    r.style.setProperty('--text-secondary', 'rgba(0, 136, 169, 1)');
    r.style.setProperty('--text-tertiary', '#FE621D');
    r.style.setProperty('--bg-body', '#fff');

    // change button HTML and background color.
    document.getElementById('contactBtn').style.background='rgba(0, 136, 169, 1)';
    document.getElementById('darkPage').style.background='rgba(0, 136, 169, 1)';
    document.getElementById('darkPage').innerHTML = "Dark Mode";
    document.getElementById("darkPage").onclick = darkMode;
}