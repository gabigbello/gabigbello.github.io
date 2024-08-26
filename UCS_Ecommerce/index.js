/*HEADER*/
const navLink = $('#navbar li a');

navLink.each(function(index,link){
    $(link).on('mouseover',function(){
        navLink.removeClass('active');
        $(this).addClass('active');
    })
})

/* NAVBAR - MOBILE */

const bar = $('#bar');
const nav = $('#navbar');

if(bar){
    bar.on('click',function(){
        nav.addClass('active');
    })
}

const close = $('#close');

if(close){
    close.on('click',function(){
        nav.removeClass('active');
    })
}


/* PRODUCT DETAILS - SHOP PAGE */


const products = [
    {
        "id":1,
        "brand":"Adidas",
        "image": "../img/products/f1.jpg",
        "product": "Cartoon Astronaut T-Shirts",
        "price": 78.15,
        "rating":5,
        "link":"sproduct.html",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor mi mattis diam imperdiet tincidunt. Nam feugiat nibh leo, sit amet ultrices quam tincidunt eu. Vivamus fringilla venenatis pretium. Quisque sodales elit mi, id bibendum quam rutrum eget. Sed venenatis tempus nisi a luctus. Nunc elementum facilisis sapien, in placerat purus tincidunt eu. Maecenas vehicula ullamcorper sagittis. Nunc interdum odio bibendum dolor dictum, quis posuere odio dignissim. Fusce ligula dolor, gravida a bibendum vitae, vulputate in magna. Vestibulum vulputate bibendum volutpat."
    },
    {
        "id":2,
        "brand":"Adidas",
        "image": "../img/products/f2.jpg",
        "product": "Cartoon Flower T-Shirts",
        "price": 35,
        "rating":3,
        "link":"sproduct.html"
    },
    {
        "id":3,
        "brand":"Adidas",
        "image": "../img/products/f3.jpg",
        "product": "Cartoon Big Bear T-Shirts",
        "price": 100,
        "rating":3,
        "link":"sproduct.html"
    },
    {
        "id":4,
        "brand":"Adidas",
        "image": "../img/products/f4.jpg",
        "product": "Dobby T-Shirts",
        "price": 20,
        "rating":5,
        "link":"sproduct.html"
    },
    {
        "id":5,
        "brand":"Navy",
        "image": "../img/products/f5.jpg",
        "product": "Cartooned T-Shirts",
        "price": 23,
        "rating":2,
        "link":"sproduct.html"
    },
    {
        "id":6,
        "brand":"Dodie",
        "image": "../img/products/f6.jpg",
        "product": "ET T-Shirts",
        "price": 39.90,
        "rating":4,
        "link":"sproduct.html"
    },
    {
        "id":7,
        "brand":"Joju",
        "image": "../img/products/f7.jpg",
        "product": "Papi T-Shirts",
        "price": 35,
        "rating":5,
        "link":"sproduct.html"
    },
    {
        "id":8,
        "brand":"Biui",
        "image": "../img/products/f8.jpg",
        "product": "Morron T-Shirts",
        "price": 73.85,
        "rating":4,
        "link":"sproduct.html"
    }
]

const products_featured = [
    {
        "id":9,
        "brand":"Adidas",
        "image": "../img/products/n1.jpg",
        "product": "Dibby does",
        "price": 78.15,
        "rating":5,
        "link":"sproduct.html"
    },
    {
        "id":10,
        "brand":"Adidas",
        "image": "../img/products/n2.jpg",
        "product": "Heaven lobby",
        "price": 35,
        "rating":3,
        "link":"sproduct.html"
    },
    {
        "id":11,
        "brand":"Adidas",
        "image": "../img/products/n3.jpg",
        "product": "Board",
        "price": 100,
        "rating":3,
        "link":"sproduct.html"
    },
    {
        "id":12,
        "brand":"Adidas",
        "image": "../img/products/n4.jpg",
        "product": "Matha's zoua",
        "price": 20,
        "rating":5,
        "link":"sproduct.html"
    },
    {
        "id":13,
        "brand":"Navy",
        "image": "../img/products/n5.jpg",
        "product": "Cartooned T-Shirts",
        "price": 23,
        "rating":2,
        "link":"sproduct.html"
    },
    {
        "id":14,
        "brand":"Dodie",
        "image": "../img/products/n6.jpg",
        "product": "ET Shorts",
        "price": 39.90,
        "rating":4,
        "link":"sproduct.html"
    },
    {
        "id":15,
        "brand":"Joju",
        "image": "../img/products/n7.jpg",
        "product": "Papi T-Shirts",
        "price": 35,
        "rating":5,
        "link":"sproduct.html"
    },
    {
        "id":16,
        "brand":"Biui",
        "image": "../img/products/n8.jpg",
        "product": "Morron T-Shirts",
        "price": 73.85,
        "rating":4,
        "link":"sproduct.html"
    }
]

const carts = [];

const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        carts.push(...JSON.parse(storedCart));
    }
    addCartToHTML();
};

const updateLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(carts));
};

const productContainer = $('#product1 .pro-container');
products.forEach(product => {
    productContainer.append(`
    <div class="pro" data-id="${product.id}">
        <img src="${product.image}" alt="${product.product}" onclick="window.location.href='${product.link}';"/>
        <div class="des">
            <span>${product.brand}</span>
            <h5>${product.product}</h5>
            <div class="star">
                ${'<i class="bx bxs-star"></i>'.repeat(product.rating)}
                ${'<i class="bx bx-star"></i>'.repeat(5 - product.rating)}
            </div>
            <h4>$${product.price.toFixed(2)}</h4>
        </div>
        <a href="#" class="cart"><i class='bx bx-cart'></i></a>
    </div>
    `);
});

const productContainerNew = $('#product1 .pro-container-new');

products_featured.forEach(product => {
    productContainerNew.append(`
            <div class="pro" data-id="${product.id}">
        <img src="${product.image}" alt="${product.product}" onclick="window.location.href='${product.link}';"/>
        <div class="des">
            <span>${product.brand}</span>
            <h5>${product.product}</h5>
            <div class="star">
                ${'<i class="bx bxs-star"></i>'.repeat(product.rating)}
                ${'<i class="bx bx-star"></i>'.repeat(5 - product.rating)}
            </div>
            <h4>$${product.price.toFixed(2)}</h4>
        </div>
        <a href="#" class="cart"><i class='bx bx-cart'></i></a>
    </div>
    `);
})

const productContainerProductPage = $('')

const addToCart = (productId, quantity = 1) => {
    const size = $('#product-size').val();

    // Check if size is selected; if not, set a placeholder value
    const sizeValue = size === "Select Size" ? "Size required" : size;

    const positionProduct = carts.findIndex(item => item.productId === productId && item.size === sizeValue);
    
    if (positionProduct === -1) {
        carts.push({
            productId: productId,
            quantity: quantity,
            size: sizeValue
        });
    } else {
        carts[positionProduct].quantity += quantity;
    }
    updateLocalStorage();
    addCartToHTML();
};

const calculateCartTotal = () => { 
    let subtotal = 0;
    carts.forEach(cart => {
        const product = products.find(p => p.id === cart.productId);
        if(product){
            subtotal += product.price * cart.quantity;
        }
    });
    return subtotal;
}

const updateCartTotals = () => {
    const subtotal = calculateCartTotal();
    $('#cart-subtotal').text(`$${subtotal.toFixed(2)}`);
    $('#cart-total').text(`$${subtotal.toFixed(2)}`);
}

const findProductById = (id) => {
    return products.find(p => p.id === id) || products_featured.find(p => p.id === id);
};

const addCartToHTML = () => {
    const listCartHTML = $('#cart table tbody');
    listCartHTML.html('');
    if (carts.length > 0) {
        carts.forEach(cart => {
            const product = findProductById(cart.productId);
            if (product) {
                const sizeOptions = `
                    <select class="size-select" data-id="${product.id}">
                        <option value="">Select Size</option>
                        <option value="XL" ${cart.size === 'XL' ? 'selected' : ''}>XL</option>
                        <option value="XXL" ${cart.size === 'XXL' ? 'selected' : ''}>XXL</option>
                        <option value="Small" ${cart.size === 'Small' ? 'selected' : ''}>Small</option>
                        <option value="Large" ${cart.size === 'Large' ? 'selected' : ''}>Large</option>
                    </select>
                `;
                
                const sizeDisplay = cart.size && cart.size !== "Size required" ? 
                    `<td>${cart.size}</td>` : 
                    `<td>${sizeOptions}</td>`;
                    
                const newCart = `
                    <tr class="item">
                        <td><a href="#" class="remove-item" data-id="${product.id}"><i class='bx bx-trash'></i></a></td>
                        <td><img src="${product.image}" alt="${product.product}"/></td>
                        <td>${product.product}</td>
                        ${sizeDisplay}
                        <td>$${product.price.toFixed(2)}</td>
                        <td><input type="number" value="${cart.quantity}" class="quantity-input" data-id="${product.id}"></td>
                        <td>$${(product.price * cart.quantity).toFixed(2)}</td>
                    </tr>
                `;
                listCartHTML.append(newCart);
            }
        });
    }
    updateCartTotals();
};

const removeFromCart = (productId) => {
    console.log(`Removing product ID ${productId} from cart`);
    const positionProduct = carts.findIndex(item => item.productId === productId);
    if (positionProduct !== -1) {
        carts.splice(positionProduct, 1);
        updateLocalStorage();
        addCartToHTML();
    }
};

const changeQuantity = (productId, quantity) => {
    console.log(`Changing quantity of product ID ${productId} to ${quantity}`);
    const cartItem = carts.find(item => item.productId === productId);
    if (cartItem) {
        cartItem.quantity = quantity;
        updateLocalStorage();
        addCartToHTML();
    }
};

$(document).ready(() => {
    loadCartFromLocalStorage();

    $('#add-to-cart').on('click', function(event) {
        event.preventDefault();
        const productId = $(this).data('id');
        const quantity = parseInt($('#quantity-input').val(), 10) || 1;
        addToCart(productId, quantity);
        window.location.href = 'cart.html';
    });

    $('#product1 .pro-container').on('click', 'a.cart', function(event) {
        event.preventDefault();
        const productElement = $(this).closest('.pro');
        const productId = productElement.data('id');
        const quantity = 1; // Default quantity
        addToCart(productId, quantity);
    });

    $('#product1 .pro-container-new').on('click', 'a.cart', function(event) {
        event.preventDefault();
        const productElement = $(this).closest('.pro');
        const productId = productElement.data('id');
        const quantity = 1; // Default quantity
        addToCart(productId, quantity);
    });

    // Handle cart item removal and quantity changes
    $('#cart').on('click', '.remove-item', function(event) {
        event.preventDefault();
        const productId = $(this).data('id');
        removeFromCart(productId);
    });

    $('#cart').on('change', '.quantity-input', function() {
        const productId = $(this).data('id');
        const quantity = parseInt($(this).val(), 10);
        if (quantity > 0) {
            changeQuantity(productId, quantity);
        }
    });
});