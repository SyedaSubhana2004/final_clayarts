document.addEventListener('DOMContentLoaded', function() {
    const showCouponsBtn = document.getElementById('showCouponsBtn');
    const couponsDropdown = document.querySelector('.coupons-dropdown');

    showCouponsBtn.addEventListener('click', function(event) {
        event.preventDefault();
        couponsDropdown.style.display = (couponsDropdown.style.display === 'block') ? 'none' : 'block';
    });

    const closeCouponsBtn = document.querySelector('.close-coupons-btn');
    closeCouponsBtn.addEventListener('click', function(event) {
        event.preventDefault();
        couponsDropdown.style.display = 'none';
    });
});
