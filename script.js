// Show a specific page
function showPage(pageId) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("registerPage").style.display = "none";
    document.getElementById("portfolioPage").style.display = "none";

    document.getElementById(pageId).style.display = "block";
}

// Register user
function register() {
    let username = document.getElementById("newUser").value;
    let password = document.getElementById("newPass").value;

    if(username === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registered! Please login.");
    showPage("loginPage");
}

// Login user
function login() {
    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    let username = document.getElementById("loginUser").value;
    let password = document.getElementById("loginPass").value;

    if(username === savedUser && password === savedPass) {
        showPage("portfolioPage"); // Go directly to portfolio
    } else {
        alert("Incorrect username or password!");
    }
}

// Toggle show/hide password
function toggleLoginPass() {
    let passField = document.getElementById("loginPass");
    if(passField.type === "password") passField.type = "text";
    else passField.type = "password";
}

function toggleRegisterPass() {
    let passField = document.getElementById("newPass");
    if(passField.type === "password") passField.type = "text";
    else passField.type = "password";
}

// Show login page at start
showPage("loginPage");
