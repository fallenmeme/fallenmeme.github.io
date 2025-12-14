function showRegister() {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("register-page").style.display = "flex";
}

function showLogin() {
    document.getElementById("register-page").style.display = "none";
    document.getElementById("login-page").style.display = "flex";
}

// REGISTER
function register() {
    let user = document.getElementById("reg-username").value;
    let pass = document.getElementById("reg-password").value;
    let confirm = document.getElementById("reg-confirm").value;
    
    if (user === "" || pass === "" || confirm === "") {
        alert("Please fill in all fields!");
        return;
    }
    
    if (pass !== confirm) {
        alert("Passwords do not match!");
        return;
    }
    
    localStorage.setItem("savedUser", user);
    localStorage.setItem("savedPass", pass);
    
    alert("Account created successfully!");
    
    // Clear registration fields
    document.getElementById("reg-username").value = "";
    document.getElementById("reg-password").value = "";
    document.getElementById("reg-confirm").value = "";
    
    // Clear login fields before showing login page
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    
    showLogin();
}

// LOGIN
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    
    let savedUser = localStorage.getItem("savedUser");
    let savedPass = localStorage.getItem("savedPass");
    
    if (user === savedUser && pass === savedPass) {
        document.getElementById("login-page").style.display = "none";
        document.getElementById("portfolio-page").style.display = "block";
    } else {
        alert("Incorrect username or password!");
    }
}

// LOGOUT
function logout() {
    // Ask for confirmation before logging out
    if (confirm("Are you sure you want to log out?")) {
        // Clear login fields
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        
        // Switch to login page
        document.getElementById("portfolio-page").style.display = "none";
        document.getElementById("login-page").style.display = "flex";
    }
    // If user clicks "Cancel", nothing happens and they stay on the portfolio page
}

