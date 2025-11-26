function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll(".page").forEach(page => {
        page.style.display = "none";
    });

    // Show selected page
    document.getElementById(pageId).style.display = "block";
}

// ---------------- REGISTER FUNCTION ----------------
function register() {
    let user = document.getElementById("newUser").value.trim();
    let pass = document.getElementById("newPass").value.trim();

    if (user === "" || pass === "") {
        alert("Please fill out all fields.");
        return;
    }

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Registration successful! Please log in.");

    // Clear register inputs
    document.getElementById("newUser").value = "";
    document.getElementById("newPass").value = "";

    // Clear login inputs also
    document.getElementById("loginUser").value = "";
    document.getElementById("loginPass").value = "";

    showPage("loginPage");
}

// ---------------- LOGIN FUNCTION ----------------
function login() {
    let user = document.getElementById("loginUser").value.trim();
    let pass = document.getElementById("loginPass").value.trim();

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if (user === savedUser && pass === savedPass) {
        showPage("homePage");
    } else {
        alert("Incorrect username or password.");
    }
}

// ---------------- LOGOUT ----------------
function logout() {
    showPage("loginPage");
}
