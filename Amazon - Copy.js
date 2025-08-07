// 1. Search functionality (alert when searching)
document.querySelector('.searchicon').addEventListener('click', function () {
    const query = document.querySelector('.inputselect').value;
    if (query.trim() !== "") {
        alert(`You searched for: "${query}"`);
    } else {
        alert("Please enter something to search.");
    }
});

// 2. Add to cart functionality (basic count)
let cartCount = 0;

document.querySelector('.nav_cart').addEventListener('click', function () {
    cartCount++;
    alert(`Item added to cart. Total items: ${cartCount}`);
});

// 3. Sign-in greeting
document.querySelector('.nav_signin').addEventListener('click', function () {
    const name = prompt("Enter your name:");
    if (name) {
        document.querySelector('.nav_signin span').innerText = `Hello, ${name}`;
    }
});

// 4. Toggle product visibility (optional feature)
const toggleBoxes = () => {
    const boxes = document.querySelectorAll('.shop-section .box');
    boxes.forEach(box => {
        box.classList.toggle('hide-box');
    });
};

// Press "T" key to toggle visibility
document.addEventListener('keydown', function (e) {
    if (e.key.toLowerCase() === 't') {
        toggleBoxes();
    }
});
