document.addEventListener('DOMContentLoaded', function () {
    const languageButton = document.querySelector('.i1 button');
    const languageMenu = document.querySelector('.language-menu');
    const languageText = document.getElementById('language-text');

    const productImage = document.getElementById('p1');
    const productMenu = document.querySelector('.product-menu');

    // Show/hide language menu
    languageButton.addEventListener('click', function (e) {
        e.preventDefault();
        languageMenu.style.display = languageMenu.style.display === 'none' || !languageMenu.style.display ? 'block' : 'none';
    });

    // Change language text
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function () {
            languageText.textContent = this.dataset.lang;
            languageMenu.style.display = 'none';
        });
    });

    // Show/hide product menu
    productImage.addEventListener('click', function (e) {
        e.preventDefault();
        productMenu.style.display = productMenu.style.display === 'none' || !productMenu.style.display ? 'block' : 'none';
    });

    // Hide menus if clicked outside
    document.addEventListener('click', function (e) {
        if (!languageButton.contains(e.target) && !languageMenu.contains(e.target)) {
            languageMenu.style.display = 'none';
        }
        if (!productImage.contains(e.target) && !productMenu.contains(e.target)) {
            productMenu.style.display = 'none';
        }
    });
});
