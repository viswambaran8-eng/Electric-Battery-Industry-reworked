  // 1. Initialize Cart and Selectors
  // We use 'var' or omit 'let' inside a non-module script to ensure global scope for inline onclicks
  window.cart = [];

  function updateCartUI() {
    const cartCount = document.getElementById("cart-count");
    const cartItemsContainer = document.getElementById("cart-items-container");
    const totalPriceEl = document.getElementById("total-price");

    if (!cartItemsContainer) return;

    // Update Badge Count
    if (cartCount) cartCount.innerText = window.cart.length;

    // Update List Content
    if (window.cart.length === 0) {
      cartItemsContainer.innerHTML =
        '<p style="text-align:center; margin-top:50px; color:#666;">Your cart is empty.</p>';
    } else {
      cartItemsContainer.innerHTML = window.cart
        .map(
          (item, index) => `
            <div class="cart-item" style="display:flex; align-items:center; gap:15px; padding:15px; border-bottom:1px solid #222; background: #111; margin-bottom:10px; border-radius:10px;">
                <img src="${item.img}" style="width:40px; height:40px; border-radius:5px; object-fit:cover;">
                <div style="flex:1;">
                    <h5 style="margin:0; font-size:14px; color:white;">${item.name}</h5>
                    <small style="color:#90ee90; font-weight:bold;">₹${item.price}</small>
                </div>
                <button onclick="removeFromCart(${index})" style="background:none; border:none; color:#ff4d4d; cursor:pointer; font-size:18px;">&times;</button>
            </div>
        `,
        )
        .join("");
    }

    // Update Total Price
    const total = window.cart.reduce((sum, item) => sum + item.price, 0);
    if (totalPriceEl) totalPriceEl.innerText = total.toLocaleString();
  }

  // Global functions so HTML onclick can find them
  window.addToCart = function (product) {
    window.cart.push(product);
    updateCartUI();

    if (typeof gsap !== "undefined") {
      gsap.fromTo(
        ".cart-trigger",
        { scale: 1 },
        {
          scale: 1.4,
          duration: 0.3,
          yoyo: true,
          repeat: 1,
          ease: "back.out(1.7)",
        },
      );
    }
  };

  window.removeFromCart = function (index) {
    window.cart.splice(index, 1);
    updateCartUI();
  };

  window.toggleCart = function () {
    const sidebar = document.getElementById("cart-sidebar");
    if (sidebar) sidebar.classList.toggle("active");
  };

