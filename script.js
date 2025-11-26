// Show selected page only
function showPage(pageId) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("registerPage").style.display = "none";
    document.getElementById("portfolioPage").style.display = "none";

    document.getElementById(pageId).style.display = "block";
}

// Register user
function register() {
    let user = document.getElementById("newUser").value;
    let pass = document.getElementById("newPass").value;

    if (user === "" || pass === "") {
        alert("Please fill out all fields.");
        return;
    }

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Registration successful! Please log in.");
    showPage("loginPage");
}

// Login user
function login() {
    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    if (user === savedUser && pass === savedPass) {
        // No alert — go straight to portfolio
        showPage("portfolioPage");
    } else {
        alert("Incorrect username or password!");
    }
}

/* PASSWORD SHOW/HIDE */

// Login password toggle
function toggleLoginPass() {
    let field = document.getElementById("loginPass");
    field.type = field.type === "password" ? "text" : "password";
}

// Register password toggle
function toggleRegisterPass() {
    let field = document.getElementById("newPass");
    field.type = field.type === "password" ? "text" : "password";
}

// Show login page on start
showPage("loginPage");
