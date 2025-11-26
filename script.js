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

    // CLEAR LOGIN INPUTS
    document.getElementById("loginUser").value = "";
    document.getElementById("loginPass").value = "";

    showPage("loginPage");
}
