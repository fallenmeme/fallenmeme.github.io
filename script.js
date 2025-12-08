// LOGIN FUNCTION
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let error = document.getElementById("error");

    if (user === "" || pass === "") {
        error.innerHTML = "Please fill out all fields.";
        return;
    }

    // DEFAULT SAMPLE LOGIN
    if (user === "admin" && pass === "1234") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "portfolio.html";
    } else {
        error.innerHTML = "Invalid username or password.";
    }
}

// LOGOUT FUNCTION
function logout() {
    localStorage.removeItem("loggedIn");
    alert("You have logged out.");
    window.location.href = "index.html";
}

// RESTRICT PORTFOLIO PAGE WHEN NOT LOGGED IN
if (window.location.pathname.includes("portfolio.html")) {
    if (!localStorage.getItem("loggedIn")) {
        alert("You must login first.");
        window.location.href = "index.html";
    }
}

