'use strict';

// =====================================================
// Mobile Menu Toggle
// =====================================================
function initMobileMenu() {
  var toggle = document.getElementById('nav-toggle') || document.querySelector('.mobile-menu-toggle');
  var navList = document.getElementById('nav-list');
  if (!toggle || !navList) return;

  toggle.addEventListener('click', function () {
    var isOpen = navList.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// =====================================================
// FAQ Accordion
// =====================================================
function initFaqAccordion() {
  var questions = document.querySelectorAll('.faq-question');
  if (!questions.length) return;

  questions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var answer = btn.nextElementSibling;
      var isExpanded = btn.getAttribute('aria-expanded') === 'true';
      var parentSection = btn.closest('.faq-section');

      // Close all siblings in same section
      if (parentSection) {
        parentSection.querySelectorAll('.faq-question').forEach(function (sibling) {
          if (sibling !== btn) {
            sibling.setAttribute('aria-expanded', 'false');
            var siblingAnswer = sibling.nextElementSibling;
            if (siblingAnswer) siblingAnswer.classList.remove('open');
          }
        });
      }

      // Toggle current
      btn.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
      if (answer) answer.classList.toggle('open', !isExpanded);
    });
  });
}

// =====================================================
// FAQ Search Filter
// =====================================================
function initFaqSearch() {
  var searchInput = document.getElementById('faq-search') || document.querySelector('.faq-search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', function () {
    var query = searchInput.value.trim().toLowerCase();
    var sections = document.querySelectorAll('.faq-section');

    sections.forEach(function (section) {
      var items = section.querySelectorAll('.faq-item');
      var anyVisible = false;

      items.forEach(function (item) {
        var questionEl = item.querySelector('.faq-question');
        var answerEl = item.querySelector('.faq-answer');
        var questionText = questionEl ? questionEl.textContent.toLowerCase() : '';
        var answerText = answerEl ? answerEl.textContent.toLowerCase() : '';
        var matches = !query || questionText.includes(query) || answerText.includes(query);

        item.style.display = matches ? '' : 'none';
        if (matches) anyVisible = true;
      });

      var title = section.querySelector('.faq-section-title, .faq-category-title');
      if (title) title.style.display = anyVisible ? '' : 'none';
    });
  });
}

// =====================================================
// Chat Send Message
// =====================================================
function initChat() {
  var sendBtn = document.getElementById('chat-send-btn') || document.querySelector('.chat-send');
  var chatInput = document.getElementById('chat-input') || document.querySelector('.chat-input');
  var chatMessages = document.getElementById('chat-messages') || document.querySelector('.chat-messages');
  if (!sendBtn || !chatInput || !chatMessages) return;

  var agentResponses = [
    "Thanks for reaching out! I'd be happy to help you with that.",
    "Great question! Let me look into that for you right away.",
    "I understand your concern. Our team is here to make things right.",
    "Absolutely! We have a wide selection of products for your pet.",
    "I can assist you with your order. Could you provide your order number?",
    "Our return policy allows returns within 30 days of purchase.",
    "We offer free shipping on orders over $75. Is there anything else I can help with?"
  ];

  function getTime() {
    var now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function sendMessage() {
    var text = chatInput.value.trim();
    if (!text) return;

    // Customer message
    var msgDiv = document.createElement('div');
    msgDiv.className = 'chat-message customer chat-msg customer';
    msgDiv.innerHTML =
      '<p>' + escapeHtml(text) + '</p>' +
      '<div class="chat-msg-time">' + getTime() + '</div>';
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    chatInput.value = '';

    // Simulated agent response
    setTimeout(function () {
      var response = agentResponses[Math.floor(Math.random() * agentResponses.length)];
      var agentDiv = document.createElement('div');
      agentDiv.className = 'chat-message agent chat-msg agent';
      agentDiv.innerHTML =
        '<p>' + response + '</p>' +
        '<div class="chat-msg-time">' + getTime() + '</div>';
      chatMessages.appendChild(agentDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  sendBtn.addEventListener('click', sendMessage);

  chatInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  });
}

// =====================================================
// Cart localStorage Utilities
// =====================================================
var CART_KEY = 'pspCart';
var CART_MAX_QTY = 99;
var CART_FREE_SHIPPING_THRESHOLD = 75;
var CART_SHIPPING_COST = 8.99;
var CART_TAX_RATE = 0.085;

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    console.error('Error reading cart from localStorage:', e);
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getCartTotalQty(cart) {
  var total = 0;
  cart.forEach(function (item) { total += item.quantity; });
  return total;
}

// =====================================================
// Cart Badge Update
// =====================================================
function initCartBadge() {
  function updateBadge() {
    var cart = getCart();
    var total = getCartTotalQty(cart);
    var badges = document.querySelectorAll('.cart-count');
    badges.forEach(function (badge) {
      badge.textContent = total;
      badge.setAttribute('aria-label', total + ' items in cart');
    });
  }

  updateBadge();
  window.updateCartBadge = updateBadge;
}

// =====================================================
// Add to Cart
// =====================================================
function initAddToCart() {
  function showToast(msg) {
    var existing = document.querySelector('.cart-toast');
    if (existing) existing.remove();
    var toast = document.createElement('div');
    toast.className = 'cart-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.textContent = msg || 'Added to cart!';
    document.body.appendChild(toast);
    setTimeout(function () { toast.classList.add('cart-toast-show'); }, 10);
    setTimeout(function () {
      toast.classList.remove('cart-toast-show');
      setTimeout(function () { toast.remove(); }, 300);
    }, 2500);
  }

  function addToCart(name, price, category, qty) {
    var cart = getCart();
    var idBase = (category + '-' + name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    var existing = null;
    var i;
    for (i = 0; i < cart.length; i++) {
      if (cart[i].id === idBase) { existing = cart[i]; break; }
    }
    if (existing) {
      existing.quantity += qty;
    } else {
      cart.push({ id: idBase, name: name, price: price, category: category, quantity: qty });
    }
    saveCart(cart);
    if (window.updateCartBadge) window.updateCartBadge();
    showToast('Added to cart!');
  }

  // Buttons inside product cards (products.html, index.html, product-detail related products)
  var productCards = document.querySelectorAll('.product-card');
  productCards.forEach(function (card) {
    var btn = card.querySelector('.btn-primary');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var nameEl = card.querySelector('.product-name');
      var priceEl = card.querySelector('.product-price');
      var catEl = card.querySelector('.product-category');
      var name = nameEl ? nameEl.textContent.trim() : '';
      var price = parseFloat((priceEl ? priceEl.textContent : '0').replace(/[^0-9.]/g, '')) || 0;
      var category = catEl ? catEl.textContent.trim() : '';
      if (!name) return;
      addToCart(name, price, category, 1);
    });
  });

  // Main Add to Cart button on product-detail.html
  var detailSection = document.querySelector('.product-detail-section');
  if (detailSection) {
    var addBtn = detailSection.querySelector('.product-actions .btn-primary');
    if (addBtn) {
      addBtn.addEventListener('click', function () {
        var nameEl = detailSection.querySelector('h1');
        var priceEl = detailSection.querySelector('.product-detail-price');
        var catEl = detailSection.querySelector('.product-category');
        var qtyInput = document.getElementById('qty');
        var name = nameEl ? nameEl.textContent.trim() : '';
        var price = parseFloat((priceEl ? priceEl.textContent : '0').replace(/[^0-9.]/g, '')) || 0;
        var category = catEl ? catEl.textContent.trim() : '';
        var qty = qtyInput ? Math.max(1, parseInt(qtyInput.value, 10) || 1) : 1;
        if (!name) return;
        addToCart(name, price, category, qty);
      });
    }
  }
}

// =====================================================
// Cart Page (replaces initCartQuantity for cart.html)
// =====================================================
function initCartPage() {
  var cartTable = document.querySelector('.cart-table');
  if (!cartTable) return;

  var emptyMsg = document.getElementById('cart-empty-msg');
  var tableWrapper = document.getElementById('cart-table-wrapper');

  function formatPrice(num) {
    return '$' + num.toFixed(2);
  }

  function recalcSummary() {
    var rows = cartTable.querySelectorAll('tbody tr');
    var subtotal = 0;
    rows.forEach(function (row) {
      var qtyInput = row.querySelector('.qty-input');
      var priceEl = row.querySelector('.item-price');
      var lineTotalEl = row.querySelector('.line-total');
      if (!qtyInput || !priceEl || !lineTotalEl) return;
      var qty = Math.max(0, parseInt(qtyInput.value, 10) || 0);
      var unitPrice = parseFloat(priceEl.getAttribute('data-price')) || 0;
      var lineTotal = qty * unitPrice;
      lineTotalEl.textContent = formatPrice(lineTotal);
      subtotal += lineTotal;
    });
    var shipping = subtotal > 0 && subtotal < CART_FREE_SHIPPING_THRESHOLD ? CART_SHIPPING_COST : 0;
    var tax = subtotal * CART_TAX_RATE;
    var total = subtotal + shipping + tax;
    var subtotalEl = document.getElementById('cart-subtotal');
    var shippingEl = document.getElementById('cart-shipping');
    var taxEl = document.getElementById('cart-tax');
    var totalEl = document.getElementById('cart-total');
    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Free' : formatPrice(shipping);
    if (taxEl) taxEl.textContent = formatPrice(tax);
    if (totalEl) totalEl.textContent = formatPrice(total);
  }

  function persistCartFromTable() {
    var cart = [];
    var rows = cartTable.querySelectorAll('tbody tr');
    rows.forEach(function (row) {
      var id = row.getAttribute('data-id');
      var nameEl = row.querySelector('.product-name');
      var priceEl = row.querySelector('.item-price');
      var catEl = row.querySelector('.cart-item-category');
      var qtyInput = row.querySelector('.qty-input');
      if (!id || !qtyInput) return;
      var qty = Math.max(0, parseInt(qtyInput.value, 10) || 0);
      if (qty <= 0) return;
      cart.push({
        id: id,
        name: nameEl ? nameEl.textContent.trim() : '',
        price: parseFloat(priceEl ? priceEl.getAttribute('data-price') : 0) || 0,
        category: catEl ? catEl.textContent.trim() : '',
        quantity: qty
      });
    });
    saveCart(cart);
    if (window.updateCartBadge) window.updateCartBadge();
  }

  function escapeHtmlCart(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function buildCartRow(item) {
    var tr = document.createElement('tr');
    tr.className = 'cart-row';
    tr.setAttribute('data-id', item.id);
    tr.innerHTML =
      '<td headers="col-product">' +
        '<div class="cart-item-cell">' +
          '<div>' +
            '<span class="product-name">' + escapeHtmlCart(item.name) + '</span>' +
            '<p class="cart-item-sku cart-item-category">' + escapeHtmlCart(item.category) + '</p>' +
          '</div>' +
        '</div>' +
      '</td>' +
      '<td headers="col-price">' +
        '<span class="item-price" data-price="' + item.price.toFixed(2) + '">' + formatPrice(item.price) + '</span>' +
      '</td>' +
      '<td headers="col-qty" class="text-center">' +
        '<div class="qty-control">' +
          '<button class="qty-decrease" type="button" aria-label="Decrease quantity of ' + escapeHtmlCart(item.name) + '">−</button>' +
          '<input class="qty-input" type="number" value="' + item.quantity + '" min="1" max="' + CART_MAX_QTY + '" aria-label="Quantity of ' + escapeHtmlCart(item.name) + '">' +
          '<button class="qty-increase" type="button" aria-label="Increase quantity of ' + escapeHtmlCart(item.name) + '">+</button>' +
        '</div>' +
      '</td>' +
      '<td headers="col-total" class="text-right">' +
        '<span class="line-total">' + formatPrice(item.price * item.quantity) + '</span>' +
      '</td>' +
      '<td headers="col-remove" class="text-center">' +
        '<button class="btn btn-danger btn-sm remove-item" type="button" aria-label="Remove ' + escapeHtmlCart(item.name) + ' from cart">Remove</button>' +
      '</td>';
    return tr;
  }

  function showEmptyState() {
    if (emptyMsg) emptyMsg.classList.remove('hidden');
    if (tableWrapper) tableWrapper.style.display = 'none';
  }

  function hideEmptyState() {
    if (emptyMsg) emptyMsg.classList.add('hidden');
    if (tableWrapper) tableWrapper.style.display = '';
  }

  function renderCartPage() {
    var cart = getCart();
    var tbody = cartTable.querySelector('tbody');
    tbody.innerHTML = '';
    if (cart.length === 0) {
      showEmptyState();
      recalcSummary();
      return;
    }
    hideEmptyState();
    cart.forEach(function (item) { tbody.appendChild(buildCartRow(item)); });
    recalcSummary();
  }

  // Event delegation for qty controls and remove buttons
  cartTable.addEventListener('click', function (e) {
    var target = e.target;
    var row = target.closest('tr');
    if (!row) return;
    var qtyInput = row.querySelector('.qty-input');
    var currentVal, newVal;
    if (target.classList.contains('qty-decrease')) {
      currentVal = parseInt(qtyInput.value, 10) || 1;
      if (currentVal > 1) {
        qtyInput.value = currentVal - 1;
        recalcSummary();
        persistCartFromTable();
      }
    } else if (target.classList.contains('qty-increase')) {
      currentVal = parseInt(qtyInput.value, 10) || 1;
      qtyInput.value = Math.min(CART_MAX_QTY, currentVal + 1);
      recalcSummary();
      persistCartFromTable();
    } else if (target.classList.contains('remove-item')) {
      row.remove();
      recalcSummary();
      persistCartFromTable();
      var remaining = getCart();
      if (remaining.length === 0) { showEmptyState(); }
    }
  });

  cartTable.addEventListener('change', function (e) {
    var newVal;
    if (e.target.classList.contains('qty-input')) {
      newVal = Math.max(1, Math.min(CART_MAX_QTY, parseInt(e.target.value, 10) || 1));
      e.target.value = newVal;
      recalcSummary();
      persistCartFromTable();
    }
  });

  renderCartPage();
}

// =====================================================
// Payment Method Toggle
// =====================================================
function initPaymentToggle() {
  var paymentRadios = document.querySelectorAll('input[name="payment-method"]');
  if (!paymentRadios.length) return;

  var cardFields = document.getElementById('card-fields');
  var paypalFields = document.getElementById('paypal-fields');

  function updatePaymentFields() {
    var selected = document.querySelector('input[name="payment-method"]:checked');
    var value = selected ? selected.value : '';

    if (cardFields) cardFields.style.display = (value === 'credit-card' || value === 'debit-card') ? '' : 'none';
    if (paypalFields) paypalFields.style.display = (value === 'paypal') ? '' : 'none';
  }

  paymentRadios.forEach(function (radio) {
    radio.addEventListener('change', updatePaymentFields);
  });

  updatePaymentFields();
}

// =====================================================
// Same as Shipping Checkbox
// =====================================================
function initSameAsShipping() {
  var checkbox = document.getElementById('same-as-shipping');
  if (!checkbox) return;

  var fieldMap = {
    'billing-first-name': 'shipping-first-name',
    'billing-last-name': 'shipping-last-name',
    'billing-address': 'shipping-address',
    'billing-city': 'shipping-city',
    'billing-state': 'shipping-state',
    'billing-zip': 'shipping-zip',
    'billing-country': 'shipping-country'
  };

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      Object.keys(fieldMap).forEach(function (billingId) {
        var shippingEl = document.getElementById(fieldMap[billingId]);
        var billingEl = document.getElementById(billingId);
        if (billingEl && shippingEl) billingEl.value = shippingEl.value;
      });
    } else {
      Object.keys(fieldMap).forEach(function (billingId) {
        var billingEl = document.getElementById(billingId);
        if (billingEl) billingEl.value = '';
      });
    }
  });
}

// =====================================================
// Active Navigation
// =====================================================
function initActiveNav() {
  var navLinks = document.querySelectorAll('#nav-list a, .nav-list a, .nav-link');
  if (!navLinks.length) return;

  var currentPath = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(function (link) {
    var href = (link.getAttribute('href') || '').split('/').pop();
    if (href && href === currentPath) {
      link.setAttribute('aria-current', 'page');
    }
  });
}

// =====================================================
// Newsletter Form
// =====================================================
function initNewsletter() {
  var form = document.querySelector('.newsletter-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var successMsg = document.createElement('p');
    successMsg.textContent = 'Thank you for subscribing!';
    successMsg.style.cssText = 'color:white;font-size:1.1rem;font-weight:bold;margin:0;';
    form.parentNode.replaceChild(successMsg, form);
  });
}

// =====================================================
// Initialize on DOM ready
// =====================================================
document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();
  initFaqAccordion();
  initFaqSearch();
  initChat();
  initCartBadge();
  initAddToCart();
  initCartPage();
  initPaymentToggle();
  initSameAsShipping();
  initActiveNav();
  initNewsletter();
});
