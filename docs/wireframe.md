# Pet Supply Plus — Wireframe Mockups

**Project:** PSP-WEB-2026-01  
**Date:** January 30, 2026  
**Author:** Web Development Team  

---

## Wireframe Conventions

```
[         ] = Container/Div element
|  Text   | = Content area
[ BTN ]    = Button
[input___] = Input field
≡          = Hamburger menu icon
```

---

## 1. Common Elements (All Pages)

### Desktop Header (≥993px)
```
┌────────────────────────────────────────────────────────────────┐
│ TOP BAR (Navy #1B3A5C)                                         │
│  📞 1-800-PET-PLUS (738-7587) | Mon–Fri 8am–8pm EST           │
│                         Track Order  Help  🛒 Cart (3)  Account│
├────────────────────────────────────────────────────────────────┤
│ SITE HEADER (White, sticky, border-bottom: teal)               │
│  Pet Supply Plus   (logo left)         [hamburger hidden]      │
│  Everything Your Pet Needs (tagline)                           │
├────────────────────────────────────────────────────────────────┤
│ MAIN NAVIGATION (Navy #1B3A5C)                                 │
│  [ HOME ] [ SHOP ] [ ABOUT ] [ CUSTOMER SERVICE ] [ CONTACT ] │
└────────────────────────────────────────────────────────────────┘
```

### Mobile Header (≤576px)
```
┌────────────────────────────────┐
│ (top bar hidden on mobile)     │
├────────────────────────────────┤
│ SITE HEADER                    │
│  Pet Supply Plus    ≡ (toggle) │
├────────────────────────────────┤
│ NAVIGATION (collapsed)         │
│  [tap ≡ to expand]             │
│  ─────────────────────         │
│  HOME                          │
│  SHOP                          │
│  ABOUT                         │
│  CUSTOMER SERVICE              │
│  CONTACT                       │
└────────────────────────────────┘
```

### Breadcrumbs (All Inner Pages)
```
┌────────────────────────────────────────────────────┐
│  Home › Shop › Dog Supplies › Product Name          │
└────────────────────────────────────────────────────┘
```

### Footer (Desktop)
```
┌────────────────────────────────────────────────────────────────┐
│ FOOTER (Navy #1B3A5C)                                          │
│ ┌──────────────┐ ┌──────────┐ ┌──────────────┐ ┌───────────┐ │
│ │Pet Supply+   │ │Quick     │ │Customer      │ │Stay       │ │
│ │tagline       │ │Links     │ │Service       │ │Connected  │ │
│ │              │ │- Home    │ │- Live Chat   │ │[email  ] │ │
│ │description   │ │- Shop    │ │- Track Order │ │[Go]      │ │
│ │              │ │- About   │ │- Cart        │ │           │ │
│ │ f t in p ▶  │ │- Contact │ │- FAQ         │ │- Privacy  │ │
│ │              │ │- FAQ     │ │- Returns     │ │- Terms    │ │
│ │              │ │- Sitemap │ │- Shipping    │ │           │ │
│ └──────────────┘ └──────────┘ └──────────────┘ └───────────┘ │
├────────────────────────────────────────────────────────────────┤
│ FOOTER BOTTOM (darker navy overlay)                            │
│ © 2026 Pet Supply Plus. All Rights Reserved. | Jan 30, 2026   │
│ aroberts@petsupplyplus.com | 📞 1-800-PET-PLUS                │
└────────────────────────────────────────────────────────────────┘
```

---

## 2. index.html — Home Page

### Desktop Layout
```
┌────────────────────────────────────────────────────────────────┐
│ TOP BAR + HEADER + NAVIGATION                                  │
├────────────────────────────────────────────────────────────────┤
│ PROMOTIONAL BANNER (Orange)                                    │
│  🐾 Spring Sale! Save 20%... [Shop Now]                       │
├────────────────────────────────────────────────────────────────┤
│ HERO SECTION (Navy to Teal gradient)                           │
│                                                                │
│           🌸 Spring Collection 2026                            │
│      Your Pet Deserves the Best                                │
│   Premium food, toys, accessories...                           │
│                                                                │
│   [ Shop All Products ]  [ Learn About Us ]                   │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│ CATEGORIES SECTION (White bg)                                  │
│  Shop by Pet                                                   │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐     │
│  │  🐶  │ │  🐱  │ │  🦜  │ │  🐠  │ │  🦎  │ │  🐹  │     │
│  │ Dogs │ │ Cats │ │Birds │ │ Fish │ │Rept. │ │Small │     │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘     │
├────────────────────────────────────────────────────────────────┤
│ FEATURED PRODUCTS (Light gray bg)                              │
│  Handpicked favorites                                          │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                         │
│  │[img] │ │[img] │ │[img] │ │[img] │                         │
│  │Name  │ │Name  │ │Name  │ │Name  │  (4-col grid, 2 rows)  │
│  │Desc  │ │Desc  │ │Desc  │ │Desc  │                         │
│  │★★★★½ │ │★★★★★ │ │★★★★☆ │ │★★★★½ │                         │
│  │$49.99│ │$24.99│ │$89.99│ │$129  │                         │
│  │[Cart]│ │[Cart]│ │[Cart]│ │[Cart]│                         │
│  └──────┘ └──────┘ └──────┘ └──────┘                         │
│                  [ View All Products ]                         │
├────────────────────────────────────────────────────────────────┤
│ WHY CHOOSE US (White bg, 3-column values grid)                 │
│  🚚 Free Ship   🏅 Quality   💬 Support                       │
│  🔄 Returns     💰 Price✓   🌱 Eco                            │
├────────────────────────────────────────────────────────────────┤
│ TESTIMONIALS (Light gray bg, 3-column)                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                       │
│  │"Review1" │ │"Review2" │ │"Review3" │                       │
│  │★★★★★     │ │★★★★★     │ │★★★★☆     │                       │
│  │Sarah M.  │ │James R.  │ │Lisa T.   │                       │
│  └──────────┘ └──────────┘ └──────────┘                       │
├────────────────────────────────────────────────────────────────┤
│ NEWSLETTER (Navy-to-Teal gradient)                             │
│    🐾 Join the Pet Supply Plus Family                          │
│    [Enter your email address    ] [ Subscribe Now ]            │
└────────────────────────────────────────────────────────────────┘
│ FOOTER                                                         │
└────────────────────────────────────────────────────────────────┘
```

### Mobile Layout
```
┌──────────────────────┐
│ HEADER (hamburger)   │
│ NAV (collapsed)      │
├──────────────────────┤
│ HERO                 │
│  (stacked, centered) │
├──────────────────────┤
│ CATEGORIES (2-col)   │
│  🐶  🐱              │
│  🦜  🐠              │
│  🦎  🐹              │
├──────────────────────┤
│ PRODUCTS (2-col)     │
│  [P1] [P2]           │
│  [P3] [P4]           │
│  [P5] [P6]           │
│  [P7] [P8]           │
├──────────────────────┤
│ VALUES (1-col)       │
├──────────────────────┤
│ TESTIMONIALS (1-col) │
├──────────────────────┤
│ NEWSLETTER (stacked) │
│  [email_________]    │
│  [ Subscribe Now ]   │
└──────────────────────┘
```

---

## 3. products.html — Shop Page

### Desktop Layout
```
┌────────────────────────────────────────────────────────────────┐
│ HEADER + NAV + BREADCRUMB                                      │
│ Home › Shop All Products                                       │
├────────────────────────────────────────────────────────────────┤
│ PAGE HERO: Shop All Products                                   │
├────────────────────────────────────────────────────────────────┤
│ ┌─────────────────┐ ┌────────────────────────────────────────┐ │
│ │  FILTER SIDEBAR  │ │  PRODUCT AREA                          │ │
│ │  (240px, sticky) │ │  [Sort: Featured ▼] Showing 24/10,482 │ │
│ │  Category ▼     │ │                                        │ │
│ │  ☑ Dog          │ │  🐶 Dog Supplies                       │ │
│ │  ☑ Cat          │ │  ┌────┐ ┌────┐ ┌────┐ ┌────┐          │ │
│ │  ☑ Bird         │ │  │[P] │ │[P] │ │[P] │ │[P] │          │ │
│ │  ☑ Fish         │ │  └────┘ └────┘ └────┘ └────┘          │ │
│ │  ☑ Reptile      │ │                                        │ │
│ │  ☑ Small        │ │  🐱 Cat Supplies                       │ │
│ │                 │ │  ┌────┐ ┌────┐ ┌────┐ ┌────┐          │ │
│ │  Price Range ▼  │ │  └────┘ └────┘ └────┘ └────┘          │ │
│ │  ○ All          │ │  [continues for all 6 categories]      │ │
│ │  ○ Under $25    │ │                                        │ │
│ │  ○ $25-$50      │ │                                        │ │
│ │  ○ $50-$100     │ │                                        │ │
│ │  ○ Over $100    │ │                                        │ │
│ │                 │ │                                        │ │
│ │  [Apply Filters]│ │                                        │ │
│ │  [Clear All   ] │ │                                        │ │
│ └─────────────────┘ └────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────┘
```

---

## 4. product-detail.html — Product Detail

### Desktop Layout
```
┌────────────────────────────────────────────────────────────────┐
│ HEADER + NAV                                                   │
│ Home › Shop › Dog Supplies › Premium Dog Food                  │
├────────────────────────────────────────────────────────────────┤
│ PAGE CONTENT                                                   │
│ ┌──────────────────────┐ ┌───────────────────────────────────┐ │
│ │  PRODUCT IMAGES       │ │  PRODUCT INFO                     │ │
│ │  ┌──────────────────┐ │ │                                   │ │
│ │  │  [Main Image     │ │ │  [Dog Food] badge                 │ │
│ │  │   380px tall     │ │ │  Premium Dog Food (Chicken & Rice)│ │
│ │  │   placeholder]   │ │ │  ★★★★½ (247 reviews)              │ │
│ │  └──────────────────┘ │ │  $49.99                           │ │
│ │  [🐶] [📋] [🔬] [🍽️]  │ │                                   │ │
│ │  (thumbnails)         │ │  ✅ In Stock info box              │ │
│ └──────────────────────┘ │ │  Description text...             │ │
│                           │ │                                   │ │
│                           │ │  Specs table:                    │ │
│                           │ │  Weight | 30 lbs                 │ │
│                           │ │  Brand  | PSP Premium            │ │
│                           │ │  Life   | Adult Dogs             │ │
│                           │ │                                   │ │
│                           │ │  Qty: [1  ▲▼]                    │ │
│                           │ │  [Add to Cart] [Buy Now]         │ │
│                           │ └───────────────────────────────────│ │
├────────────────────────────────────────────────────────────────┤
│ CUSTOMER REVIEWS (3 reviews)                                   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ Michael T. ★★★★★        Feb 14, 2026                     │  │
│  │ "My dog absolutely loves this food!"                     │  │
│  └──────────────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────────────┤
│ RELATED PRODUCTS (4-column grid)                               │
└────────────────────────────────────────────────────────────────┘
```

---

## 5. cart.html — Shopping Cart

### Desktop Layout
```
┌────────────────────────────────────────────────────────────────┐
│ HEADER + NAV                                                   │
│ Home › Shopping Cart                                           │
├────────────────────────────────────────────────────────────────┤
│ ┌──────────────────────────────────────┐ ┌──────────────────┐  │
│ │  CART TABLE                          │ │  ORDER SUMMARY   │  │
│ │  Product | Price | Qty | Total | Del │ │                  │  │
│ │  ──────────────────────────────────  │ │  Subtotal $149   │  │
│ │  [🐶] Dog Food | $49.99 | [-1+] | X  │ │  Shipping FREE   │  │
│ │  [🐈] Cat Tower| $69.99 | [-1+] | X  │ │  Tax(8%) $11.99  │  │
│ │  [🐹] Hamster  | $14.99 | [-2+] | X  │ │  ────────────    │  │
│ │  ──────────────────────────────────  │ │  Total   $161.95 │  │
│ │  [Continue Shopping] [Update Cart]   │ │                  │  │
│ │                                      │ │  [Proceed to     │  │
│ │                                      │ │   Checkout]      │  │
│ │                                      │ │                  │  │
│ │                                      │ │  [Promo Code   ] │  │
│ │                                      │ │  [Apply Code]    │  │
│ └──────────────────────────────────────┘ └──────────────────┘  │
└────────────────────────────────────────────────────────────────┘
```

---

## 6. checkout.html — Checkout Form

### Desktop Layout
```
┌────────────────────────────────────────────────────────────────┐
│ HEADER + NAV                                                   │
│ Home › Cart › Checkout                                         │
├────────────────────────────────────────────────────────────────┤
│ ┌───────────────────────────────────────────┐ ┌─────────────┐  │
│ │  SHIPPING INFORMATION FORM                │ │ ORDER SUMM. │  │
│ │  [First Name    ] [Last Name    ]         │ │             │  │
│ │  [Email Address              ]            │ │  Item 1 $   │  │
│ │  [Phone Number               ]            │ │  Item 2 $   │  │
│ │  [Street Address             ]            │ │  Item 3 $   │  │
│ │  [City    ] [State ▼] [ZIP  ]             │ │  ─────────  │  │
│ │                                           │ │  Sub $149   │  │
│ │  SHIPPING METHOD                          │ │  Ship FREE  │  │
│ │  ○ Standard (5-7 days) ─────── FREE       │ │  Tax  $12   │  │
│ │  ○ Express  (2-3 days) ─────── $9.99      │ │  ─────────  │  │
│ │  ○ Overnight (next day) ────── $24.99     │ │  Total $161 │  │
│ │                                           │ │             │  │
│ │  [Continue to Payment        ]            │ │  🔒 Secure  │  │
│ └───────────────────────────────────────────┘ └─────────────┘  │
└────────────────────────────────────────────────────────────────┘
```

---

## 7. payment.html — Online Payment

### Desktop Layout
```
┌────────────────────────────────────────────────────────────────┐
│ Home › Cart › Checkout › Payment                               │
├────────────────────────────────────────────────────────────────┤
│ ┌───────────────────────────────────────────┐ ┌─────────────┐  │
│ │  PAYMENT METHOD                           │ │  Order Summ │  │
│ │  [💳 Credit] [💳 Debit] [🅿 PayPal]        │ │  Items...   │  │
│ │                                           │ │  Total $161 │  │
│ │  CARD DETAILS                             │ │             │  │
│ │  [Card Number              ]              │ │  Shipping:  │  │
│ │  [Cardholder Name         ]              │ │  Jane Smith │  │
│ │  [Expiry MM/YY] [CVV   ]                  │ │  Columbus,  │  │
│ │                                           │ │  OH 43215   │  │
│ │  BILLING ADDRESS                          │ │             │  │
│ │  ☑ Same as shipping address               │ └─────────────┘  │
│ │                                           │                  │
│ │  [🔒 Complete Payment — $161.95]          │                  │
│ │                                           │                  │
│ │  🔒 SSL  🛡 PCI  ✅ Verified  💳 Cards   │                  │
│ └───────────────────────────────────────────┘                  │
└────────────────────────────────────────────────────────────────┘
```

---

## 8. order-status.html — Order Tracking

### Desktop Layout
```
┌────────────────────────────────────────────────────────────────┐
│ Home › Order Status                                            │
├────────────────────────────────────────────────────────────────┤
│ ORDER LOOKUP BOX (centered, max-width 520px)                   │
│  ┌─────────────────────────────────────────────┐               │
│  │  [Order Number: PSP-2026-00482            ] │               │
│  │  [Email: jsmith@example.com               ] │               │
│  │  [      Track Order      ]                  │               │
│  └─────────────────────────────────────────────┘               │
│                                                                │
│ ORDER RESULTS                                                  │
│  Order #PSP-2026-00482 | Feb 18, 2026 | [Shipped ✓]           │
│  Tracking: 1Z999AA...  | Est. Delivery: Feb 24                 │
│                                                                │
│  PROGRESS TRACKER                                              │
│  (1)Ordered──────(2)Processing──────(3)Shipped►──────(4)Del.  │
│     ✓               ✓                  ●                       │
│                                                                │
│  ITEMS TABLE                                                   │
│  Item | Qty | Price                                            │
│  Dog Food | 1 | $49.99                                         │
│  Cat Tower | 1 | $69.99                                        │
│  Hamster Wheel | 2 | $29.98                                    │
│  Order Total: $161.95                                          │
│                                                                │
│  [Shipping Address]  [Shipment Updates]                        │
│  [Continue Shopping] [Need Help?]                              │
└────────────────────────────────────────────────────────────────┘
```

---

## 9. customer-service.html — Live Chat

### Desktop Layout
```
┌────────────────────────────────────────────────────────────────┐
│ Home › Customer Service                                        │
├────────────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────┐ ┌───────────────────────┐   │
│ │  CHAT WINDOW                   │ │  CONTACT SIDEBAR      │   │
│ │  ┌──────────────────────────┐  │ │                       │   │
│ │  │ [SA] Sarah Anderson  ●   │  │ │  📞 Contact Options   │   │
│ │  └──────────────────────────┘  │ │  - 1-800-PET-PLUS     │   │
│ │  CHAT MESSAGES AREA            │ │  - Email support      │   │
│ │  [SA] "Hi! Welcome to..."      │ │  - Live Chat 24/7     │   │
│ │       [ME] "I placed an order" │ │                       │   │
│ │  [SA] "I'll look into that"    │ │  🕐 Hours             │   │
│ │       [ME] "jsmith@..."        │ │  Mon-Fri 8am-8pm      │   │
│ │  [SA] "Your order #PSP-..."    │ │  Sat 9am-6pm          │   │
│ │       [ME] "Can you resend?"   │ │  Sun 10am-4pm         │   │
│ │  [SA] "Absolutely! Done."      │ │                       │   │
│ │  ┌──────────────────────────┐  │ │  🔗 Quick Links       │   │
│ │  │ [Type your message...] ▶ │  │ │  - Track My Order     │   │
│ │  └──────────────────────────┘  │ │  - Returns & Exch.    │   │
│ └────────────────────────────────┘ │  - Shipping Info      │   │
│                                    │  - FAQ                │   │
│                                    └───────────────────────┘   │
└────────────────────────────────────────────────────────────────┘
```

---

## 10. contact.html — Contact Us

### Desktop Layout
```
┌────────────────────────────────────────────────────────────────┐
│ Home › Contact Us                                              │
├────────────────────────────────────────────────────────────────┤
│ ┌───────────────────────────────────────┐ ┌─────────────────┐  │
│ │  CONTACT FORM                         │ │  CONTACT INFO   │  │
│ │  [First Name  ] [Last Name   ]        │ │                 │  │
│ │  [Email Address              ]        │ │  📞 1-800-PET+  │  │
│ │  [Phone (optional)           ]        │ │  📧 info@psp    │  │
│ │  [Subject          ▼]                 │ │  🛟 support@psp │  │
│ │  [Message                    ]        │ │  📢 aroberts@   │  │
│ │  [                            ]       │ │                 │  │
│ │  ☐ Subscribe to newsletter           │ │  🕐 Hours        │  │
│ │  [       Send Message       ]         │ │  Mon-Fri 8-8    │  │
│ └───────────────────────────────────────┘ │  Sat 9-6        │  │
│                                           │  Sun 10-4       │  │
│                                           │                 │  │
│                                           │  🗺️ Map         │  │
│                                           │  [placeholder]  │  │
│                                           │                 │  │
│                                           │  📱 Social      │  │
│                                           │  f t in p ▶    │  │
│                                           └─────────────────┘  │
└────────────────────────────────────────────────────────────────┘
```

---

## 11. faq.html — FAQ Page

### Desktop Layout
```
┌────────────────────────────────────────────────────────────────┐
│ Home › FAQ                                                     │
├────────────────────────────────────────────────────────────────┤
│  [Search FAQ...              ] [ Search ]                      │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ 📦 Ordering                                              │  │
│  ├──────────────────────────────────────────────────────────┤  │
│  │ How do I place an order?                            [+]  │  │
│  │ ───────────────────────────────────────────────────      │  │
│  │ Can I modify/cancel my order?                       [+]  │  │
│  │ ───────────────────────────────────────────────────      │  │
│  │ Do I need an account?                               [+]  │  │
│  │ ───────────────────────────────────────────────────      │  │
│  │ How do I use a promo code?                          [+]  │  │
│  └──────────────────────────────────────────────────────────┘  │
│  [Similar sections for: Shipping, Returns, Products, Account]  │
└────────────────────────────────────────────────────────────────┘
```

*When expanded:*
```
│ How do I place an order?                            [×]  │
│ ─────────────────────────────────────────────────────   │
│   [Answer text appears here with smooth                  │
│    animation, including links where relevant]            │
```

---

## 12. about.html — About Us

### Desktop Layout
```
┌────────────────────────────────────────────────────────────────┐
│ Home › About Us                                                │
├────────────────────────────────────────────────────────────────┤
│ ┌──────────────────────────────────────────────────────────┐   │
│ │  OUR STORY (text columns)                                │   │
│ │  [Info box: Mission statement]                           │   │
│ │  History paragraph 1... paragraph 2... paragraph 3...    │   │
│ └──────────────────────────────────────────────────────────┘   │
├────────────────────────────────────────────────────────────────┤
│ TEAM SECTION (4-column grid, Light gray bg)                    │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │[RC]      │ │[PC]      │ │[MW]      │ │[AR]      │         │
│  │R. Chen   │ │P. Chen   │ │M. Williams│ │A. Roberts│         │
│  │CEO       │ │COO       │ │Head/Prod │ │Marketing │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
├────────────────────────────────────────────────────────────────┤
│ CORE VALUES (3-column grid, White bg)                          │
│  ❤️ Pet Welfare  🔬 Quality  🤝 Trust                          │
│  🌍 Sustain.    💡 Innovation  🏘️ Community                    │
├────────────────────────────────────────────────────────────────┤
│ STORE LOCATIONS (3-column grid, Light gray bg)                 │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐           │
│  │🏪 Columbus   │ │🏪 Austin     │ │🏪 Denver     │           │
│  │Address...    │ │Address...    │ │Address...    │           │
│  │Hours...      │ │Hours...      │ │Hours...      │           │
│  └──────────────┘ └──────────────┘ └──────────────┘           │
└────────────────────────────────────────────────────────────────┘
```

---

## 13. privacy.html & terms.html — Content Pages

### Layout (Both pages same structure)
```
┌────────────────────────────────────────────────────────────────┐
│ Home › Privacy Policy                                          │
├────────────────────────────────────────────────────────────────┤
│ PAGE HERO                                                      │
├────────────────────────────────────────────────────────────────┤
│ CONTENT BODY (centered, max-width 860px)                       │
│                                                                │
│  Last Updated: January 30, 2026                               │
│  Introduction paragraph...                                     │
│                                                                │
│  1. Information We Collect                                     │
│     Paragraph... bullet list...                                │
│                                                                │
│  2. How We Use Your Information                                │
│     Paragraph... bullet list...                                │
│  [... continues for all sections]                              │
└────────────────────────────────────────────────────────────────┘
```

---

## 14. sitemap.html — Site Map

### Layout
```
┌────────────────────────────────────────────────────────────────┐
│ Home › Sitemap                                                 │
├────────────────────────────────────────────────────────────────┤
│ PAGE HERO                                                      │
├────────────────────────────────────────────────────────────────┤
│ SITEMAP GRID (3-column)                                        │
│  ┌────────────────┐ ┌────────────────┐ ┌────────────────┐     │
│  │🏠 Main Pages   │ │🛍️ Shopping     │ │🛒 Cart/Check.  │     │
│  │ Home           │ │ All Products   │ │ Shopping Cart  │     │
│  │ About Us       │ │ Dog Supplies   │ │ Checkout       │     │
│  │ Contact        │ │ Cat Supplies   │ │ Payment        │     │
│  │ Sitemap        │ │ ...           │ │ Order Status   │     │
│  └────────────────┘ └────────────────┘ └────────────────┘     │
│  ┌────────────────┐ ┌────────────────┐ ┌────────────────┐     │
│  │💬 Cust. Svc    │ │ℹ️ Company Info  │ │📋 Legal        │     │
│  │ Live Chat      │ │ History        │ │ Privacy Policy │     │
│  │ Track Order    │ │ Team           │ │ Terms          │     │
│  │ FAQ            │ │ Values         │ │                │     │
│  │ ...            │ │ Locations      │ │                │     │
│  └────────────────┘ └────────────────┘ └────────────────┘     │
└────────────────────────────────────────────────────────────────┘
```

---

*Wireframe document prepared by the Web Development Team*  
*Project PSP-WEB-2026-01 | Pet Supply Plus, Inc. | January 30, 2026*
