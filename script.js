const WHATSAPP_NUMBER = "254748418193";

const products = [

  {
    id: "NL001",
    name: "NeoLifeShake",
    category: "nutrition",
    price: 4500,
    image: "images/products/neolifeshake.jpg",
    description: "A convenient nutrition shake product."
  },

  {
    id: "NL002",
    name: "Tré-en-en®",
    category: "nutrition",
    price: 3500,
    image: "images/products/tre-en-en.jpg",
    description: "A whole-food nutritional product."
  },

  {
    id: "NL003",
    name: "NeoLifeTea",
    category: "nutrition",
    price: 2500,
    image: "images/products/neolifetea.jpg",
    description: "A tea product from the NeoLife range."
  },

  {
    id: "NL004",
    name: "Vita Squares",
    category: "nutrition",
    price: 3000,
    image: "images/products/vita-squares.jpg",
    description: "A convenient nutritional snack."
  },

  {
    id: "NL005",
    name: "Pro Vitality+",
    category: "supplements",
    price: 5000,
    image: "images/products/pro-vitality.jpg",
    description: "A daily nutritional supplement."
  },

  {
    id: "NL006",
    name: "Omega-3",
    category: "supplements",
    price: 4000,
    image: "images/products/omega-3.jpg",
    description: "An omega-3 nutritional supplement."
  },

  {
    id: "NL007",
    name: "Omega-3 Plus",
    category: "supplements",
    price: 4500,
    image: "images/products/omega-3-plus.jpg",
    description: "An omega-3 supplement."
  },

  {
    id: "NL008",
    name: "PhytoDefence",
    category: "supplements",
    price: 4000,
    image: "images/products/phytodefence.jpg",
    description: "A botanical nutritional supplement."
  },

  {
    id: "NL009",
    name: "Vita Guard",
    category: "supplements",
    price: 4000,
    image: "images/products/vita-guard.jpg",
    description: "A nutritional supplement."
  },

  {
    id: "NL010",
    name: "Vitamin C",
    category: "supplements",
    price: 2500,
    image: "images/products/vitamin-c.jpg",
    description: "A vitamin C supplement."
  },

  {
    id: "NL011",
    name: "Vitamin B Complex",
    category: "supplements",
    price: 2500,
    image: "images/products/vitamin-b-complex.jpg",
    description: "A B-complex nutritional supplement."
  },

  {
    id: "NL012",
    name: "Full Motion",
    category: "supplements",
    price: 4500,
    image: "images/products/full-motion.jpg",
    description: "A nutritional product from the NeoLife range."
  },

  {
    id: "NL013",
    name: "Garlic Allium Complex",
    category: "supplements",
    price: 3500,
    image: "images/products/garlic-allium.jpg",
    description: "A garlic-based nutritional supplement."
  },

  {
    id: "NL014",
    name: "CoQ10 Mitochondrial Energy Complex",
    category: "supplements",
    price: 4500,
    image: "images/products/coq10.jpg",
    description: "A CoQ10 nutritional supplement."
  },

  {
    id: "NL015",
    name: "Nutriance Cleansing Milk",
    category: "personal-care",
    price: 3000,
    image: "images/products/cleansing-milk.jpg",
    description: "A facial cleansing product."
  },

  {
    id: "NL016",
    name: "Nutriance Cleansing Gel",
    category: "personal-care",
    price: 3000,
    image: "images/products/cleansing-gel.jpg",
    description: "A facial cleansing gel."
  },

  {
    id: "NL017",
    name: "Nutriance Balancing Tonic",
    category: "personal-care",
    price: 3000,
    image: "images/products/balancing-tonic.jpg",
    description: "A facial balancing tonic."
  },

  {
    id: "NL018",
    name: "Ultra Hydrating Serum",
    category: "personal-care",
    price: 4500,
    image: "images/products/ultra-hydrating-serum.jpg",
    description: "A hydrating facial serum."
  },

  {
    id: "NL019",
    name: "Ultra Moisturizing Cream",
    category: "personal-care",
    price: 4000,
    image: "images/products/ultra-moisturizing-cream.jpg",
    description: "A moisturizing facial cream."
  },

  {
    id: "NL020",
    name: "Nourishing Hand & Body Lotion",
    category: "personal-care",
    price: 2500,
    image: "images/products/body-lotion.jpg",
    description: "A hand and body lotion."
  },

  {
    id: "NL021",
    name: "Refreshing Bath & Shower Gel",
    category: "personal-care",
    price: 2500,
    image: "images/products/shower-gel.jpg",
    description: "A bath and shower product."
  },

  {
    id: "NL022",
    name: "Rich Revitalizing Shampoo",
    category: "personal-care",
    price: 2500,
    image: "images/products/shampoo.jpg",
    description: "A hair-care product."
  },

  {
    id: "NL023",
    name: "Enriching Conditioner",
    category: "personal-care",
    price: 2500,
    image: "images/products/conditioner.jpg",
    description: "A conditioning hair-care product."
  },

  {
    id: "NL024",
    name: "Super 10",
    category: "household",
    price: 3000,
    image: "images/products/super-10.jpg",
    description: "A concentrated household cleaner."
  },

  {
    id: "NL025",
    name: "Super 10 Fragranced",
    category: "household",
    price: 3000,
    image: "images/products/super-10-fragranced.jpg",
    description: "A fragranced household cleaner."
  },

  {
    id: "NL026",
    name: "Light Duty Cleaner Concentrate",
    category: "household",
    price: 2500,
    image: "images/products/light-duty-cleaner.jpg",
    description: "A concentrated household cleaner."
  },

  {
    id: "NL027",
    name: "Super Gro",
    category: "household",
    price: 2500,
    image: "images/products/super-gro.jpg",
    description: "A NeoLife household product."
  },

  {
    id: "NL028",
    name: "Wash 'n Wax",
    category: "household",
    price: 2500,
    image: "images/products/wash-n-wax.jpg",
    description: "A household cleaning product."
  },

  {
    id: "NL029",
    name: "Lemon Glo",
    category: "household",
    price: 2500,
    image: "images/products/lemon-glo.jpg",
    description: "A household cleaning product."
  }

];


let cart = JSON.parse(localStorage.getItem("fidelisCart")) || [];



function formatCategory(category) {

  return category
    .replace("-", " ")
    .replace(/\b\w/g, letter => letter.toUpperCase());

}



function renderProducts(list = products) {

  const grid = document.getElementById("productGrid");

  if (!grid) return;


  if (!list.length) {

    grid.innerHTML = `
      <div class="empty-products">
        <h3>No products found</h3>
        <p>Try another search or category.</p>
      </div>
    `;

    return;

  }


  grid.innerHTML = list.map(product => `

    <article class="product-card">

      <div class="product-image">

        ${
          product.image

          ? `
            <img
              src="${product.image}"
              alt="${product.name}"
              loading="lazy"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';"
            >

            <div class="placeholder" style="display:none">
              F
            </div>
          `

          : `
            <div class="placeholder">
              F
            </div>
          `
        }

      </div>


      <div class="product-info">

        <span class="product-category">
          ${formatCategory(product.category)}
        </span>

        <h3 class="product-name">
          ${product.name}
        </h3>

        <p class="product-description">
          ${product.description}
        </p>

        <div class="product-bottom">

          <strong class="product-price">
            KSh ${product.price.toLocaleString()}
          </strong>

          <button
            class="add-button"
            onclick="addToCart('${product.id}')"
          >
            Add to cart
          </button>

        </div>

      </div>

    </article>

  `).join("");

}



function searchProducts() {

  const input =
    document.getElementById("searchInput");

  const query =
    input.value.toLowerCase().trim();


  const results = products.filter(product =>

    product.name
      .toLowerCase()
      .includes(query)

    ||

    product.category
      .toLowerCase()
      .includes(query)

  );


  renderProducts(results);

}



function filterProducts(category) {

  const select =
    document.getElementById("categoryFilter");


  if (select) {
    select.value = category;
  }


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



function addToCart(id) {

  const product =
    products.find(product => product.id === id);


  if (!product) return;


  const existing =
    cart.find(item => item.id === id);


  if (existing) {

    existing.quantity++;

  } else {

    cart.push({
      ...product,
      quantity: 1
    });

  }


  saveCart();

  updateCart();

  openCart();

}



function removeFromCart(id) {

  cart =
    cart.filter(item => item.id !== id);

  saveCart();

  updateCart();

}



function changeQuantity(id, amount) {

  const item =
    cart.find(item => item.id === id);


  if (!item) return;


  item.quantity += amount;


  if (item.quantity <= 0) {

    removeFromCart(id);

    return;

  }


  saveCart();

  updateCart();

}



function saveCart() {

  localStorage.setItem(
    "fidelisCart",
    JSON.stringify(cart)
  );

}



function updateCart() {

  const count =
    cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );


  const cartCount =
    document.getElementById("cartCount");

  const mobileCount =
    document.getElementById("mobileCartCount");


  if (cartCount)
    cartCount.textContent = count;


  if (mobileCount)
    mobileCount.textContent = count;


  const container =
    document.getElementById("cartItems");


  if (!container) return;


  if (!cart.length) {

    container.innerHTML = `
      <div class="empty-cart">
        Your cart is empty.
      </div>
    `;

  } else {

    container.innerHTML =
      cart.map(item => `

        <div class="cart-item">

          <div>

            <strong>${item.name}</strong>

            <p>
              KSh ${item.price.toLocaleString()}
            </p>

            <div class="quantity-controls">

              <button
                onclick="changeQuantity('${item.id}', -1)"
              >
                −
              </button>

              <span>
                ${item.quantity}
              </span>

              <button
                onclick="changeQuantity('${item.id}', 1)"
              >
                +
              </button>

            </div>

          </div>


          <button
            class="remove-item"
            onclick="removeFromCart('${item.id}')"
          >
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


  const totalElement =
    document.getElementById("cartTotal");


  if (totalElement) {

    totalElement.textContent =
      `KSh ${total.toLocaleString()}`;

  }

}



function openCart() {

  document
    .getElementById("cartDrawer")
    ?.classList.add("active");


  document
    .getElementById("cartOverlay")
    ?.classList.add("active");

}



function closeCart() {

  document
    .getElementById("cartDrawer")
    ?.classList.remove("active");


  document
    .getElementById("cartOverlay")
    ?.classList.remove("active");

}



function checkoutWhatsApp() {

  if (!cart.length) {

    alert("Your cart is empty.");

    return;

  }


  const items =
    cart.map(item =>

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

${items.join("\n")}

Total: KSh ${total.toLocaleString()}

Please let me know the payment and delivery options.

Thank you.
`;


  const whatsappURL =
    `https://wa.me/${0748418193}?text=${encodeURIComponent(message)}`;


  window.open(
    whatsappURL,
    "_blank"
  );

}



document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderProducts();

    updateCart();

  }
);
