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

let mouse = { x: w / 2, y: h / 2 };
window.addEventListener("mousemove", e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

const stars = Array.from({ length: 150 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.2 + 0.3,
    vx: (Math.random() - 0.5) * 0.05,
    vy: (Math.random() - 0.5) * 0.05,
    alpha: Math.random() * 0.5 + 0.4,
    flicker: Math.random() * 0.02 + 0.01
}));

let shootingStars = [];

function addShootingStar() {
    shootingStars.push({
        x: Math.random() * w * 0.5,
        y: Math.random() * h * 0.3,
        vx: 6,
        vy: 3,
        length: 200
    });
}
setInterval(() => {
    if (shootingStars.length < 2) addShootingStar();
}, 4500);

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

    for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];

        const grad = ctxBG.createLinearGradient(
            s.x, s.y,
            s.x - s.length,
            s.y - s.length * 0.6
        );

        grad.addColorStop(0, "rgba(255,255,255,1)");
        grad.addColorStop(1, "rgba(255,255,255,0)");

        ctxBG.strokeStyle = grad;
        ctxBG.lineWidth = 2;

        ctxBG.beginPath();
        ctxBG.moveTo(s.x, s.y);
        ctxBG.lineTo(s.x - s.length, s.y - s.length * 0.6);
        ctxBG.stroke();

        s.x += s.vx;
        s.y += s.vy;

        if (s.x > w + 300 || s.y > h + 300) shootingStars.splice(i, 1);
    }

    requestAnimationFrame(animateSky);
}
animateSky();

/* ------------------------------------------ */
/* PRODUCT DATA                                */
/* ------------------------------------------ */

const products = [
    {
        id: 'monitor_1',
        name: "Ultra 32″ Curved Monitor",
        category: "display",
        price: 399,
        description: "32″ QHD curved monitor with high refresh rate and ambient RGB.",
        specs: { "Size": "32 in", "Refresh": "165 Hz", "Resolution": "2560×1440", "Panel": "VA Curved", "RGB": "Yes" },
        images: ["../ProductsPage/images/ultra32_1.webp", "../ProductsPage/images/ultra32_2.webp", "../ProductsPage/images/ultra32_3.webp"]
    },
    {
        id: 'monitor_2',
        name: "Budget 27″ IPS Monitor",
        category: "display",
        price: 199,
        description: "27″ IPS panel monitor 144Hz — great balance for budget-conscious gamers.",
        specs: { "Size": "27 in", "Refresh": "144 Hz", "Resolution": "1920×1080", "Panel": "IPS", "RGB": "No" },
        images: ["../ProductsPage/images/27inch_1.webp", "../ProductsPage/images/27inch_2.webp"]
    },
    {
        id: 'monitor_3',
        name: "Compact 24″ FHD Monitor",
        category: "display",
        price: 129,
        description: "24″ Full HD monitor, 75Hz — compact & ideal for small setups.",
        specs: { "Size": "24 in", "Refresh": "75 Hz", "Resolution": "1920×1080", "Panel": "TN", "RGB": "No" },
        images: ["../ProductsPage/images/24compact_1.webp", "../ProductsPage/images/24compact_2.webp"]
    },
    {
        id: 'keyboard_1',
        name: "RGB Mechanical Keyboard Pro",
        category: "keyboard",
        price: 89,
        description: "Full-size mechanical keyboard with blue switches and per-key RGB.",
        specs: { "Switch": "Blue", "Layout": "104-key", "Lighting": "Full RGB", "Connection": "USB-C" },
        images: ["../ProductsPage/images/rgbmech_1.webp", "../ProductsPage/images/rgbmech_2.webp", "../ProductsPage/images/rgbmech_3.webp"]
    },
    {
        id: 'keyboard_2',
        name: "Compact TKL Keyboard",
        category: "keyboard",
        price: 59,
        description: "TKL layout mechanical keyboard, linear switches, minimalistic build.",
        specs: { "Switch": "Red", "Layout": "87-key TKL", "Lighting": "White LED", "Connection": "USB Wired" },
        images: ["../ProductsPage/images/tklkey_1.webp", "../ProductsPage/images/tklkey_2.webp"]
    },
    {
        id: 'keyboard_3',
        name: "Budget Membrane Keyboard",
        category: "keyboard",
        price: 25,
        description: "Affordable membrane keyboard, no frills but reliable for everyday use.",
        specs: { "Type": "Membrane", "Layout": "Full 104-key", "Lighting": "None", "Connection": "USB Wired" },
        images: ["../ProductsPage/images/membranekey_1.webp", "../ProductsPage/images/membranekey_2.webp"]
    },
    {
        id: 'mouse_1',
        name: "Ergonomic Gaming Mouse X1",
        category: "mouse",
        price: 49,
        description: "High-DPI RGB gaming mouse with programmable buttons and ergonomic grip.",
        specs: { "DPI": "8000", "Buttons": "6", "Grip": "Palm/Claw", "Lighting": "RGB" },
        images: ["../ProductsPage/images/gamingm_1.webp", "../ProductsPage/images/gamingm_2.webp"]
    },
    {
        id: 'mouse_2',
        name: "Budget Mouse M20",
        category: "mouse",
        price: 19,
        description: "Affordable wired mouse with simple RGB lighting, ideal for basic gaming.",
        specs: { "DPI": "3200", "Buttons": "3", "Grip": "Palm", "Lighting": "RGB" },
        images: ["../ProductsPage/images/wiredm_1.webp", "../ProductsPage/images/wiredm_2.webp", "../ProductsPage/images/wiredm_3.webp"]
    },
    {
        id: 'chair_1',
        name: "Pro Gaming Chair Titan",
        category: "chairs",
        price: 259,
        description: "Ergonomic chair with lumbar support, LED edges — built for long sessions.",
        specs: { "Material": "PU Leather", "MaxLoad": "150 kg", "Adjustable": "Height / Armrests / Recline", "Lighting": "LED", "Wheels": "360° Nylon" },
        images: ["../ProductsPage/images/gchair_1.webp", "../ProductsPage/images/gchair_2.webp", "../ProductsPage/images/gchair_3.webp"]
    },
    {
        id: 'chair_2',
        name: "Standard Gaming Chair Basic",
        category: "chairs",
        price: 129,
        description: "Simple padded gaming chair with tilt lock and caster wheels.",
        specs: { "Material": "Fabric", "MaxLoad": "120 kg", "Adjustable": "Height", "Lighting": "No", "Wheels": "Caster Nylon" },
        images: ["../ProductsPage/images/schair_1.webp", "../ProductsPage/images/schair_2.webp", "../ProductsPage/images/schair_3.webp"]
    },
    {
        id: 'audio_1',
        name: "Surround Headset 7.1",
        category: "audio",
        price: 69,
        description: "7.1 surround gaming headset with RGB earcups and noise-cancel mic.",
        specs: { "Driver": "50 mm", "Surround": "7.1 Virtual", "Mic": "Detachable", "Lighting": "RGB", "Connection": "3.5 mm Cable" },
        images: ["../ProductsPage/images/sheadset_1.webp", "../ProductsPage/images/sheadset_2.webp", "../ProductsPage/images/sheadset_3.webp"]
    }
];

const productMap = products.reduce((map, product) => {
    map[product.id] = product;
    return map;
}, {});

/* ------------------------------------------ */
/* CART FUNCTIONS                             */
/* ------------------------------------------ */

const CART_STORAGE_KEY = 'prototypeCart';

function getCart() {
    try {
        const storedCart = localStorage.getItem(CART_STORAGE_KEY);
        return storedCart ? JSON.parse(storedCart) : [];
    } catch (e) {
        console.error("Error reading cart from localStorage", e);
        return [];
    }
}

function saveCart(cart) {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
        console.error("Error writing cart to localStorage", e);
    }
}

function updateCartCounter() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
        cartCountEl.textContent = totalItems;
    }
}

function addToCart(productId) {
    const product = productMap[productId];
    if (!product) {
        console.error("Product with ID " + productId + " not found.");
        return;
    }

    let currentCart = getCart();
    const existingItem = currentCart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        currentCart.push({
            id: product.id,
            quantity: 1
        });
    }

    saveCart(currentCart);
    updateCartCounter();

    // Show feedback
    const btn = document.getElementById('addToCartBtn');
    const originalText = btn.textContent;
    btn.textContent = 'Added to Cart!';
    btn.style.background = '#4CAF50';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 2000);
}

/* ------------------------------------------ */
/* LOAD PRODUCT                               */
/* ------------------------------------------ */

function loadProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId || !productMap[productId]) {
        document.body.innerHTML = '<div style="text-align: center; padding: 50px; color: white;"><h1>Product not found</h1><a href="../ProductsPage/index.html" style="color: #7ddaff;">Go back to products</a></div>';
        return;
    }

    const product = productMap[productId];

    // Set product name
    document.getElementById('productName').textContent = product.name;
    
    // Update breadcrumb
    const breadcrumbEl = document.getElementById('breadcrumbProduct');
    if (breadcrumbEl) {
        breadcrumbEl.textContent = product.name;
    }

    // Set price
    document.getElementById('productPrice').textContent = `$${product.price}`;

    // Set description
    document.getElementById('productDescription').textContent = product.description;

    // Set specs
    const specsList = document.getElementById('productSpecs');
    specsList.innerHTML = '';
    for (const key in product.specs) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${key}:</strong> <span>${product.specs[key]}</span>`;
        specsList.appendChild(li);
    }

    // Set main image
    const mainImage = document.getElementById('mainImage');
    if (product.images && product.images.length > 0) {
        mainImage.src = product.images[0];
        mainImage.alt = product.name;
    }

    // Set thumbnails
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    thumbnailContainer.innerHTML = '';
    product.images.forEach((imgSrc, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail' + (index === 0 ? ' active' : '');
        thumbnail.onclick = () => {
            mainImage.src = imgSrc;
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
        };
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `${product.name} - Image ${index + 1}`;
        thumbnail.appendChild(img);
        thumbnailContainer.appendChild(thumbnail);
    });

    // Set add to cart button
    document.getElementById('addToCartBtn').onclick = () => addToCart(productId);
}

/* ------------------------------------------ */
/* INITIALIZATION                             */
/* ------------------------------------------ */

document.addEventListener('DOMContentLoaded', () => {
    loadProduct();
    updateCartCounter();
});

