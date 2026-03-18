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
// Cart Quantity Update
// =====================================================
function initCartQuantity() {
  var cartTable = document.querySelector('.cart-table');
  if (!cartTable) return;

  function parsePrice(str) {
    return parseFloat((str || '').replace(/[^0-9.]/g, '')) || 0;
  }

  function formatPrice(num) {
    return '$' + num.toFixed(2);
  }

  function recalcCart() {
    var rows = cartTable.querySelectorAll('tbody tr');
    var subtotal = 0;

    rows.forEach(function (row) {
      var qtyInput = row.querySelector('.cart-qty');
      var unitPriceEl = row.querySelector('.cart-unit-price');
      var lineTotalEl = row.querySelector('.cart-line-total');
      if (!qtyInput || !unitPriceEl || !lineTotalEl) return;

      var qty = Math.max(0, parseInt(qtyInput.value, 10) || 0);
      var unitPrice = parsePrice(unitPriceEl.textContent);
      var lineTotal = qty * unitPrice;
      lineTotalEl.textContent = formatPrice(lineTotal);
      subtotal += lineTotal;
    });

    var shipping = subtotal > 0 && subtotal < 75 ? 8.99 : 0;
    var tax = subtotal * 0.085;
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

  cartTable.addEventListener('change', function (e) {
    if (e.target.classList.contains('cart-qty')) {
      recalcCart();
    }
  });
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
  initCartQuantity();
  initPaymentToggle();
  initSameAsShipping();
  initActiveNav();
  initNewsletter();
});
