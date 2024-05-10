/*dark mode btn*/
const toggle = document.getElementById('toggle');
toggle.addEventListener('change', (e)=> {
    document.body.classList.toggle('dark', e.target.checked);
})
/*checkout*/
//bag
const bg = document.getElementById('bag');
const bgc = document.getElementById('bag-cart');

bg.addEventListener('click', ()=>{
    bgc.classList.toggle('active')
    bg.classList.toggle('active')

} )

const closeBt=document.getElementById('close')
closeBt.addEventListener('click', ()=>{
    bgc.classList.toggle('active')
    bg.classList.toggle('active')

} )

// btn
let cartItems = [];
let total = 0;

function addToCart(productId, productName, price) {
    // Check if the item is already in the cart
    const existingItem = cartItems.find(item => item.productId === productId);

    if (existingItem) {
        // If the item is already in the cart, increase its quantity
        existingItem.quantity++;
    } else {
        // If the item is not in the cart, add it
        cartItems.push({
            productId: productId,
            name: productName,
            price: price,
            quantity: 1
        });
    }

    // Update cart display
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    // Clear previous items
    cartList.innerHTML = "";

    // Update cart items
    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartList.appendChild(listItem);
    });

    // Calculate and update total
    total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    cartTotal.textContent = total.toFixed(2);

}



