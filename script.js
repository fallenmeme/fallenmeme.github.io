// Show selected page only
function showPage(pageId) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("registerPage").style.display = "none";
    document.getElementById("portfolioPage").style.display = "none";

    document.getElementById(pageId).style.display = "flex";
}

// Register new user
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

    // Clear login fields after registering
    document.getElementById("loginUser").value = "";
    document.getElementById("loginPass").value = "";

    showPage("loginPage");
}

// Login
function login() {
    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    if (user === savedUser && pass === savedPass) {
        showPage("portfolioPage");
    } else {
        alert("Incorrect username or password!");
    }
}

// Password visibility toggles
function toggleLoginPass() {
    let field = document.getElementById("loginPass");
    field.type = field.type === "password" ? "text" : "password";
}

function toggleRegisterPass() {
    let field = document.getElementById("newPass");
    field.type = field.type === "password" ? "text" : "password";
}

// Start at login page
showPage("loginPage");
function logout() {
   console.log("Logout clicked");
   showPage('loginPage');
   document.getElementById("loginUser").value = "";
   document.getElementById("loginPass").value = "";
}


