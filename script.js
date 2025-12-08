function logout() {
    // Hide portfolio page
    document.getElementById("portfolio-page").style.display = "none";

    // Show login page
    document.getElementById("login-page").style.display = "flex";

    // Clear login input fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    // Optional: clear register fields as well
    document.getElementById("reg-username").value = "";
    document.getElementById("reg-password").value = "";
    document.getElementById("reg-confirm").value = "";

    // Make sure register page is hidden
    document.getElementById("register-page").style.display = "none";
}
