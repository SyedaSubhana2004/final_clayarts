// Example JavaScript to update average stars and total ratings
// Replace with actual data retrieval logic as per your setup
const averageStars = 4.5; // Replace with actual average stars
const totalRatings = 200; // Replace with actual total ratings

document.getElementById('average-stars').textContent = averageStars;
document.getElementById('total-ratings').textContent = totalRatings;


const dropdownArrow = document.querySelector('.dropdown-arrow');
const ratingDropdown = document.querySelector('.rating-dropdown');

dropdownArrow.addEventListener('click', () => {
  // Toggle visibility of the dropdown
  ratingDropdown.classList.toggle('show-dropdown');
});

// Close the dropdown if clicked outside of it
document.addEventListener('click', (event) => {
  if (!ratingDropdown.contains(event.target) && event.target !== dropdownArrow) {
    ratingDropdown.classList.remove('show-dropdown');
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const decrementButton = document.querySelector('.quantity-controls .decrement');
  const incrementButton = document.querySelector('.quantity-controls .increment');
  const quantityInput = document.getElementById('quantity');

  // Decrement button click handler
  decrementButton.addEventListener('click', function() {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });

  // Increment button click handler
  incrementButton.addEventListener('click', function() {
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
  });
});


document.addEventListener('DOMContentLoaded', function() {
    const decreaseQtyBtn = document.getElementById('decreaseQty');
    const increaseQtyBtn = document.getElementById('increaseQty');
    const quantityInput = document.getElementById('quantity');
  
    decreaseQtyBtn.addEventListener('click', function() {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });
  
    increaseQtyBtn.addEventListener('click', function() {
      let currentValue = parseInt(quantityInput.value);
      quantityInput.value = currentValue + 1;
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const decreaseQtyBtn = document.getElementById('decreaseQty');
    const increaseQtyBtn = document.getElementById('increaseQty');
    const quantityInput = document.getElementById('quantity');
  
    decreaseQtyBtn.addEventListener('click', function() {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });
  
    increaseQtyBtn.addEventListener('click', function() {
      let currentValue = parseInt(quantityInput.value);
      quantityInput.value = currentValue + 1;
    });
  });


  