// Ensure elements exist before adding listeners
const hamburger = document.querySelector(".hamburger");
const sidebar = document.getElementById("sidebar");
const cartSidebar = document.getElementById("cart-sidebar");
const overlay = document.getElementById("overlay");
const cartCount = document.getElementById("cart-count");
const totalPriceEl = document.getElementById("total-price");
const cartItemsContainer = document.getElementById("cart-items-container");

let cart = [];

// 1. Open/Close Cart Sidebar
function toggleCart() {
    // If mobile menu is open, close it first
    if (sidebar && sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
        if (hamburger) hamburger.classList.remove("active");
    }

    if (cartSidebar) {
        cartSidebar.classList.toggle("active");
        if (overlay) overlay.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
    }
}

// 2. Mobile Sidebar Toggle
if (hamburger) {
    hamburger.addEventListener("click", () => {
        // If cart is open, close it first
        if (cartSidebar && cartSidebar.classList.contains("active")) {
            cartSidebar.classList.remove("active");
        }

        hamburger.classList.toggle("active");
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
    });
}

// 3. Overlay click closes everything
if (overlay) {
    overlay.addEventListener("click", () => {
        if (hamburger) hamburger.classList.remove("active");
        if (sidebar) sidebar.classList.remove("active");
        if (cartSidebar) cartSidebar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });
}