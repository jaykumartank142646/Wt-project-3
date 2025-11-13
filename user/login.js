document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Stop form submit refresh

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    // Simple validation (You can replace with backend validation later)
    if(username === "" || password === ""){
        alert("Please enter both username and password.");
        return;
    }

    // Example: Default login credentials (you can change these)
    if(username === "admin" && password === "admin123"){
        alert("Login Successful!");
        window.location.href = "user-homepage.html"; // Redirect to homepage
    } else {
        alert("Login Successful!");
        window.location.href = "user-homepage.html";
    }
});
