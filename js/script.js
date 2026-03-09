// HAMBURGER MENU //
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}


// ADD TO CART - products.html //
const shopButtons = document.querySelectorAll('.shop');

shopButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const title = button.dataset.title;
        const price = parseFloat(button.dataset.price);
        const image = button.dataset.image;

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

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

        localStorage.setItem('cart', JSON.stringify(cart));

        window.location.href = 'cart.html';
    });
});


// CART LOGIC - cart.html //

if (document.querySelector('.cart-items-container')) {
    const cartContainer = document.querySelector('.cart-items-container');

    function renderCart() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartContainer.innerHTML = "";

        let total = 0;

        cart.forEach((item, index) => {

            total += item.price * item.quantity;

            cartContainer.innerHTML += `
                <div class="cart-items">
                    <div class="item1">
                        <img src="${item.image}">
                    </div>

                    <div class="item1-text">
                        <h4>${item.title}</h4>
                        <p class="price" data-price="${item.price}">
                            ${item.price} €
                        </p>
                    </div>

                    <div class="quantity-remove">
                        <div class="quantity-selector">
                            <button onclick="changeQuantity(${index}, -1)">-</button>
                            <input type="text" value="${item.quantity}" readonly>
                            <button onclick="changeQuantity(${index}, 1)">+</button>
                        </div>

                        <div class="remove-item">
                            <button onclick="removeItem(${index})">🗑️</button>
                        </div>
                    </div>
                </div>
            `;
        });

        document.querySelector('.total-price').textContent = total.toFixed(2) + " €";
    }

    window.changeQuantity = function(index, amount) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        cart[index].quantity += amount;

        if (cart[index].quantity <= 0) cart.splice(index, 1);
        
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartCount();
    }

    window.removeItem = function(index) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        
        renderCart();
        updateCartCount();
    }

    renderCart();
}

// CART-COUNT //

function updateCartCount () {
    const cartCountElement = document.querySelector('.cart-count');
    if (!cartCountElement) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

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


// PRODUCTPAGE - ADD TO CART //

const addToCartBtn = document.querySelector('.add-to-cart');

if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
         const productTitle = addToCartBtn.dataset.title;
         const productPrice = parseFloat(addToCartBtn.dataset.price);
         const productImage = addToCartBtn.dataset.image;

         let cart = JSON.parse(localStorage.getItem('cart')) || [];

         const existingProduct = cart.find(item => item.title === productTitle);
         if (existingProduct) {
             existingProduct.quantity += 1;
         } else {
             cart.push({
                 title: productTitle,
                 price: productPrice,
                 image: productImage,
                 quantity: 1
            });
         }

         localStorage.setItem('cart', JSON.stringify(cart));
  
         updateCartCount();
    });
}


// product side //

function changeImage(image) {
    const mainImage = document.getElementById("mainImage");
    mainImage.src = image.src;
}