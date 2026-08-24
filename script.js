const WHATSAPP_NUMBER = "254748418193";

const products = [

  {
    id: 1,
    name: "Wellness Product 01",
    category: "nutrition",
    price: 0,
    image: "",
    description: "Product description coming soon."
  },

  {
    id: 2,
    name: "Wellness Product 02",
    category: "supplements",
    price: 0,
    image: "",
    description: "Product description coming soon."
  },

  {
    id: 3,
    name: "Wellness Product 03",
    category: "personal-care",
    price: 0,
    image: "",
    description: "Product description coming soon."
  },

  {
    id: 4,
    name: "Wellness Product 04",
    category: "household",
    price: 0,
    image: "",
    description: "Product description coming soon."
  }

];


let cart = [];


/* PRODUCTS */

function renderProducts(list = products) {

  const grid = document.getElementById("productGrid");

  if (!list.length) {

    grid.innerHTML = `
      <p style="grid-column:1/-1;padding:40px;text-align:center">
        No products found.
      </p>
    `;

    return;
  }


  grid.innerHTML = list.map(product => `

    <article class="product-card">

      <div class="product-image">

        ${
          product.image

          ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`

          : `<div class="placeholder">F</div>`
        }

      </div>

      <div class="product-info">

        <span class="product-category">
          ${formatCategory(product.category)}
        </span>

        <h3 class="product-name">
          ${product.name}
        </h3>

        <p class="product-price">
          ${
            product.price
            ? `KSh ${product.price.toLocaleString()}`
            : "Price coming soon"
          }
        </p>

        <button
          class="add-button"
          onclick="addToCart(${product.id})"
          ${product.price <= 0 ? "disabled" : ""}
        >
          ${product.price > 0 ? "Add to cart" : "Coming soon"}
        </button>

      </div>

    </article>

  `).join("");

}


function formatCategory(category) {

  return category
    .replace("-", " ")
    .replace(/\b\w/g, letter => letter.toUpperCase());

}


/* SEARCH */

function searchProducts() {

  const query =
    document
      .getElementById("searchInput")
      .value
      .toLowerCase();

  const results = products.filter(product =>
    product.name.toLowerCase().includes(query)
  );

  renderProducts(results);

}


/* FILTER */

function filterProducts(category) {

  document.getElementById("categoryFilter").value = category;

  if (category === "all") {

    renderProducts(products);

    return;

  }

  renderProducts(
    products.filter(product =>
      product.category === category
    )
  );

}


/* CART */

function addToCart(id) {

  const product = products.find(product => product.id === id);

  if (!product || product.price <= 0) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {

    existing.quantity++;

  } else {

    cart.push({
      ...product,
      quantity: 1
    });

  }

  updateCart();

  openCart();

}


function removeFromCart(id) {

  cart = cart.filter(item => item.id !== id);

  updateCart();

}


function changeQuantity(id, amount) {

  const item = cart.find(item => item.id === id);

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {

    removeFromCart(id);

    return;

  }

  updateCart();

}


function updateCart() {

  const count =
    cart.reduce(
      (total, item) => total + item.quantity,
      0
    );

  document.getElementById("cartCount").textContent = count;

  document.getElementById("mobileCartCount").textContent = count;


  const container =
    document.getElementById("cartItems");


  if (!cart.length) {

    container.innerHTML = `
      <div style="text-align:center;padding:50px 10px;color:#777">
        Your cart is empty.
      </div>
    `;

  } else {

    container.innerHTML = cart.map(item => `

      <div class="cart-item">

        <div>

          <strong>${item.name}</strong>

          <div style="font-size:13px;color:#777">
            KSh ${item.price.toLocaleString()}
          </div>

          <div style="margin-top:8px">

            <button onclick="changeQuantity(${item.id}, -1)">
              −
            </button>

            <span style="margin:0 10px">
              ${item.quantity}
            </span>

            <button onclick="changeQuantity(${item.id}, 1)">
              +
            </button>

          </div>

        </div>

        <button onclick="removeFromCart(${item.id})">
          Remove
        </button>

      </div>

    `).join("");

  }


  const total =
    cart.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );

  document.getElementById("cartTotal").textContent =
    `KSh ${total.toLocaleString()}`;

}


function openCart() {

  document
    .getElementById("cartDrawer")
    .classList.add("active");

  document
    .getElementById("cartOverlay")
    .classList.add("active");

}


function closeCart() {

  document
    .getElementById("cartDrawer")
    .classList.remove("active");

  document
    .getElementById("cartOverlay")
    .classList.remove("active");

}


/* WHATSAPP CHECKOUT */

function checkoutWhatsApp() {

  if (!cart.length) {

    alert("Your cart is empty.");

    return;

  }


  const lines = cart.map(item =>

    `${item.quantity} × ${item.name} — KSh ${(item.price * item.quantity).toLocaleString()}`

  );


  const total =
    cart.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );


  const message = `

Hello Fidelis Wellness,

I would like to place an order:

${lines.join("\n")}

Total: KSh ${total.toLocaleString()}

Please let me know the available payment and delivery options.

Thank you.
`;


  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


  window.open(url, "_blank");

}


/* START */

renderProducts();

updateCart();
