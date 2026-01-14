# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for A.H Frame Artist (ahframeartist.com), a bespoke eyewear frame designer based in Bath. The site is hosted on GitHub Pages.

## Development

This is a pure HTML/CSS/JS static site with no build process. To develop:

1. Open `index.html` in a browser, or use a local server (e.g., `python -m http.server 8000`)
2. Changes to HTML, CSS, or JS files are immediately visible on refresh

## Architecture

### Directory Structure
- `index.html` - Homepage
- `pages/` - Subpages (about, bespoke, project, collection, contact), each with own `index.html` and `style.css`
- `assets/css/` - Shared stylesheets (`common.css` for site-wide styles, `home.css` for homepage)
- `assets/js/` - Shared JavaScript (`common.js` for navigation/mobile menu, `home.js` for homepage features)
- `assets/images/` - All images organized by page/section

### CSS Architecture
- `common.css` defines CSS custom properties for the color palette:
  - `--color-red: #B43A32` (primary brand color)
  - `--color-cream: #FFE9D7`
  - `--color-white: #FFFFFF`
  - `--color-black: #18110E`
  - `--color-green: #1D4B24`
- Typography uses 'Nitti' font (Adobe Fonts) with utility classes: `.heading`, `.subheading`, `.bodyheading`, `.body`, `.headline`
- Each page imports `common.css` then its own `style.css` for page-specific styles

### JavaScript
- `common.js` handles mobile navigation menu (burger menu toggle, overlay, close button)
- `home.js` handles homepage-specific features (carousel, contact form mailto)
- No framework or build tools - vanilla JS only

### Page Structure
Each page follows a consistent pattern:
1. Header with fixed navigation bar
2. Page-specific content sections
3. Footer with navigation links

Navigation paths use relative URLs from each page's location (e.g., `../../assets/` from `pages/about/`).
