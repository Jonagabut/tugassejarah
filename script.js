let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    total += productPrice;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart");
    const totalElement = document.getElementById("total");
    cartList.innerHTML = "";
    
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem);
    });
    
    totalElement.textContent = `$${total}`;
}

function checkout() {
    if (cart.length === 0) {
        alert("Keranjang belanja masih kosong.");
    } else {
        alert(`Total pembelian: $${total}. Terima kasih sudah berbelanja!`);
        cart = [];
        total = 0;
        updateCart();
    }
}
