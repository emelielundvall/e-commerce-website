const quantitySelectors = document.querySelectorAll('.quantity-selector');

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
            }
        });

        // increase
        increaseBtn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        });
    }
});