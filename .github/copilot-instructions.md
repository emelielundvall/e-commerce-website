# Améline E-Commerce Website - Copilot Instructions

## Project Overview

This is a static HTML/CSS e-commerce website for "Améline," a handcrafted jewelry and accessories brand. The site consists of four core pages:
- **index.html** - Homepage with hero imagery and brand messaging
- **products.html** - Products listing page (currently empty, needs implementation)
- **product.html** - Individual product detail page (currently empty, needs implementation)
- **cart.html** - Shopping cart page (currently empty, needs implementation)

## Architecture & Patterns

### Page Structure
- **No JavaScript yet** - Site is HTML/CSS only. Any interactivity (cart functionality, filters, navigation) must be implemented from scratch.
- **Flat directory structure** - All HTML pages in root, CSS in `css/` folder, images in `images/` folder. Maintain this simplicity.
- **Linked CSS** - Each HTML page links to `css/main.css` via `<link rel="stylesheet" href="main.css">`. Do not create separate CSS files per page.

### Design Conventions
- **Brand colors**: Dark slate grey (`darkslategrey`) used for headings. Expand this palette in main.css as you develop the site.
- **Typography**: Verdana, Geneva, Tahoma sans-serif stack established in h1 styling.
- **Responsive images**: Use `width` attributes on `<img>` tags (seen in index.html). Add `max-width: 100%` to CSS for responsive scaling.
- **Metadata**: UTF-8 charset and viewport meta tag already present in index.html template—use this as the standard for all new pages.

### Naming Conventions
- **Image files**: Descriptive kebab-case (e.g., `close-up.png`, `2woman.jpg`). Store all in `images/` folder.
- **CSS classes**: Will need to establish when adding styling. Use lowercase with hyphens (e.g., `.product-card`, `.cart-item`).
- **HTML structure**: Keep semantic, with meaningful alt text for accessibility.

## Common Tasks

### Adding New Pages
1. Start with the template structure in index.html (doctype, meta tags, main.css link).
2. Add meaningful `<title>` tags (currently all say "Document").
3. Link navigation between pages using relative paths (e.g., `<a href="products.html">`)—no absolute URLs.

### Styling
- All CSS goes in `css/main.css`. Build progressively as pages are filled out.
- Current CSS is minimal; expand selectors and add responsive media queries as layout becomes complex.

### Empty Pages to Complete
- **products.html**: Needs product grid/list layout. Likely candidates: product cards with image, name, price.
- **product.html**: Single product detail with larger image, description, price, add-to-cart button.
- **cart.html**: Cart summary, item removal, checkout flow (placeholder for now).

## Key Files
- [index.html](index.html) - Homepage template with brand messaging and imagery
- [css/main.css](css/main.css) - Single stylesheet for all pages
- [images/](images/) - Image assets directory

## Development Notes
- No build process, linter, or test setup. This is a simple static site—edit HTML/CSS directly.
- Use relative paths for all links and assets.
- Validate HTML markup (semantic tags, accessible alt text) as you expand pages.
- Future consideration: Add JavaScript for cart functionality and dynamic product loading when needed.
