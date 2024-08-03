//login
const login = document.querySelector('#login')
function openLogin(){  //open login page
    if (login.classList.contains('hidden')) {
        login.classList.add('show')
        login.classList.remove('hidden')
    }
}

//close login page
const close = document .querySelector('.close')
close.addEventListener('click', () => {
    login.classList.add('hidden')
    login.classList.remove('show')
})


// show cart sidebar
const cartIcon = document.querySelector('.cart-icon')
const cartSection = document.querySelector('.cart-sidebar')
const cartWrapper = document.querySelector('.cart-sidebar .wrapper')

cartIcon.addEventListener('click', () => {
    cartSection.classList.remove('hidden')
    cartWrapper.classList.remove('hidden')
})
cartWrapper.addEventListener('click', (e) => {
    e.target.classList.add('hidden')
    cartSection.classList.add('hidden')
})



//fetch from json(hair products)

    async function fetchProducts() {
    try {
    const response = await fetch('hairProduct.json');
    const products = await response.json();
    displayProducts(products);
} catch (error) {
    console.error('Error fetching products:', error);
}
}

    function displayProducts(products) {
    const container = document.querySelector(".related-products-container");

    products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'pro-card';
    const imgContainer = document.createElement('div');
    imgContainer.className = 'pro-img-container';
    const img = document.createElement('img');
    const details = document.createElement('div');
    details.className = 'pro-details';
    const h4 = document.createElement('h4');

    const span = document.createElement('span');

    const icon = document.createElement('img');

    const p = document.createElement('p');


    img.src=product.image_url;
    h4.innerText = product.name;
    icon.src = "icons/Frame 1000001161.png";
    p.innerText=product.price;


    container.appendChild(productDiv);
    productDiv.appendChild(imgContainer);
    productDiv.appendChild(details);
    imgContainer.appendChild(img);
    details.appendChild(h4);
    details.appendChild(span);
    details.appendChild(p);
    span.appendChild(icon);

});
}

    fetchProducts();

