# Daily Motors Ltd — Website Prototype

A fully responsive, multi-page dealership website for Daily Motors Ltd, Nairobi.

## Pages

| Page | File | Description |
|------|------|-------------|
| Homepage | `index.html` | Hero, featured cars, stats, testimonials |
| Inventory | `inventory.html` | All cars with search & filters |
| Car Detail | `car-detail.html` | Individual vehicle page |
| About | `about.html` | Team, values, story |
| Contact | `contact.html` | Form, location, financing info |

## How to Host on GitHub Pages (Step by Step)

### 1. Create a GitHub Account
Go to [github.com](https://github.com) and sign up for free.

### 2. Create a New Repository
- Click the **+** icon → **New repository**
- Name it: `daily-motors` (or any name you prefer)
- Set it to **Public**
- Click **Create repository**

### 3. Upload the Files
- Click **Add file** → **Upload files**
- Drag and drop ALL files maintaining the folder structure:
  ```
  index.html
  inventory.html
  car-detail.html
  about.html
  contact.html
  css/
    style.css
  js/
    main.js
  ```
- Click **Commit changes**

### 4. Enable GitHub Pages
- Go to **Settings** tab in your repository
- Scroll down to **Pages** (in the left sidebar)
- Under **Source**, select **Deploy from a branch**
- Select **main** branch, **/ (root)** folder
- Click **Save**

### 5. Your Site Is Live!
After 1–2 minutes, your site will be available at:
```
https://YOUR-USERNAME.github.io/daily-motors/
```

Share this link with your client to preview the website! 🚗

---

## Project Structure

```
daily-motors/
├── index.html          # Homepage
├── inventory.html      # Car listings page
├── car-detail.html     # Individual car page
├── about.html          # About us page
├── contact.html        # Contact & enquiry page
├── css/
│   └── style.css       # All styles (fonts, layout, animations)
└── js/
    └── main.js         # Car data, interactions, cursor, reveal
```

## Features

- Custom animated cursor
- Scroll-triggered reveal animations
- Animated number counters
- Live search & multi-filter car inventory
- Car detail pages with specs & features
- Enquiry modal with form
- Toast notifications
- WhatsApp integration
- Fully responsive (mobile, tablet, desktop)
- SEO meta tags
- No external dependencies (except Google Fonts)

---

Built with HTML, CSS & Vanilla JavaScript · © 2026 Daily Motors Ltd
