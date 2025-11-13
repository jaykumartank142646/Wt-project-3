// ✅ Edit Profile Form Handler
document.getElementById("editProfileForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("adminName").value.trim();
    let email = document.getElementById("adminEmail").value.trim();

    if (name === "" || email === "") {
        alert("⚠ Please fill all fields.");
        return;
    }

    // Save to localStorage (optional)
    localStorage.setItem("adminName", name);
    localStorage.setItem("adminEmail", email);

    alert("✅ Profile updated successfully!");
    this.reset();
});


// ✅ Change Password Handler
document.getElementById("changePasswordForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let current = document.getElementById("currentPass").value.trim();
    let newPass = document.getElementById("newPass").value.trim();
    let confirmPass = document.getElementById("confirmPass").value.trim();

    // Fetch stored password (if exists)
    let savedPass = localStorage.getItem("adminPassword") || "admin123"; // default

    if (current !== savedPass) {
        alert("❌ Current password is incorrect!");
        return;
    }

    if (newPass.length < 6) {
        alert("⚠ New password must be at least 6 characters.");
        return;
    }

    if (newPass !== confirmPass) {
        alert("❌ New password and confirm password do not match.");
        return;
    }

    localStorage.setItem("adminPassword", newPass);

    alert("✅ Password updated successfully!");
    this.reset();
});


// ✅ Load saved profile data on page load
window.addEventListener("load", () => {
    document.getElementById("adminName").value = localStorage.getItem("adminName") || "";
    document.getElementById("adminEmail").value = localStorage.getItem("adminEmail") || "";
});
