const products = [
  {
    id: "monitor_1",
    name: "Ultra 32″ Curved Monitor",
    category: "display",
    price: 399,
    description:
      "32″ QHD curved monitor with high refresh rate and ambient RGB.",
    specs: {
      Size: "32 in",
      Refresh: "165 Hz",
      Resolution: "2560×1440",
      Panel: "VA Curved",
      RGB: "Yes",
    },
    images: [
      "images/ultra32_1.webp",
      "images/ultra32_2.webp",
      "images/ultra32_3.webp",
    ],
  },
  {
    id: "monitor_2",
    name: "Budget 27″ IPS Monitor",
    category: "display",
    price: 199,
    description:
      "27″ IPS panel monitor 144Hz — great balance for budget-conscious gamers.",
    specs: {
      Size: "27 in",
      Refresh: "144 Hz",
      Resolution: "1920×1080",
      Panel: "IPS",
      RGB: "No",
    },
    images: ["images/27inch_1.webp", "images/27inch_2.webp"],
  },
  {
    id: "monitor_3",
    name: "Compact 24″ FHD Monitor",
    category: "display",
    price: 129,
    description:
      "24″ Full HD monitor, 75Hz — compact & ideal for small setups.",
    specs: {
      Size: "24 in",
      Refresh: "75 Hz",
      Resolution: "1920×1080",
      Panel: "TN",
      RGB: "No",
    },
    images: ["images/24compact_1.webp", "images/24compact_2.webp"],
  },
  {
    id: "keyboard_1",
    name: "RGB Mechanical Keyboard Pro",
    category: "keyboard",
    price: 89,
    description:
      "Full-size mechanical keyboard with blue switches and per-key RGB.",
    specs: {
      Switch: "Blue",
      Layout: "104-key",
      Lighting: "Full RGB",
      Connection: "USB-C",
    },
    images: [
      "images/rgbmech_1.webp",
      "images/rgbmech_2.webp",
      "images/rgbmech_3.webp",
    ],
  },
  {
    id: "keyboard_2",
    name: "Compact TKL Keyboard",
    category: "keyboard",
    price: 59,
    description:
      "TKL layout mechanical keyboard, linear switches, minimalistic build.",
    specs: {
      Switch: "Red",
      Layout: "87-key TKL",
      Lighting: "White LED",
      Connection: "USB Wired",
    },
    images: ["images/tklkey_1.webp", "images/tklkey_2.webp"],
  },
  {
    id: "keyboard_3",
    name: "Budget Membrane Keyboard",
    category: "keyboard",
    price: 25,
    description:
      "Affordable membrane keyboard, no frills but reliable for everyday use.",
    specs: {
      Type: "Membrane",
      Layout: "Full 104-key",
      Lighting: "None",
      Connection: "USB Wired",
    },
    images: ["images/membranekey_1.webp", "images/membranekey_2.webp"],
  },
  {
    id: "mouse_1",
    name: "Ergonomic Gaming Mouse X1",
    category: "mouse",
    price: 49,
    description:
      "High-DPI RGB gaming mouse with programmable buttons and ergonomic grip.",
    specs: { DPI: "8000", Buttons: "6", Grip: "Palm/Claw", Lighting: "RGB" },
    images: ["images/gamingm_1.webp", "images/gamingm_2.webp"],
  },
  {
    id: "mouse_2",
    name: "Budget Mouse M20",
    category: "mouse",
    price: 19,
    description:
      "Affordable wired mouse with simple RGB lighting, ideal for basic gaming.",
    specs: { DPI: "3200", Buttons: "3", Grip: "Palm", Lighting: "RGB" },
    images: [
      "images/wiredm_1.webp",
      "images/wiredm_2.webp",
      "images/wiredm_3.webp",
    ],
  },
  {
    id: "chair_1",
    name: "Pro Gaming Chair Titan",
    category: "chairs",
    price: 259,
    description:
      "Ergonomic chair with lumbar support, LED edges — built for long sessions.",
    specs: {
      Material: "PU Leather",
      MaxLoad: "150 kg",
      Adjustable: "Height / Armrests / Recline",
      Lighting: "LED",
      Wheels: "360° Nylon",
    },
    images: [
      "images/gchair_1.webp",
      "images/gchair_2.webp",
      "images/gchair_3.webp",
    ],
  },
  {
    id: "chair_2",
    name: "Standard Gaming Chair Basic",
    category: "chairs",
    price: 129,
    description: "Simple padded gaming chair with tilt lock and caster wheels.",
    specs: {
      Material: "Fabric",
      MaxLoad: "120 kg",
      Adjustable: "Height",
      Lighting: "No",
      Wheels: "Caster Nylon",
    },
    images: [
      "images/schair_1.webp",
      "images/schair_2.webp",
      "images/schair_3.webp",
    ],
  },
  {
    id: "audio_1",
    name: "Surround Headset 7.1",
    category: "audio",
    price: 69,
    description:
      "7.1 surround gaming headset with RGB earcups and noise-cancel mic.",
    specs: {
      Driver: "50 mm",
      Surround: "7.1 Virtual",
      Mic: "Detachable",
      Lighting: "RGB",
      Connection: "3.5 mm Cable",
    },
    images: [
      "images/sheadset_1.webp",
      "images/sheadset_2.webp",
      "images/sheadset_3.webp",
    ],
  },
];

const productMap = products.reduce((map, product) => {
  map[product.id] = product;
  return map;
}, {});

// ==================== CONSTANTS & ELEMENTS ====================

const CART_STORAGE_KEY = "prototypeCart";

// Cart elements
const cartItemsContainer = document.getElementById("cartItems");
const editHeader = document.getElementById("editHeader");
const cartContainer = document.getElementById("cartContainer");

// Modal elements
const deleteModal = document.getElementById("deleteModal");
const deleteModalHeader = document.getElementById("deleteModalHeader");
const modalMessage = document.getElementById("modalMessage");
const confirmDeleteButton = document.getElementById("confirmDelete");
const cancelDeleteButton = document.getElementById("cancelDelete");

// Checkout elements
const checkoutView = document.getElementById("checkoutView");
const shippingView = document.getElementById("shippingView");
const confirmationView = document.getElementById("confirmationView");

// Summary display fields
const summaryName = document.getElementById("userName");
const summaryPhone = document.getElementById("userPhone");
const summaryAddress = document.getElementById("userAddress");
const productSubtotalEl = document.getElementById("productSubtotal");
const shippingSubtotalEl = document.getElementById("shippingSubtotal");
const totalAmountEl = document.getElementById("totalAmount");
const voucherDiscountEl = document.getElementById("voucherDiscount");
const productDetails = document.getElementById("productDetails");
const productDropdown = document.getElementById("productDropdown");

// Voucher UI elements
const voucherInputEl = document.getElementById("voucherInput");
const applyVoucherBtn = document.getElementById("applyVoucher");

// Buttons
const editAddressLink = document.getElementById("editAddressLink");
const backToCheckout = document.getElementById("backToCheckout");
const placeOrderBtn = document.getElementById("placeOrderBtn");
const countdownBtn = document.getElementById("countdownBtn");
const viewAllPayments = document.getElementById("viewAllPayments");
const expandedPayments = document.getElementById("expandedPayments");

// Payment method elements
const paymentRadios = document.querySelectorAll('input[name="payment"]');
const gcashDetails = document.getElementById("gcashDetails");
const paymayaDetails = document.getElementById("paymayaDetails");
const bankDetails = document.getElementById("bankDetails");

// Form elements
const shippingForm = document.getElementById("shippingForm");
const provinceSelect = document.getElementById("province");
const citySelect = document.getElementById("city");

// ==================== STATE VARIABLES ====================
var isEditMode = false;
var itemsToDelete = [];

var userData = {
  firstname: "Firstname",
  lastname: "Lastname",
  email: "",
  phone: "0000000000",
  province: "",
  city: "",
  zipcode: "",
  street: "",
  fullAddress: "Province, City, Street, Zip Code",
};

var shippingFee = 69.69;
var voucherDiscount = 0;
var currentPaymentMethod = "cod";
var paymentDetailsValid = {
  gcash: false,
  paymaya: false,
  bank: false,
};
var isVoucherApplied = false;
var activeVoucher = null;
var usedVouchers = [];
var availableVouchers = [
  { code: "SAVE10", type: "amount", value: 10 },
  { code: "SAVE20", type: "amount", value: 20 },
  { code: "SAVE30", type: "amount", value: 30 },
  { code: "SAVE40", type: "amount", value: 40 },
  { code: "SAVE50", type: "amount", value: 50 },
  { code: "SAVE60", type: "amount", value: 60 },
  { code: "SAVE70", type: "amount", value: 70 },
  { code: "SAVE80", type: "amount", value: 80 },
  { code: "SAVE90", type: "amount", value: 90 },
  { code: "SAVE100", type: "amount", value: 100 },
  { code: "FREESHIP", type: "shipping", value: shippingFee },
];

function findAvailableVoucher(code) {
  code = code.trim().toUpperCase();

  for (var i = 0; i < availableVouchers.length; i++) {
    if (availableVouchers[i].code.toUpperCase() === code) {
      return availableVouchers[i];
    }
  }
  return null;
}

function isVoucherUsed(code) {
  code = code.trim().toUpperCase();

  for (var i = 0; i < usedVouchers.length; i++) {
    if (usedVouchers[i].code.toUpperCase() === code) {
      return true;
    }
  }
  return false;
}

function moveVoucherToUsed(voucher) {
  // Remove from availableVouchers
  var newAvailable = [];
  for (var i = 0; i < availableVouchers.length; i++) {
    if (availableVouchers[i].code !== voucher.code) {
      newAvailable.push(availableVouchers[i]);
    }
  }
  availableVouchers = newAvailable;

  usedVouchers.push(voucher);
}

// ==================== PHILIPPINES PROVINCES & CITIES ====================
var philippinesData = {
  Aklan: ["Kalibo", "Malay (Boracay)", "New Washington", "Banga", "Ibajay"],
  Albay: [
    "Legazpi City",
    "Tabaco City",
    "Ligao City",
    "Guinobatan",
    "Daraga",
    "Camalig",
  ],
  Bataan: [
    "Balanga City",
    "Mariveles",
    "Limay",
    "Orani",
    "Dinalupihan",
    "Hermosa",
  ],
  Batangas: [
    "Batangas City",
    "Lipa",
    "Tanauan",
    "Santo Tomas",
    "Taal",
    "Nasugbu",
    "Mabini",
    "Balayan",
  ],
  Benguet: ["Baguio City", "La Trinidad", "Itogon", "Tuba", "Sablan", "Atok"],
  Bohol: ["Tagbilaran City", "Panglao", "Dauis", "Loboc", "Carmen", "Tubigon"],
  Bukidnon: [
    "Malaybalay City",
    "Valencia City",
    "Manolo Fortich",
    "Maramag",
    "Don Carlos",
    "Quezon",
  ],
  Bulacan: [
    "Malolos",
    "Meycauayan",
    "San Jose del Monte",
    "Marilao",
    "Bocaue",
    "Santa Maria",
    "Balagtas",
    "Plaridel",
  ],
  "Camarines Sur": [
    "Naga City",
    "Iriga City",
    "Pili",
    "Calabanga",
    "Goa",
    "Nabua",
  ],
  Capiz: ["Roxas City", "Panay", "Dao", "Mambusao", "Pilar", "Jamindan"],
  Cavite: [
    "Bacoor",
    "Dasmariñas",
    "Imus",
    "General Trias",
    "Tagaytay",
    "Trece Martires",
    "Cavite City",
    "Kawit",
    "Silang",
  ],
  Cebu: [
    "Cebu City",
    "Mandaue City",
    "Lapu-Lapu City",
    "Talisay City",
    "Toledo City",
    "Danao City",
    "Carcar City",
    "Naga",
    "Bogo",
  ],
  "Davao de Oro": [
    "Nabunturan",
    "Monkayo",
    "Compostela",
    "Maco",
    "Pantukan",
    "Laak",
  ],
  "Davao del Norte": [
    "Tagum City",
    "Panabo City",
    "Samal",
    "Sto. Tomas",
    "Kapalong",
  ],
  "Davao del Sur": [
    "Davao City",
    "Digos City",
    "Santa Cruz",
    "Malalag",
    "Padada",
    "Bansalan",
  ],
  "Davao Oriental": ["Mati City", "Lupon", "Baganga", "Manay", "Cateel"],
  Ifugao: ["Lagawe", "Lamut", "Banaue", "Kiangan", "Mayoyao"],
  "Ilocos Norte": [
    "Laoag City",
    "Batac City",
    "San Nicolas",
    "Paoay",
    "Dingras",
  ],
  "Ilocos Sur": [
    "Vigan City",
    "Candon City",
    "Santa Cruz",
    "Narvacan",
    "Sinait",
  ],
  Iloilo: [
    "Iloilo City",
    "Passi",
    "Oton",
    "Pavia",
    "Leganes",
    "Santa Barbara",
    "Cabatuan",
    "Pototan",
  ],
  Kalinga: ["Tabuk City", "Rizal", "Tinglayan", "Lubuagan", "Pasil"],
  Laguna: [
    "Santa Rosa",
    "Biñan",
    "San Pedro",
    "Calamba",
    "Cabuyao",
    "San Pablo",
    "Santa Cruz",
    "Los Baños",
    "Pagsanjan",
  ],
  "La Union": ["San Fernando City", "Agoo", "Bauang", "Naguilian", "Caba"],
  "Metro Manila": [
    "Manila",
    "Quezon City",
    "Makati",
    "Taguig",
    "Pasig",
    "Pasay",
    "Caloocan",
    "Las Piñas",
    "Muntinlupa",
    "Marikina",
    "Mandaluyong",
    "Parañaque",
    "San Juan",
    "Malabon",
    "Navotas",
    "Valenzuela",
    "Pateros",
  ],
  "Misamis Occidental": [
    "Oroquieta City",
    "Ozamiz City",
    "Tangub City",
    "Plaridel",
    "Calamba",
  ],
  "Misamis Oriental": [
    "Cagayan de Oro City",
    "Gingoog City",
    "El Salvador City",
    "Jasaan",
    "Opol",
    "Claveria",
  ],
  "Negros Occidental": [
    "Bacolod City",
    "Bago City",
    "Cadiz City",
    "San Carlos City",
    "Silay City",
    "Talisay City",
    "Victorias City",
    "Kabankalan City",
  ],
  "Negros Oriental": [
    "Dumaguete City",
    "Bais City",
    "Guihulngan",
    "Tanjay",
    "Bayawan City",
    "Sibulan",
  ],
  "Nueva Ecija": [
    "Cabanatuan City",
    "San Jose City",
    "Gapan City",
    "Muñoz",
    "Palayan City",
    "Santa Rosa",
    "Guimba",
  ],
  "Occidental Mindoro": [
    "Mamburao",
    "San Jose",
    "Sablayan",
    "Abra de Ilog",
    "Lubang",
  ],
  "Oriental Mindoro": [
    "Calapan City",
    "Pinamalayan",
    "Roxas",
    "Naujan",
    "Puerto Galera",
  ],
  Palawan: [
    "Puerto Princesa City",
    "Coron",
    "El Nido",
    "Taytay",
    "Brooke's Point",
    "Busuanga",
  ],
  Pampanga: [
    "San Fernando",
    "Angeles City",
    "Mabalacat",
    "Guagua",
    "Lubao",
    "Mexico",
    "Porac",
    "Arayat",
  ],
  Pangasinan: [
    "Dagupan City",
    "Urdaneta City",
    "San Carlos City",
    "Alaminos City",
    "Lingayen",
    "Malasiqui",
  ],
  Quezon: [
    "Lucena City",
    "Tayabas",
    "Candelaria",
    "Sariaya",
    "Tiaong",
    "Gumaca",
    "Infanta",
  ],
  Rizal: [
    "Antipolo",
    "Cainta",
    "Taytay",
    "Binangonan",
    "San Mateo",
    "Rodriguez",
    "Angono",
    "Morong",
  ],
  Sorsogon: ["Sorsogon City", "Juban", "Bulan", "Donsol", "Gubat"],
  Tarlac: ["Tarlac City", "Concepcion", "Capas", "Moncada", "Gerona", "Bamban"],
  Zambales: [
    "Olongapo City",
    "Subic",
    "Iba",
    "Botolan",
    "Masinloc",
    "San Marcelino",
  ],
};

// --- HELPER FUNCTIONS ---
function parsePrice(priceString) {
  if (!priceString) return 0;
  return parseFloat(("" + priceString).replace("$", "")) || 0;
}

function formatPrice(amount) {
  return "$" + (parseFloat(amount) || 0).toFixed(2);
}

function populateProvinces() {
  provinceSelect.innerHTML = '<option value="">Select Province</option>';
  var keys = Object.keys(philippinesData);
  for (var i = 0; i < keys.length; i++) {
    var province = keys[i];
    var option = document.createElement("option");
    var isSelected = userData.province === province;
    option.value = province;
    option.textContent = province;
    if (isSelected) option.selected = true;
    provinceSelect.appendChild(option);
  }
}

provinceSelect.addEventListener("change", function () {
  var selectedProvince = this.value;
  citySelect.innerHTML = '<option value="">Select City</option>';

  if (selectedProvince && philippinesData[selectedProvince]) {
    citySelect.disabled = false;
    var cities = philippinesData[selectedProvince];
    for (var i = 0; i < cities.length; i++) {
      var city = cities[i];
      var option = document.createElement("option");
      var isSelected = userData.city === city;
      option.value = city;
      option.textContent = city;
      if (isSelected) option.selected = true;
      citySelect.appendChild(option);
    }
  } else {
    citySelect.disabled = true;
  }
});

// --- MODAL LOGIC (unchanged) ---
function showModal(type, message, onConfirm, onCancel) {
  var header = document.getElementById("modalHeader");
  var headerText = "Confirm";

  if (type === "error") {
    headerText = "Invalid Voucher";
  } else if (type === "used") {
    headerText = "Voucher Already Used";
  } else if (type === "voucher") {
    headerText = "Confirm Voucher";
  } else if (type === "delete") {
    headerText = "Confirm Deletion";
  }

  if (header) {
    header.textContent = headerText;
  }

  modalMessage.textContent = message;
  confirmDeleteButton.style.display = "inline-block";
  cancelDeleteButton.style.display = "inline-block";

  if (type === "voucher") {
    confirmDeleteButton.textContent = "Apply";
    cancelDeleteButton.textContent = "Cancel";
    confirmDeleteButton.style.backgroundColor = "#4CAF50";
  } else if (type === "error" || type === "used") {
    confirmDeleteButton.textContent = "OK";
    cancelDeleteButton.style.display = "none";
    confirmDeleteButton.style.backgroundColor = "#2196F3";
  } else if (type === "delete") {
    confirmDeleteButton.textContent = "Delete";
    cancelDeleteButton.textContent = "Cancel";
    confirmDeleteButton.style.backgroundColor = "";
  }

  confirmDeleteButton.onclick = function () {
    if (typeof onConfirm === "function") onConfirm();
    hideDeleteModal();
  };

  cancelDeleteButton.onclick = function () {
    if (typeof onCancel === "function") onCancel();
    hideDeleteModal();
  };

  deleteModal.classList.add("show");

  setTimeout(function () {
    if (header) header.textContent = headerText;
  }, 15);
}

function hideDeleteModal() {
  if (deleteModal) deleteModal.classList.remove("show");
  cancelDeleteButton.style.display = "inline-block";
}

function showDeleteModal(count) {
  var message = "Are you sure you want to delete " + count + " item(s)?";
  showModal("delete", message, deleteSelectedItems);
}

// --- EDIT MODE LOGIC (unchanged) ---
function updateEditHeaderState() {
  if (!isEditMode) {
    editHeader.textContent = "EDIT";
    cartContainer.classList.remove("edit-mode");
    return;
  }

  var checked = document.querySelectorAll(
    '.item-selector input[type="checkbox"]:checked'
  );
  var selectedCount = checked.length;

  if (selectedCount > 0) {
    editHeader.textContent = "DELETE";
  } else {
    editHeader.textContent = "BACK";
  }
}

function handleEditHeaderClick() {
  var action = editHeader.textContent;
  var selectedCheckboxes = document.querySelectorAll(
    '.item-selector input[type="checkbox"]'
  );

  if (action === "EDIT") {
    isEditMode = true;
    for (var i = 0; i < selectedCheckboxes.length; i++)
      selectedCheckboxes[i].checked = false;
    cartContainer.classList.add("edit-mode");
    updateEditHeaderState();
  } else if (action === "BACK") {
    isEditMode = false;
    for (var i = 0; i < selectedCheckboxes.length; i++)
      selectedCheckboxes[i].checked = false;
    cartContainer.classList.remove("edit-mode");
    updateEditHeaderState();
  } else if (action === "DELETE") {
    var checkedCheckboxes = document.querySelectorAll(
      '.item-selector input[type="checkbox"]:checked'
    );
    itemsToDelete = [];
    for (var j = 0; j < checkedCheckboxes.length; j++) {
      itemsToDelete.push(checkedCheckboxes[j].dataset.productId);
    }

    if (itemsToDelete.length > 0) {
      showDeleteModal(itemsToDelete.length);
    }
  }
}

function deleteSelectedItems() {
  if (itemsToDelete.length === 0) return;

  var currentCart = getCart();
  var newCart = [];
  for (var i = 0; i < currentCart.length; i++) {
    var it = currentCart[i];
    var keep = true;
    for (var j = 0; j < itemsToDelete.length; j++) {
      if (it.id === itemsToDelete[j]) {
        keep = false;
        break;
      }
    }
    if (keep) newCart.push(it);
  }
  saveCart(newCart);

  itemsToDelete = [];
  isEditMode = false;
  renderCart();
  updateCheckoutSummary();
  cartContainer.classList.remove("edit-mode");
  updateEditHeaderState();
}

function getCart() {
  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (e) {
    console.error("Error reading cart from localStorage", e);
    return [];
  }
}

function saveCart(newCart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));
  } catch (e) {
    console.error("Error writing cart to localStorage", e);
  }
}

function addToCart(productId) {
  const product = productMap[productId];
  if (!product) {
    console.error("Product with ID " + productId + " not found.");
    return;
  }

  let currentCart = getCart();
  const existingItem = currentCart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    currentCart.push({
      id: product.id,
      quantity: 1,
    });
  }

  saveCart(currentCart);
  renderCart();
  updateCheckoutSummary();
}

function renderCart() {
  var currentCart = getCart();
  cartItemsContainer.innerHTML = "";
  updateEditHeaderState();

  if (currentCart.length === 0) {
    cartItemsContainer.innerHTML =
      '<p style="color: #999; padding: 20px; text-align: center;">Your cart is empty.</p>';
    return;
  }

  for (var i = 0; i < currentCart.length; i++) {
    var item = currentCart[i];

    const productData = productMap[item.id];
    if (!productData) continue;

    var priceValue = productData.price;
    var subtotalValue = priceValue * item.quantity;
    var subtotalFormatted = formatPrice(subtotalValue);

    // Get product image path
    var imagePath =
      productData.images && productData.images.length > 0
        ? "../ProductsPage/" + productData.images[0]
        : "";

    var itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");
    itemElement.dataset.productId = item.id;

    itemElement.innerHTML =
      "" +
      '<div class="item-selector">' +
      ' <input type="checkbox" name="selected-item" id="select-' +
      item.id +
      '" data-product-id="' +
      item.id +
      '" class="select-checkbox">' +
      "</div>" +
      '<div class="cart-item-details">' +
      ' <div class="item-image">' +
      (imagePath
        ? '<img src="' +
          imagePath +
          '" alt="' +
          productData.name +
          '" onerror="this.style.display=\'none\'">'
        : "") +
      "</div>" +
      ' <span class="item-name">' +
      productData.name +
      "</span>" +
      "</div>" +
      '<div class="item-price">' +
      formatPrice(productData.price) +
      "</div>" +
      '<div class="item-quantity">' +
      ' <input type="number" value="' +
      item.quantity +
      '" min="1" data-product-id="' +
      item.id +
      '" class="qty-input">' +
      "</div>" +
      '<div class="item-subtotal" id="subtotal-' +
      item.id +
      '">' +
      subtotalFormatted +
      "</div>";

    cartItemsContainer.appendChild(itemElement);
  }

  addQuantityListeners();
  addSelectionListeners();
}

function updateCartItem(productId, newQuantity) {
  var currentCart = getCart();
  var itemIndex = -1;
  for (var i = 0; i < currentCart.length; i++) {
    if (currentCart[i].id === productId) {
      itemIndex = i;
      break;
    }
  }

  if (itemIndex > -1) {
    var item = currentCart[itemIndex];
    item.quantity = parseInt(newQuantity, 10);

    const productData = productMap[productId];
    if (!productData) return;

    var priceValue = productData.price;
    var newSubtotal = priceValue * item.quantity;
    var subtotalEl = document.getElementById("subtotal-" + productId);
    if (subtotalEl) subtotalEl.textContent = formatPrice(newSubtotal);

    saveCart(currentCart);
    updateCheckoutSummary();
  }
}

function addQuantityListeners() {
  var inputs = document.querySelectorAll(".qty-input");
  for (var i = 0; i < inputs.length; i++) {
    (function (input) {
      input.addEventListener("change", function () {
        var newQty = parseInt(this.value, 10);
        var productId = this.dataset.productId;

        if (isNaN(newQty) || newQty < 1) {
          newQty = 1;
          this.value = 1;
        }
        updateCartItem(productId, newQty);
      });
    })(inputs[i]);
  }
}

function addSelectionListeners() {
  var checkboxes = document.querySelectorAll(".select-checkbox");
  for (var i = 0; i < checkboxes.length; i++) {
    (function (cb) {
      cb.addEventListener("change", function () {
        updateEditHeaderState();
        updateCheckoutSummary();
      });
    })(checkboxes[i]);
  }
}

function renderSummaryData() {
  summaryName.textContent = userData.firstname + " " + userData.lastname;
  summaryPhone.textContent = "(+63)" + userData.phone;
  summaryAddress.textContent = userData.fullAddress;
}

function updateVoucherInputState() {
  if (!voucherInputEl || !applyVoucherBtn) return;
  if (isVoucherApplied) {
    voucherInputEl.disabled = true;
    applyVoucherBtn.disabled = true;
    voucherInputEl.placeholder = "Voucher applied";
  } else {
    voucherInputEl.disabled = false;
    applyVoucherBtn.disabled = false;
    voucherInputEl.placeholder = "Enter code";
  }
}

function updateCheckoutSummary() {
  var currentCart = getCart();
  var selectedCheckboxes = document.querySelectorAll(
    '.item-selector input[type="checkbox"]:checked'
  );

  var productSubtotal = 0;
  var selectedItems = [];

  for (var i = 0; i < selectedCheckboxes.length; i++) {
    var checkbox = selectedCheckboxes[i];
    var productId = checkbox.dataset.productId;

    var foundItem = null;
    for (var j = 0; j < currentCart.length; j++) {
      if (currentCart[j].id === productId) {
        foundItem = currentCart[j];
        break;
      }
    }

    if (foundItem) {
      const productData = productMap[foundItem.id];
      if (!productData) continue;

      var priceValue = productData.price;
      var itemSubtotal = priceValue * foundItem.quantity;
      productSubtotal += itemSubtotal;
      selectedItems.push({
        name: productData.name,
        subtotal: formatPrice(itemSubtotal),
      });
    }
  }

  productSubtotalEl.textContent = formatPrice(productSubtotal);

  productDetails.innerHTML = "";
  if (selectedItems.length > 0) {
    for (var k = 0; k < selectedItems.length; k++) {
      var detailItem = document.createElement("div");
      detailItem.classList.add("product-detail-item");
      detailItem.innerHTML =
        "<span>" +
        selectedItems[k].name +
        "</span><span>" +
        selectedItems[k].subtotal +
        "</span>";
      productDetails.appendChild(detailItem);
    }
  } else {
    productDetails.innerHTML =
      '<p style="color: #999; font-size: 12px;">No items selected</p>';
  }

  var currentShippingFee = selectedItems.length > 0 ? shippingFee : 0;

  var total = productSubtotal + currentShippingFee - voucherDiscount;
  if (total < 0) total = 0;

  totalAmountEl.textContent = formatPrice(total);
  voucherDiscountEl.textContent = "-" + formatPrice(voucherDiscount);

  if (shippingSubtotalEl)
    shippingSubtotalEl.textContent = formatPrice(currentShippingFee);

  var isAddressValid =
    userData.firstname !== "Firstname" || userData.phone !== "0000000000";
  var hasSelectedItems = selectedItems.length > 0;
  var isPaymentValid = validatePaymentMethod();

  placeOrderBtn.disabled = !(
    isAddressValid &&
    hasSelectedItems &&
    isPaymentValid
  );

  updateVoucherInputState();
}

function hideAllPaymentDetails() {
  gcashDetails.classList.remove("show");
  paymayaDetails.classList.remove("show");
  bankDetails.classList.remove("show");
}

function showPaymentDetails(method) {
  hideAllPaymentDetails();
  if (method === "gcash") gcashDetails.classList.add("show");
  else if (method === "paymaya") paymayaDetails.classList.add("show");
  else if (method === "bank") bankDetails.classList.add("show");
}

function validatePaymentMethod() {
  if (currentPaymentMethod === "cod") return true;

  if (currentPaymentMethod === "gcash") {
    var gcashNumber = document.getElementById("gcashNumber").value.trim();
    var gcashName = document.getElementById("gcashName").value.trim();
    return gcashNumber.length === 11 && gcashName.length > 0;
  }

  if (currentPaymentMethod === "paymaya") {
    var paymayaNumber = document.getElementById("paymayaNumber").value.trim();
    var paymayaName = document.getElementById("paymayaName").value.trim();
    return paymayaNumber.length === 11 && paymayaName.length > 0;
  }

  if (currentPaymentMethod === "bank") {
    var cardNumber = document
      .getElementById("cardNumber")
      .value.trim()
      .replace(/\s/g, "");
    var cardName = document.getElementById("cardName").value.trim();
    var expiryDate = document.getElementById("expiryDate").value.trim();
    var cvv = document.getElementById("cvv").value.trim();

    return (
      cardNumber.length >= 13 &&
      cardNumber.length <= 19 &&
      cardName.length > 0 &&
      expiryDate.length === 5 &&
      cvv.length === 3
    );
  }

  return false;
}

function formatCardNumber(input) {
  var value = input.value.replace(/\s/g, "");
  var groups = value.match(/.{1,4}/g);
  input.value = groups ? groups.join(" ") : value;
}

function restrictInputToNumberAndLength(input, maxLength) {
  let value = input.value.replace(/\D/g, "");
  if (value.length > maxLength) {
    value = value.substring(0, maxLength);
  }
  input.value = value;
}

function showCheckoutView() {
  checkoutView.style.display = "block";
  shippingView.classList.remove("show");
  confirmationView.classList.remove("show");
}

function showShippingView() {
  checkoutView.style.display = "none";
  shippingView.classList.add("show");
  confirmationView.classList.remove("show");

  document.getElementById("firstname").value =
    userData.firstname === "Firstname" ? "" : userData.firstname;
  document.getElementById("lastname").value =
    userData.lastname === "Lastname" ? "" : userData.lastname;
  document.getElementById("email").value = userData.email;
  document.getElementById("phone").value =
    userData.phone === "0000000000" ? "" : userData.phone;
  document.getElementById("zipcode").value = userData.zipcode;
  document.getElementById("street").value = userData.street;

  populateProvinces();
  document.getElementById("province").value = userData.province;

  if (userData.province) {
    provinceSelect.dispatchEvent(new Event("change"));
    setTimeout(function () {
      document.getElementById("city").value = userData.city;
    }, 10);
  }
}

function showConfirmationView() {
  checkoutView.style.display = "none";
  shippingView.classList.remove("show");
  confirmationView.classList.add("show");

  var selectedCheckboxes = document.querySelectorAll(
    '.item-selector input[type="checkbox"]:checked'
  );
  var purchasedItemIds = [];
  selectedCheckboxes.forEach(function (checkbox) {
    purchasedItemIds.push(checkbox.dataset.productId);
  });

  var currentCart = getCart();
  var newCart = currentCart.filter(function (item) {
    return !purchasedItemIds.includes(item.id);
  });

  saveCart(newCart);

  if (activeVoucher) {
    moveVoucherToUsed(activeVoucher);
  }

  voucherDiscount = 0;
  activeVoucher = null;
  isVoucherApplied = false;

  var countdown = 5;
  countdownBtn.textContent = "Back in " + countdown + "s...";

  var countdownInterval = setInterval(function () {
    countdown--;
    countdownBtn.textContent = "Back in " + countdown + "s...";
    if (countdown <= 0) {
      clearInterval(countdownInterval);
      countdownBtn.textContent = "Back to Checkout";
      countdownBtn.onclick = function () {
        renderCart();
        updateCheckoutSummary();
        showCheckoutView();
      };
    }
  }, 1000);
}

if (editHeader) editHeader.addEventListener("click", handleEditHeaderClick);
if (editAddressLink)
  editAddressLink.addEventListener("click", showShippingView);
if (backToCheckout) backToCheckout.addEventListener("click", showCheckoutView);

if (productDropdown) {
  productDropdown.addEventListener("click", function () {
    if (productDetails) {
      productDetails.classList.toggle("show");
    }
  });
}

if (shippingForm) {
  shippingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Save data to userData object
    userData.firstname =
      document.getElementById("firstname").value.trim() || "Firstname";
    userData.lastname =
      document.getElementById("lastname").value.trim() || "Lastname";
    userData.email = document.getElementById("email").value.trim();
    userData.phone =
      document.getElementById("phone").value.trim() || "0000000000";
    userData.province = provinceSelect.value;
    userData.city = citySelect.value;
    userData.zipcode = document.getElementById("zipcode").value.trim();
    userData.street = document.getElementById("street").value.trim();

    userData.fullAddress = `${userData.street}, ${userData.city}, ${userData.province} ${userData.zipcode}`;

    renderSummaryData();
    updateCheckoutSummary();
    showCheckoutView();
  });
}

// Initialize payment method handlers
paymentRadios.forEach((radio) => {
  radio.addEventListener("change", function () {
    currentPaymentMethod = this.value;
    showPaymentDetails(currentPaymentMethod);
    updateCheckoutSummary();
  });
});

if (viewAllPayments) {
  viewAllPayments.addEventListener("click", function (e) {
    e.preventDefault();

    expandedPayments.classList.toggle("show");
  });
}

function safeGet(id) {
  return document.getElementById(id);
}

const gcashNumberInput = safeGet("gcashNumber");
const paymayaNumberInput = safeGet("paymayaNumber");
const cardNumberInput = safeGet("cardNumber");

if (gcashNumberInput) {
  gcashNumberInput.addEventListener("input", function () {
    restrictInputToNumberAndLength(this, 11);
    updateCheckoutSummary();
  });
  safeGet("gcashName").addEventListener("input", updateCheckoutSummary);
}

if (paymayaNumberInput) {
  paymayaNumberInput.addEventListener("input", function () {
    restrictInputToNumberAndLength(this, 11);
    updateCheckoutSummary();
  });
  safeGet("paymayaName").addEventListener("input", updateCheckoutSummary);
}

if (cardNumberInput) {
  cardNumberInput.addEventListener("input", function () {
    let value = this.value.replace(/\D/g, "");
    if (value.length > 19) {
      value = value.substring(0, 19);
    }
    this.value = value;
    formatCardNumber(this);

    updateCheckoutSummary();
  });
}

if (safeGet("cardName")) {
  safeGet("cardName").addEventListener("input", updateCheckoutSummary);
}
if (safeGet("expiryDate")) {
  safeGet("expiryDate").addEventListener("input", function () {
    updateCheckoutSummary();
  });
}
if (safeGet("cvv")) {
  safeGet("cvv").addEventListener("input", function () {
    restrictInputToNumberAndLength(this, 4);
    updateCheckoutSummary();
  });
}

// Place order button
if (placeOrderBtn) {
  placeOrderBtn.addEventListener("click", function () {
    if (!placeOrderBtn.disabled) showConfirmationView();
  });
}

document.getElementById("applyVoucher").addEventListener("click", function () {
  var voucherInputEl = document.getElementById("voucherInput");
  var code = voucherInputEl.value.trim().toUpperCase();

  if (code === "") {
    showModal("error", "Please enter a voucher code.");
    return;
  }

  if (isVoucherUsed(code)) {
    showModal("error", "This voucher has already been used.");
    return;
  }

  var voucher = findAvailableVoucher(code);
  if (voucher === null) {
    showModal("error", "Invalid voucher code.");
    return;
  }

  // Confirm before applying
  showModal("voucher", "Apply voucher " + code + "?", function () {
    voucherDiscount = voucher.value;
    isVoucherApplied = true;
    activeVoucher = voucher;
    updateCheckoutSummary();
  });
});

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", function () {
  // Pre-populate cities if province is already set (for address form)
  if (userData.province) {
    populateProvinces();
    provinceSelect.dispatchEvent(new Event("change"));
    citySelect.value = userData.city;
  }

  // Always render cart from persistent storage
  renderCart();
  updateCheckoutSummary();
});
