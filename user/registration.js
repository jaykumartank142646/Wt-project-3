document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let fullName = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirm-password").value.trim();

    if (!fullName || !email || !username || !password || !confirmPassword) {
        alert("All fields are required!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Save user data locally (optional)
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration successful!");
    window.location.href = "user-login.html";
});
