// Show specific page
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Toggle password visibility for login
function toggleLoginPass() {
    const input = document.getElementById('loginPass');
    input.type = input.type === 'password' ? 'text' : 'password';
}

// Toggle password visibility for register
function toggleRegisterPass() {
    const input = document.getElementById('newPass');
    input.type = input.type === 'password' ? 'text' : 'password';
}

// Register new user
function register() {
    const username = document.getElementById('newUser').value.trim();
    const password = document.getElementById('newPass').value.trim();
    
    if (!username || !password) {
        alert('Please fill in all fields!');
        return;
    }
    
    if (username.length < 3) {
        alert('Username must be at least 3 characters long!');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        return;
    }
    
    // Store credentials in memory (not localStorage)
    if (!window.users) {
        window.users = {};
    }
    
    if (window.users[username]) {
        alert('Username already exists! Please choose another one.');
        return;
    }
    
    window.users[username] = password;
    
    alert('Registration successful! Please login.');
    showPage('loginPage');
    
    // Clear fields
    document.getElementById('newUser').value = '';
    document.getElementById('newPass').value = '';
}

// Login user
function login() {
    const username = document.getElementById('loginUser').value.trim();
    const password = document.getElementById('loginPass').value.trim();
    
    if (!username || !password) {
        alert('Please fill in all fields!');
        return;
    }
    
    if (!window.users) {
        window.users = {};
    }
    
    if (window.users[username] && window.users[username] === password) {
        alert('Login successful!');
        window.currentUser = username;
        showPage('portfolioPage');
        
        // Clear fields
        document.getElementById('loginUser').value = '';
        document.getElementById('loginPass').value = '';
    } else {
        alert('Invalid username or password!');
    }
}

// Logout user
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        window.currentUser = null;
        showPage('loginPage');
    }
}

// Check if user is logged in on page load
window.onload = function() {
    window.users = {};
    if (window.currentUser) {
        showPage('portfolioPage');
    } else {
        showPage('loginPage');
    }
};
