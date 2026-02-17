console.log("JavaScript är kopplat och redo!");


document.querySelectorAll('.quantity-selector').forEach(selector => {
    const decreaseBtn = selector.querySelector('button#decrease');
    const increaseBtn = selector.querySelector('button#increase');
    const quantityInput = selector.querySelector('input#quantity');

    decreaseBtn.addEventListener('click', () => {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) quantityInput.value = currentValue - 1;
    });

    increaseBtn.addEventListener('click', () => {
      let currentValue = parseInt(quantityInput.value);
      quantityInput.value = currentValue + 1;
    });
});