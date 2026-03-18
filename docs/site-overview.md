# Pet Supply Plus — Site Overview Document

**Project Number:** PSP-WEB-2026-01  
**Client:** Pet Supply Plus  
**Requestor:** Angela Roberts (aroberts@petsupplyplus.com)  
**Date of Request:** March 15, 2026  
**Project Type:** Web Development — Responsive E-Commerce Website  

---

## 1. Project Information

| Field | Details |
|-------|---------|
| **Project Number** | PSP-WEB-2026-01 |
| **Client Name** | Pet Supply Plus, Inc. |
| **Client Contact** | Angela Roberts, Marketing Director |
| **Contact Email** | aroberts@petsupplyplus.com |
| **Contact Phone** | 1-800-PET-PLUS (738-7587) |
| **Date Requested** | March 15, 2026 |
| **Date Completed** | March 15, 2026 |

---

## 1.1 Project Team

| Role | Name |
|------|------|
| **Project Manager** | Tulsi Neupane |
| **Stakeholders** | David Clark, James Neman |
| **Network Engineer** | Michael Thompson |
| **Info System Security Engineer** | Sarah Martinez |
| **Client Requestor** | Angela Roberts |

---

## 2. Site Purpose and Target Audience

### Purpose
The Pet Supply Plus website is a full-featured, responsive e-commerce platform designed to serve as the primary online retail presence for Pet Supply Plus, Inc. The site enables customers to:

- Browse and purchase pet supplies across 6 major categories
- Manage their shopping cart and complete purchases online
- Track existing orders through the self-service portal
- Receive live customer service support via the chat interface
- Access product information, company details, and support resources

### Target Audience
**Primary:** Pet owners aged 25–55 with household income above median, actively spending on their pets' health, nutrition, and enrichment.

**Secondary:** 
- First-time pet owners seeking guidance and starter kits
- Veterinary professionals purchasing supplies for recommendations
- Gift buyers purchasing pet supplies for loved ones

**Psychographics:**
- Views pets as family members
- Willing to invest in quality products for pet health
- Comfortable shopping online; expects fast, reliable e-commerce
- Values expert advice and trustworthy brands

---

## 3. Site Map (Complete Page Listing)

```
Pet Supply Plus Website
│
├── index.html                  (Home)
│   ├── Hero Section
│   ├── Category Quick Links
│   ├── Featured Products (8 products)
│   ├── Why Choose Us Section
│   ├── Customer Testimonials
│   └── Newsletter Signup
│
├── about.html                  (About Us)
│   ├── Company History & Mission
│   ├── Team Profiles (4 members)
│   ├── Core Values (6 values)
│   └── Store Locations (3 locations)
│
├── products.html               (Shop / Product Catalog)
│   ├── Filter Sidebar
│   ├── Sort Controls
│   ├── Dog Supplies (4 products)
│   ├── Cat Supplies (4 products)
│   ├── Bird Supplies (4 products)
│   ├── Fish & Aquarium (4 products)
│   ├── Reptile Supplies (4 products)
│   └── Small Animals (4 products)
│
├── product-detail.html         (Product Detail Page)
│   ├── Product Images (with thumbnails)
│   ├── Product Info & Specifications
│   ├── Quantity Selector
│   ├── Add to Cart / Buy Now
│   ├── Customer Reviews (3 sample)
│   └── Related Products (4 items)
│
├── cart.html                   (Shopping Cart)
│   ├── Cart Items Table (3 sample items)
│   ├── Quantity Controls
│   ├── Remove Item Controls
│   ├── Order Summary Sidebar
│   ├── Promo Code Entry
│   └── Proceed to Checkout Button
│
├── checkout.html               (Checkout / Order Confirmation)
│   ├── Shipping Information Form
│   ├── Shipping Method Selection (3 options)
│   └── Order Summary Sidebar
│
├── payment.html                (Online Payment)
│   ├── Payment Method Selection (3 methods)
│   ├── Credit/Debit Card Form
│   ├── Billing Address Form
│   ├── Security Badges
│   └── Order Summary Sidebar
│
├── order-status.html           (Customer Self-Service - Order Tracking)
│   ├── Order Lookup Form
│   ├── Order Details Display
│   ├── Progress Tracker (4 steps)
│   ├── Items Ordered Table
│   └── Shipping Address Display
│
├── customer-service.html       (Customer Service / Chat)
│   ├── Live Chat Window
│   │   ├── Chat Header (Agent Info)
│   │   ├── Chat Message History
│   │   └── Message Input & Send
│   └── Contact Sidebar
│       ├── Contact Options
│       ├── Hours of Operation
│       └── Quick Help Links
│
├── contact.html                (Contact Us)
│   ├── Contact Form
│   ├── Contact Information Sidebar
│   ├── Map Placeholder
│   └── Social Media Links
│
├── faq.html                    (Frequently Asked Questions)
│   ├── FAQ Search Box
│   ├── Ordering FAQ (4 Q&A)
│   ├── Shipping FAQ (3 Q&A)
│   ├── Returns FAQ (3 Q&A)
│   ├── Products FAQ (3 Q&A)
│   └── Account FAQ (2 Q&A)
│
├── privacy.html                (Privacy Policy)
│   └── 9 Policy Sections
│
├── terms.html                  (Terms & Conditions)
│   └── 10 Terms Sections
│
└── sitemap.html                (HTML Sitemap)
    └── 6 Organized Sections with All Page Links
```

---

## 4. Design Philosophy

### Overall Approach
The design follows a **clean, professional e-commerce aesthetic** that communicates trust, quality, and care for pets. The interface prioritizes **clarity and ease of use** over decorative complexity, ensuring that pet owners can quickly find products and complete purchases with minimal friction.

### Design Principles Applied
- **Repetition:** Consistent header, navigation, footer, product card patterns, and button styles across all 14 pages
- **Contrast:** Navy blue primary vs. white backgrounds; orange accent on CTAs; teal for secondary actions
- **Proximity:** Related elements grouped (product info, pricing, CTA button in cards; chat UI components together)
- **Alignment:** Grid-based layouts, consistent padding, aligned form labels and inputs

### Emotional Design
The warm orange accent color creates energy and calls to action, while navy blue establishes trust and professionalism. Pet-themed emoji icons add warmth and fun without sacrificing professionalism.

---

## 5. Technology Stack

| Layer | Technology |
|-------|-----------|
| **HTML** | HTML5 (semantic elements: header, nav, main, footer, section, article, aside, figure) |
| **CSS** | CSS3 (Grid, Flexbox, Custom Properties, Media Queries) |
| **JavaScript** | Vanilla ES5+ (no frameworks or dependencies) |
| **Fonts** | Arial, Helvetica, sans-serif (system stack — no external font dependency) |
| **Images** | CSS-generated placeholders (no external image dependencies) |
| **Build Tools** | None — static files served directly from browser |
| **Hosting** | Static file compatible (GitHub Pages, Netlify, Apache, Nginx) |

---

## 6. Color Palette

| Name | Hex Code | Usage |
|------|----------|-------|
| **Primary (Navy Blue)** | `#1B3A5C` | Header, navigation, headings, footer |
| **Secondary (Teal)** | `#2AABB3` | Accent elements, links, chat, secondary buttons |
| **Accent (Orange)** | `#F5A623` | CTAs, "Add to Cart" buttons, price display, star ratings |
| **White** | `#FFFFFF` | Page backgrounds, card backgrounds |
| **Light Gray** | `#F5F5F5` | Alternate section backgrounds, form fields |
| **Dark Text** | `#333333` | Body text, descriptions |
| **Light Text** | `#666666` | Secondary text, captions, placeholders |
| **Border** | `#DDDDDD` | Dividers, card borders, table lines |

---

## 7. Typography

| Element | Style |
|---------|-------|
| **Body Text** | Arial, Helvetica, sans-serif — 16px, 1.6 line-height |
| **H1** | Bold, 2rem (32px) desktop, scales down on mobile |
| **H2** | Bold, 1.6rem (25.6px) |
| **H3** | Bold, 1.3rem (20.8px) |
| **Navigation** | Bold, 0.95rem, uppercase, letter-spacing |
| **Small text** | 0.875rem (14px) for captions, badges |
| **Web Fonts** | None — system fonts only |

---

## 8. Feature List

### E-Commerce Features
- ✅ Product catalog with 24+ products across 6 categories
- ✅ Product detail pages with specifications, reviews, and related products
- ✅ Shopping cart with quantity controls and order totals
- ✅ Multi-step checkout (Cart → Checkout → Payment)
- ✅ Order status self-service lookup and tracking display
- ✅ Promo code entry field on cart page

### Customer Service Features
- ✅ Live chat UI with sample conversation history
- ✅ Real-time chat message sending (JavaScript simulation)
- ✅ Contact form with subject dropdown
- ✅ FAQ accordion with 15+ Q&A pairs in 5 categories

### Navigation & Accessibility Features
- ✅ Skip navigation link for screen reader users
- ✅ Breadcrumb navigation on all inner pages
- ✅ HTML sitemap page
- ✅ Responsive hamburger menu on mobile
- ✅ ARIA labels and roles throughout
- ✅ `lang="en"` on all pages
- ✅ `alt` text on all images
- ✅ Table `headers` and `id` attributes on data tables
- ✅ Keyboard-navigable interactive elements

### Design & Responsive Features
- ✅ Mobile-first responsive design (3 breakpoints)
- ✅ CSS Grid and Flexbox layouts
- ✅ Product filter sidebar
- ✅ Sort controls (UI)
- ✅ Hero section with gradient
- ✅ CSS-generated product image placeholders

---

## 9. Responsive Breakpoints

| Breakpoint | Range | Layout |
|------------|-------|--------|
| **Desktop** | ≥993px | Multi-column grid, full nav bar, sidebar layouts |
| **Tablet** | 577px–992px | 2–3 column grid, side-by-side forms |
| **Mobile** | ≤576px | Single column, hamburger menu, stacked forms |

---

## 10. Accessibility Approach

The Pet Supply Plus website was designed with WCAG 2.1 Level AA accessibility guidelines in mind:

1. **Keyboard Navigation:** All interactive elements are reachable and operable via keyboard
2. **Skip Navigation:** Hidden link at top allows screen reader users to bypass navigation
3. **Semantic HTML:** Proper use of `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<aside>`, `<figure>`
4. **ARIA Labels:** Role and label attributes on interactive regions and live chat
5. **Color Contrast:** All text-background combinations meet 4.5:1 minimum contrast ratio
6. **Color Independence:** Status indicators use text labels alongside visual indicators
7. **Alt Text:** Descriptive `alt` attributes on all `<img>` elements and role="img" on CSS-based images
8. **Table Headers:** `id` and `headers` attributes on data tables (cart, order status)
9. **Form Labels:** All form inputs have explicit `<label>` elements
10. **Breadcrumbs:** `aria-label` and `aria-current` on breadcrumb navigation
11. **Live Region:** Chat and order status use `aria-live` for dynamic content
12. **Language:** `<html lang="en">` on all pages

---

## 11. Page Count Summary

| Category | Pages |
|----------|-------|
| Main/Home | 1 |
| About | 1 |
| Shop/Products | 2 (catalog + detail) |
| Cart & Checkout | 3 (cart, checkout, payment) |
| Customer Service | 2 (chat, order status) |
| Contact & Help | 3 (contact, faq, customer-service overlap) |
| Legal | 2 (privacy, terms) |
| Utility | 1 (sitemap) |
| **Total** | **14** |

---

*Document prepared by the Web Development Team for Pet Supply Plus, Inc.*  
*Project PSP-WEB-2026-01 | March 15, 2026*  
*Project Manager: Tulsi Neupane*