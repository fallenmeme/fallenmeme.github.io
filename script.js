function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => page.style.display = "none");
    document.getElementById(pageId).style.display = "block";
}

// ---------------- REGISTER FUNCTION ----------------
function register() {
    let user = document.getElementById("newUser").value.trim();
    let pass = document.getElementById("newPass").value.trim();

    if (!user || !pass) {
        alert("Please fill out all fields.");
        return;
    }

    // Store as an object in localStorage
    let users = JSON.parse(localStorage.getItem("users") || "{}");

    if (users[user]) {
        alert("Username already exists!");
        return;
    }

    users[user] = pass;
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please log in.");

    // Clear inputs
    document.getElementById("newUser").value = "";
    document.getElementById("newPass").value = "";
    document.getElementById("loginUser").value = "";
    document.getElementById("loginPass").value = "";

    showPage("loginPage");
}

// ---------------- LOGIN FUNCTION ----------------
function login() {
    let user = document.getElementById("loginUser").value.trim();
    let pass = document.getElementById("loginPass").value.trim();

    let users = JSON.parse(localStorage.getItem("users") || "{}");

    if (users[user] && users[user] === pass) {
        showPage("homePage");
    } else {
        alert("Incorrect username or password.");
    }
}

// ---------------- LOGOUT ----------------
function logout() {
    showPage("loginPage");
    document.getElementById("loginUser").value = "";
    document.getElementById("loginPass").value = "";
}
