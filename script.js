const WHATSAPP_NUMBER = "254748418193";

const products = [

  /* =========================
     NUTRITION
  ========================= */

  {
    id: "NL001",
    name: "NeoLifeShake",
    category: "nutrition",
    price: 4500,
    image: "images/products/neolifeshake.jpg",
    description: "A convenient nutrition shake designed to complement a balanced lifestyle."
  },

  {
    id: "NL002",
    name: "Tré-en-en®",
    category: "nutrition",
    price: 0,
    image: "images/products/tre-en-en.jpg",
    description: "A whole-food nutritional product made with a blend of grains and legumes."
  },

  {
    id: "NL003",
    name: "NeoLifeTea",
    category: "nutrition",
    price: 0,
    image: "images/products/neolifetea.jpg",
    description: "A tea product from the NeoLife nutrition range."
  },

  {
    id: "NL004",
    name: "Vita Squares",
    category: "nutrition",
    price: 0,
    image: "images/products/vita-squares.jpg",
    description: "A convenient nutritional snack option."
  },

  {
    id: "NL005",
    name: "All Natural Fibre Food & Drink Mix",
    category: "nutrition",
    price: 0,
    image: "images/products/natural-fibre.jpg",
    description: "A fibre-focused nutritional product."
  },

  {
    id: "NL006",
    name: "Fibre Tablets",
    category: "nutrition",
    price: 0,
    image: "images/products/fibre-tablets.jpg",
    description: "A convenient fibre supplement."
  },


  /* =========================
     VITAMINS & SUPPLEMENTS
  ========================= */

  {
    id: "NL007",
    name: "Pro Vitality+",
    category: "supplements",
    price: 0,
    image: "images/products/pro-vitality.jpg",
    description: "A comprehensive daily nutritional supplement."
  },

  {
    id: "NL008",
    name: "Omega-3",
    category: "supplements",
    price: 0,
    image: "images/products/omega-3.jpg",
    description: "An omega-3 nutritional supplement."
  },

  {
    id: "NL009",
    name: "Omega-3 Plus",
    category: "supplements",
    price: 0,
    image: "images/products/omega-3-plus.jpg",
    description: "An omega-3 supplement from the NeoLife range."
  },

  {
    id: "NL010",
    name: "PhytoDefence",
    category: "supplements",
    price: 0,
    image: "images/products/phytodefence.jpg",
    description: "A botanical-based nutritional supplement."
  },

  {
    id: "NL011",
    name: "Vita Guard",
    category: "supplements",
    price: 0,
    image: "images/products/vita-guard.jpg",
    description: "A nutritional supplement from the NeoLife range."
  },

  {
    id: "NL012",
    name: "Multi-Mineral Plus",
    category: "supplements",
    price: 0,
    image: "images/products/multi-mineral-plus.jpg",
    description: "A mineral-focused nutritional supplement."
  },

  {
    id: "NL013",
    name: "Vitamin C Sustained Release",
    category: "supplements",
    price: 0,
    image: "images/products/vitamin-c.jpg",
    description: "A sustained-release vitamin C supplement."
  },

  {
    id: "NL014",
    name: "Vitamin B Complex Sustained Release",
    category: "supplements",
    price: 0,
    image: "images/products/vitamin-b-complex.jpg",
    description: "A sustained-release B-complex supplement."
  },

  {
    id: "NL015",
    name: "Vitamin E 200 IU",
    category: "supplements",
    price: 0,
    image: "images/products/vitamin-e.jpg",
    description: "A vitamin E nutritional supplement."
  },

  {
    id: "NL016",
    name: "Vitamin A & D",
    category: "supplements",
    price: 0,
    image: "images/products/vitamin-a-d.jpg",
    description: "A vitamin A and D nutritional supplement."
  },

  {
    id: "NL017",
    name: "Vegan D with Vitamin D₂/D₃",
    category: "supplements",
    price: 0,
    image: "images/products/vegan-d.jpg",
    description: "A vitamin D nutritional supplement."
  },

  {
    id: "NL018",
    name: "Magnesium Complex",
    category: "supplements",
    price: 0,
    image: "images/products/magnesium-complex.jpg",
    description: "A magnesium nutritional supplement."
  },

  {
    id: "NL019",
    name: "Chelated Zinc",
    category: "supplements",
    price: 0,
    image: "images/products/chelated-zinc.jpg",
    description: "A zinc nutritional supplement."
  },

  {
    id: "NL020",
    name: "Full Motion",
    category: "supplements",
    price: 0,
    image: "images/products/full-motion.jpg",
    description: "A nutritional product from the NeoLife range."
  },

  {
    id: "NL021",
    name: "Garlic Allium Complex",
    category: "supplements",
    price: 0,
    image: "images/products/garlic-allium.jpg",
    description: "A garlic and botanical nutritional supplement."
  },

  {
    id: "NL022",
    name: "Wheat Germ Oil",
    category: "supplements",
    price: 0,
    image: "images/products/wheat-germ-oil.jpg",
    description: "A wheat germ oil nutritional product."
  },

  {
    id: "NL023",
    name: "CoQ10 Mitochondrial Energy Complex",
    category: "supplements",
    price: 0,
    image: "images/products/coq10.jpg",
    description: "A CoQ10 nutritional supplement."
  },

  {
    id: "NL024",
    name: "Carotenoid Complex",
    category: "supplements",
    price: 0,
    image: "images/products/carotenoid-complex.jpg",
    description: "A carotenoid-focused nutritional supplement."
  },


  /* =========================
     PERSONAL CARE
  ========================= */

  {
    id: "NL025",
    name: "Nutriance Cleansing Milk",
    category: "personal-care",
    price: 0,
    image: "images/products/cleansing-milk.jpg",
    description: "A Nutriance facial cleansing product."
  },

  {
    id: "NL026",
    name: "Nutriance Cleansing Gel",
    category: "personal-care",
    price: 0,
    image: "images/products/cleansing-gel.jpg",
    description: "A facial cleansing gel from the Nutriance range."
  },

  {
    id: "NL027",
    name: "Nutriance Balancing Tonic",
    category: "personal-care",
    price: 0,
    image: "images/products/balancing-tonic.jpg",
    description: "A facial balancing tonic."
  },

  {
    id: "NL028",
    name: "Ultra Hydrating Serum",
    category: "personal-care",
    price: 0,
    image: "images/products/ultra-hydrating-serum.jpg",
    description: "A hydrating serum from the Nutriance range."
  },

  {
    id: "NL029",
    name: "Ultra Moisturizing Cream",
    category: "personal-care",
    price: 0,
    image: "images/products/ultra-moisturizing-cream.jpg",
    description: "A moisturizing facial cream."
  },

  {
    id: "NL030",
    name: "Nourishing Hand & Body Lotion",
    category: "personal-care",
    price: 0,
    image: "images/products/body-lotion.jpg",
    description: "A hand and body lotion."
  },

  {
    id: "NL031",
    name: "Refreshing Bath & Shower Gel",
    category: "personal-care",
    price: 0,
    image: "images/products/shower-gel.jpg",
    description: "A bath and shower cleansing product."
  },

  {
    id: "NL032",
    name: "Rich Revitalizing Shampoo",
    category: "personal-care",
    price: 0,
    image: "images/products/shampoo.jpg",
    description: "A shampoo from the NeoLife personal care range."
  },

  {
    id: "NL033",
    name: "Enriching Conditioner",
    category: "personal-care",
    price: 0,
    image: "images/products/conditioner.jpg",
    description: "A conditioning hair-care product."
  },


  /* =========================
     HOUSEHOLD
  ========================= */

  {
    id: "NL034",
    name: "Super 10",
    category: "household",
    price: 0,
    image: "images/products/super-10.jpg",
    description: "A concentrated household cleaning product."
  },

  {
    id: "NL035",
    name: "Super 10 Fragranced",
    category: "household",
    price: 0,
    image: "images/products/super-10-fragranced.jpg",
    description: "A fragranced household cleaning product."
  },

  {
    id: "NL036",
    name: "Light Duty Cleaner Concentrate",
    category: "household",
    price: 0,
    image: "images/products/light-duty-cleaner.jpg",
    description: "A concentrated light-duty household cleaner."
  },

  {
    id: "NL037",
    name: "Super Gro",
    category: "household",
    price: 0,
    image: "images/products/super-gro.jpg",
    description: "A NeoLife household and garden product."
  },

  {
    id: "NL038",
    name: "Wash 'n Wax",
    category: "household",
    price: 0,
    image: "images/products/wash-n-wax.jpg",
    description: "A cleaning product from the NeoLife household range."
  },

  {
    id: "NL039",
    name: "Lemon Glo",
    category: "household",
    price: 0,
    image: "images/products/lemon-glo.jpg",
    description: "A household cleaning product."
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
