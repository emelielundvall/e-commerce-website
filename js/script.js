// HAMBURGER MENU //
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// CART STORAGE HELPERS //
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// ADD PRODUCT TO CART //
function addToCart(title, price, image) {

    let cart = getCart();

    const existingItem = cart.find(item => item.title === title);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            title,
            price,
            image,
            quantity: 1
        });
    }

    saveCart(cart);
    updateCartCount();
}



// PRODUCTS PAGE - SHOP BUTTON //
document.querySelectorAll(".shop").forEach(button => {

    button.addEventListener("click", (e) => {

        e.preventDefault();

        const title = button.dataset.title;
        const price = parseFloat(button.dataset.price);
        const image = button.dataset.image;

        addToCart(title, price, image);

        window.location.href = "cart.html";
    });

});



// PRODUCT PAGE - ADD TO CART //
const addToCartBtn = document.querySelector(".add-to-cart");

if (addToCartBtn) {

    addToCartBtn.addEventListener("click", () => {

        const title = addToCartBtn.dataset.title;
        const price = parseFloat(addToCartBtn.dataset.price);
        const image = addToCartBtn.dataset.image;

        addToCart(title, price, image);

    });

}


// CART PAGE LOGIC //
const cartContainer = document.querySelector(".cart-items-container");

if (cartContainer) {

    function renderCart() {

        const cart = getCart();

        cartContainer.innerHTML = "";

        let total = 0;

        cart.forEach((item, index) => {

            total += item.price * item.quantity;

            cartContainer.innerHTML += `
                <div class="cart-items">

                    <div class="item1">
                        <img src="${item.image}" alt="${item.title}">
                    </div>

                    <div class="item1-text">
                        <h4>${item.title}</h4>
                        <p class="price">${item.price} €</p>
                    </div>

                    <div class="quantity-remove">

                        <div class="quantity-selector">
                            <button onclick="changeQuantity(${index}, -1)">-</button>
                            <input type="text" value="${item.quantity}" readonly>
                            <button onclick="changeQuantity(${index}, 1)">+</button>
                        </div>

                        <button class="remove-btn" onclick="removeItem(${index})">
                            🗑️
                        </button>

                    </div>

                </div>
            `;
        });

        document.querySelector(".total-price").textContent =
            total.toFixed(2) + " €";
    }


    window.changeQuantity = function (index, amount) {

        let cart = getCart();

        cart[index].quantity += amount;

        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }

        saveCart(cart);

        renderCart();
        updateCartCount();
    };


    window.removeItem = function (index) {

        let cart = getCart();

        cart.splice(index, 1);

        saveCart(cart);

        renderCart();
        updateCartCount();
    };


    renderCart();
}

// CART COUNT (ICON) //
function updateCartCount() {

    const cartCountElement = document.querySelector(".cart-count");

    if (!cartCountElement) return;

    const cart = getCart();

    let totalItems = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
    });

    if (totalItems > 0) {

        cartCountElement.textContent = totalItems;
        cartCountElement.style.display = "flex";

    } else {

        cartCountElement.style.display = "none";

    }

}
updateCartCount();

// PRODUCT PAGE - IMAGE GALLERY //
function changeImage(image) {

    const mainImage = document.getElementById("mainImage");

    if (mainImage) {
        mainImage.src = image.src;
    }

}