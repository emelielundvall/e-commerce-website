
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


    

    
    