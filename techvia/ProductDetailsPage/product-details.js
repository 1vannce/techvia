/* ------------------------------------------ */
/* PRODUCT DATA                              */
/* ------------------------------------------ */

const products = [
  {
    id: "monitor_1",
    name: "Ultra 32″ Curved Monitor",
    category: "display",
    price: 399,
    description:
      "32″ QHD curved monitor with high refresh rate and ambient RGB. Perfect for immersive gaming and professional work. Features edge-to-edge curved display with stunning color accuracy and smooth 165Hz refresh rate.",
    specs: {
      Size: "32 in",
      Refresh: "165 Hz",
      Resolution: "2560×1440",
      Panel: "VA Curved",
      RGB: "Yes",
    },
    images: [
      "../ProductsPage/images/ultra32_1.webp",
      "../ProductsPage/images/ultra32_2.webp",
      "../ProductsPage/images/ultra32_3.webp",
    ],
  },
  {
    id: "monitor_2",
    name: "Budget 27″ IPS Monitor",
    category: "display",
    price: 199,
    description:
      "27″ IPS panel monitor 144Hz — great balance for budget-conscious gamers. Vibrant colors and wide viewing angles make this an excellent choice for both work and play.",
    specs: {
      Size: "27 in",
      Refresh: "144 Hz",
      Resolution: "1920×1080",
      Panel: "IPS",
      RGB: "No",
    },
    images: [
      "../ProductsPage/images/27inch_1.webp",
      "../ProductsPage/images/27inch_2.webp",
    ],
  },
  {
    id: "monitor_3",
    name: "Compact 24″ FHD Monitor",
    category: "display",
    price: 129,
    description:
      "24″ Full HD monitor, 75Hz — compact & ideal for small setups. Space-saving design without compromising on quality. Perfect for home offices and casual gaming.",
    specs: {
      Size: "24 in",
      Refresh: "75 Hz",
      Resolution: "1920×1080",
      Panel: "TN",
      RGB: "No",
    },
    images: [
      "../ProductsPage/images/24compact_1.webp",
      "../ProductsPage/images/24compact_2.webp",
    ],
  },
  {
    id: "keyboard_1",
    name: "RGB Mechanical Keyboard Pro",
    category: "keyboard",
    price: 89,
    description:
      "Full-size mechanical keyboard with blue switches and per-key RGB. Tactile feedback and satisfying click for typing enthusiasts. Durable construction with aluminum frame.",
    specs: {
      Switch: "Blue",
      Layout: "104-key",
      Lighting: "Full RGB",
      Connection: "USB-C",
    },
    images: [
      "../ProductsPage/images/rgbmech_1.webp",
      "../ProductsPage/images/rgbmech_2.webp",
      "../ProductsPage/images/rgbmech_3.webp",
    ],
  },
  {
    id: "keyboard_2",
    name: "Compact TKL Keyboard",
    category: "keyboard",
    price: 59,
    description:
      "TKL layout mechanical keyboard, linear switches, minimalistic build. Compact design saves desk space while maintaining essential keys. Smooth linear switches for fast typing.",
    specs: {
      Switch: "Red",
      Layout: "87-key TKL",
      Lighting: "White LED",
      Connection: "USB Wired",
    },
    images: [
      "../ProductsPage/images/tklkey_1.webp",
      "../ProductsPage/images/tklkey_2.webp",
    ],
  },
  {
    id: "keyboard_3",
    name: "Budget Membrane Keyboard",
    category: "keyboard",
    price: 25,
    description:
      "Affordable membrane keyboard, no frills but reliable for everyday use. Quiet keys and comfortable typing experience. Spill-resistant design for added durability.",
    specs: {
      Type: "Membrane",
      Layout: "Full 104-key",
      Lighting: "None",
      Connection: "USB Wired",
    },
    images: [
      "../ProductsPage/images/membranekey_1.webp",
      "../ProductsPage/images/membranekey_2.webp",
    ],
  },
  {
    id: "mouse_1",
    name: "Ergonomic Gaming Mouse X1",
    category: "mouse",
    price: 49,
    description:
      "High-DPI RGB gaming mouse with programmable buttons and ergonomic grip. Precision sensor for accurate tracking. Comfortable design for extended gaming sessions.",
    specs: { DPI: "8000", Buttons: "6", Grip: "Palm/Claw", Lighting: "RGB" },
    images: [
      "../ProductsPage/images/gamingm_1.webp",
      "../ProductsPage/images/gamingm_2.webp",
    ],
  },
  {
    id: "mouse_2",
    name: "Budget Mouse M20",
    category: "mouse",
    price: 19,
    description:
      "Affordable wired mouse with simple RGB lighting, ideal for basic gaming. Reliable optical sensor and durable switches. Great value for casual gamers.",
    specs: { DPI: "3200", Buttons: "3", Grip: "Palm", Lighting: "RGB" },
    images: [
      "../ProductsPage/images/wiredm_1.webp",
      "../ProductsPage/images/wiredm_2.webp",
      "../ProductsPage/images/wiredm_3.webp",
    ],
  },
  {
    id: "chair_1",
    name: "Pro Gaming Chair Titan",
    category: "chairs",
    price: 259,
    description:
      "Ergonomic chair with lumbar support, LED edges — built for long sessions. Premium PU leather construction with breathable design. Fully adjustable for perfect posture.",
    specs: {
      Material: "PU Leather",
      MaxLoad: "150 kg",
      Adjustable: "Height / Armrests / Recline",
      Lighting: "LED",
      Wheels: "360° Nylon",
    },
    images: [
      "../ProductsPage/images/gchair_1.webp",
      "../ProductsPage/images/gchair_2.webp",
      "../ProductsPage/images/gchair_3.webp",
    ],
  },
  {
    id: "chair_2",
    name: "Standard Gaming Chair Basic",
    category: "chairs",
    price: 129,
    description:
      "Simple padded gaming chair with tilt lock and caster wheels. Comfortable fabric upholstery for breathable seating. Budget-friendly option for home offices.",
    specs: {
      Material: "Fabric",
      MaxLoad: "120 kg",
      Adjustable: "Height",
      Lighting: "No",
      Wheels: "Caster Nylon",
    },
    images: [
      "../ProductsPage/images/schair_1.webp",
      "../ProductsPage/images/schair_2.webp",
      "../ProductsPage/images/schair_3.webp",
    ],
  },
  {
    id: "audio_1",
    name: "Surround Headset 7.1",
    category: "audio",
    price: 69,
    description:
      "7.1 surround gaming headset with RGB earcups and noise-cancel mic. Immersive audio experience for gaming and movies. Lightweight design for all-day comfort.",
    specs: {
      Driver: "50 mm",
      Surround: "7.1 Virtual",
      Mic: "Detachable",
      Lighting: "RGB",
      Connection: "3.5 mm Cable",
    },
    images: [
      "../ProductsPage/images/sheadset_1.webp",
      "../ProductsPage/images/sheadset_2.webp",
      "../ProductsPage/images/sheadset_3.webp",
    ],
  },
];

/* ------------------------------------------ */
/* BACKGROUND SKY ANIMATION                   */
/* ------------------------------------------ */

const canvasBG = document.getElementById("bg");
const ctxBG = canvasBG.getContext("2d");
let w, h;

function resizeCanvas() {
  w = canvasBG.width = window.innerWidth;
  h = canvasBG.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const stars = Array.from({ length: 100 }, () => ({
  x: Math.random() * w,
  y: Math.random() * h,
  r: Math.random() * 1.2 + 0.3,
  vx: (Math.random() - 0.5) * 0.05,
  vy: (Math.random() - 0.5) * 0.05,
  alpha: Math.random() * 0.5 + 0.4,
  flicker: Math.random() * 0.02 + 0.01,
}));

function animateSky() {
  ctxBG.clearRect(0, 0, w, h);

  for (let s of stars) {
    s.x += s.vx;
    s.y += s.vy;

    if (s.x < 0) s.x = w;
    if (s.x > w) s.x = 0;
    if (s.y < 0) s.y = h;
    if (s.y > h) s.y = 0;

    s.alpha += (Math.random() - 0.5) * s.flicker;
    s.alpha = Math.max(0.2, Math.min(1, s.alpha));

    ctxBG.beginPath();
    ctxBG.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
    ctxBG.fillStyle = `rgba(255,255,255,${s.alpha})`;
    ctxBG.fill();
  }

  requestAnimationFrame(animateSky);
}
animateSky();

/* ------------------------------------------ */
/* CART FUNCTIONALITY                         */
/* ------------------------------------------ */

const CART_STORAGE_KEY = "prototypeCart";

function getCart() {
  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (e) {
    console.error("Error reading cart", e);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (e) {
    console.error("Error saving cart", e);
  }
}

function addToCart(productId, quantity = 1) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  let currentCart = getCart();
  const existingItem = currentCart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    currentCart.push({ id: product.id, quantity: quantity });
  }

  saveCart(currentCart);
  updateCartCount();
  showToast(`✓ ${product.name} added to cart!`);
}

function updateCartCount() {
  const cart = getCart();
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const countEl = document.getElementById("cartCount");
  if (countEl) {
    countEl.textContent = totalCount;
  }
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "cart-toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}

/* ------------------------------------------ */
/* IMAGE LOADING                              */
/* ------------------------------------------ */

function loadImage(cvs, src) {
  const ctx = cvs.getContext("2d");

  const img = new Image();
  img.onload = () => {
    ctx.clearRect(0, 0, cvs.width, cvs.height);

    // Calculate dimensions to fit
    const scale = Math.min(cvs.width / img.width, cvs.height / img.height);
    const x = (cvs.width - img.width * scale) / 2;
    const y = (cvs.height - img.height * scale) / 2;

    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };
  img.onerror = () => {
    // Draw placeholder
    ctx.fillStyle = "#2f3c4a";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    ctx.fillStyle = "#666";
    ctx.font = "14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Image not found", cvs.width / 2, cvs.height / 2);
  };
  img.src = src;
}

/* ------------------------------------------ */
/* PRODUCT DETAILS                            */
/* ------------------------------------------ */

function getProductIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

function renderProductDetails() {
  const productId = getProductIdFromUrl();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    document.querySelector(".container").innerHTML = `
            <div class="loading">
                <p>Product not found. <a href="../ProductsPage/index.html" style="color: #7ddaff;">Go back to products</a></p>
            </div>
        `;
    return;
  }

  // Update page title
  document.title = `${product.name} - TechVia`;

  // Update breadcrumb
  document.getElementById("breadcrumbName").textContent = product.name;

  // Update product info
  document.getElementById("productName").textContent = product.name;
  document.getElementById("productPrice").textContent = `$${product.price}`;
  document.getElementById("productDescription").textContent =
    product.description;

  // Render specs
  const specsList = document.getElementById("specsList");
  specsList.innerHTML = "";
  for (const [key, value] of Object.entries(product.specs)) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${key}</span><span>${value}</span>`;
    specsList.appendChild(li);
  }

  // Render main image
  const mainImage = document.getElementById("mainImage");
  mainImage.width = 600;
  mainImage.height = 450;
  loadImage(mainImage, product.images[0]);

  // Render thumbnails
  const thumbnailList = document.getElementById("thumbnailList");
  thumbnailList.innerHTML = "";
  product.images.forEach((src, index) => {
    const thumbnail = document.createElement("canvas");
    thumbnail.width = 120;
    thumbnail.height = 90;
    if (index === 0) thumbnail.classList.add("active");

    loadImage(thumbnail, src);

    thumbnail.onclick = () => {
      // Update main image
      loadImage(mainImage, src);

      // Update active state
      document
        .querySelectorAll(".thumbnail-list canvas")
        .forEach((t) => t.classList.remove("active"));
      thumbnail.classList.add("active");
    };

    thumbnailList.appendChild(thumbnail);
  });

  // Quantity controls
  const quantityInput = document.getElementById("quantity");
  document.getElementById("decreaseQty").onclick = () => {
    const current = parseInt(quantityInput.value) || 1;
    if (current > 1) quantityInput.value = current - 1;
  };
  document.getElementById("increaseQty").onclick = () => {
    const current = parseInt(quantityInput.value) || 1;
    quantityInput.value = current + 1;
  };

  // Add to cart button
  document.getElementById("addToCartBtn").onclick = () => {
    const quantity = parseInt(quantityInput.value) || 1;
    addToCart(product.id, quantity);
  };

  // Back button
  document.getElementById("backBtn").onclick = () => {
    window.location.href = "../ProductsPage/index.html";
  };
}

/* ------------------------------------------ */
/* INITIALIZATION                             */
/* ------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderProductDetails();
});
