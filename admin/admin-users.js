<script>
  const form = document.getElementById("addCustomerForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop form submit

    const name = document.getElementById("newUserName").value.trim();
    const email = document.getElementById("newUserEmail").value.trim();
    const status = document.getElementById("newUserStatus").value;

    if (name === "" || email === "") {
      alert("Please fill all required fields.");
      return;
    }

    // Log values (or send to backend)
    console.log("New Customer Details:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Status:", status);

    alert("Customer added successfully!");

    // Reset form after adding
    form.reset();
  });
</script>
