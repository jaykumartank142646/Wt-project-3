// FORM ELEMENTS
const form = document.getElementById("productForm");
const productName = document.getElementById("productName");
const productDesc = document.getElementById("productDesc");
const productPrice = document.getElementById("productPrice");
const productCategory = document.getElementById("productCategory");
const productImage = document.getElementById("productImage");

// IMAGE PREVIEW BOX
const imgPreview = document.createElement("img");
imgPreview.style.width = "100%";
imgPreview.style.borderRadius = "8px";
imgPreview.style.marginBottom = "15px";
imgPreview.style.display = "none";  // hidden until URL entered

productImage.insertAdjacentElement("afterend", imgPreview);

// ✅ SHOW IMAGE PREVIEW WHEN URL IS ENTERED
productImage.addEventListener("input", () => {
    if (productImage.value.trim() !== "") {
        imgPreview.src = productImage.value;
        imgPreview.style.display = "block";
    } else {
        imgPreview.style.display = "none";
    }
});

// ✅ FORM SUBMIT EVENT
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // ✅ VALIDATION CHECKS
    if (productName.value.trim() === "") {
        alert("❗ Product name cannot be empty!");
        productName.focus();
        return;
    }

    if (productPrice.value.trim() === "" || productPrice.value <= 0) {
        alert("❗ Please enter a valid price!");
        productPrice.focus();
        return;
    }

    if (productCategory.value === "") {
        alert("❗ Please select a category!");
        productCategory.focus();
        return;
    }

    // ✅ SUCCESS MESSAGE
    alert("✅ Product added successfully!");

    // OPTIONAL: SAVE DATA TO LOCAL STORAGE (temporary storage)
    const productData = {
        name: productName.value,
        desc: productDesc.value,
        price: productPrice.value,
        category: productCategory.value,
        imageUrl: productImage.value
    };

    // Store product in localStorage
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(productData);
    localStorage.setItem("products", JSON.stringify(products));

    // CONFIRM BEFORE RESET OR REDIRECT
    if (confirm("Do you want to go back to Products page?")) {
        window.location.href = "admin-products.html";
    } else {
        form.reset();
        imgPreview.style.display = "none"; // hide after reset
    }
});
