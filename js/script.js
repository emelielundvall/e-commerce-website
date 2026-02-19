
// quantity //
const quantitySelectors = document.querySelectorAll('.quantity-selector');
const totalElement = document.querySelector('.total-price');

function updateTotal() {
    let total = 0;

    quantitySelectors.forEach(selector => {
    
        const quantityInput = selector.querySelector('.quantity');
        const priceElement = selector.closest('.cart-items').querySelector('.price');

        const price = parseFloat(priceElement.dataset.price);
        const quantity = parseInt(quantityInput.value);

        total += price * quantity;
    });

    totalElement.textContent = total.toFixed(2) + " €";
}

quantitySelectors.forEach(selector => {

    const decreaseBtn = selector.querySelector('.decrease');
    const increaseBtn = selector.querySelector('.increase');
    const quantityInput = selector.querySelector('.quantity');

    if (decreaseBtn && increaseBtn && quantityInput) {
        
        // decrease
        decreaseBtn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
                updateTotal();
            }
        });

        // increase
        increaseBtn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
            updateTotal();
        });
    }
});

updateTotal();


// removing items in cart //
const removeButtons = document.querySelectorAll('.remove-btn');

removeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const cartItem = btn.closest('.cart-items');

        if (cartItem) {
            cartItem.remove(); //removes product from DOM//
            updateTotal();
        }
    })
})
    

// adding item to cart //

const shopButtons = document.querySelectorAll('.shop');

shopButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const title = button.dataet.title;
        const price = parseFloat(button.dataset.price);
        const image = button.dataset.image;

        let cart = JSON.parsel(localStorage.getItem('cart')) || [];

        const existingItem = cart.find(item => item.title === title);
        if (existingItem) {
            existingItem.quantity += 1; 
        } else {
            cart.push({title, price, image, quantity: 1});
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        window.location.href = 'cart.html';
    });
});
    
    