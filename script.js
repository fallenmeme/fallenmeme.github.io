// ================= PAGE NAVIGATION =================
function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.style.display = "none";
    });
    document.getElementById(pageId).style.display = "block";
}

// Show login page initially
showPage('loginPage');

// ================= TOGGLE PASSWORD =================
function toggleLoginPass() {
    let pass = document.getElementById("loginPass");
    pass.type = (pass.type === "password") ? "text" : "password";
}

function toggleRegisterPass() {
    let pass = document.getElementById("newPass");
    pass.type = (pass.type === "password") ? "text" : "password";
}

// ================= USER AUTH =================
let users = {};

function register() {
    let username = document.getElementById("newUser").value.trim();
    let password = document.getElementById("newPass").value;

    if(username === "" || password === "") {
        alert("Please fill out all fields!");
        return;
    }

    if(users[username]) {
        alert("Username already exists!");
        return;
    }

    users[username] = password;
    alert("Registration successful! You can now login.");
    document.getElementById("newUser").value = "";
    document.getElementById("newPass").value = "";
    showPage("loginPage");
}

function login() {
    let username = document.getElementById("loginUser").value.trim();
    let password = document.getElementById("loginPass").value;

    if(users[username] && users[username] === password) {
        alert("Login successful!");
        document.getElementById("loginUser").value = "";
        document.getElementById("loginPass").value = "";
        showPage("portfolioPage");
    } else {
        alert("Invalid username or password!");
    }
}

function logout() {
    showPage("loginPage");
}
