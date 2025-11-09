# Fylo Landing Page

A modern, responsive landing page for Fylo, built with Vite, Tailwind CSS, GSAP animations, and Remixicon icons. This project showcases a secure file storage service with interactive animations and a clean, professional design.

## Features

- **Responsive Design**: Optimized for desktop and mobile devices using Tailwind CSS.
- **Smooth Animations**: Powered by GSAP (GreenSock Animation Platform) for scroll-triggered and interactive animations.
- **Mobile Navigation**: Toggleable mobile menu with GSAP transitions.
- **Hero Section**: Eye-catching introduction with call-to-action button.
- **Features Section**: Highlights key benefits like access anywhere, security, collaboration, and file storage.
- **Productivity Section**: Emphasizes staying productive with secure file sharing.
- **Testimonials**: Customer reviews with hover effects.
- **Early Access Signup**: Form for email signups.
- **Footer**: Contact information, navigation links, and social media icons.

## Technologies Used

- **Vite**: Fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **GSAP**: JavaScript animation library for complex animations.
- **Remixicon**: Icon library for UI elements.
- **HTML5**: Semantic markup.
- **JavaScript (ES6 Modules)**: For interactivity.

## Project Structure

### `src/`
- `anime.js`: Contains GSAP timelines and scroll-triggered animations for various sections (nav intro, features, productivity, testimonials, notify section, footer).
- `main.js`: Handles mobile navigation toggle functionality using GSAP.
- `style.css`: Imports Tailwind CSS and Remixicon fonts, defines custom CSS variables for colors, fonts, gradients, and background images, and sets base styles.

### `package.json`
```json
{
  "name": "fylo-landing-page",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^7.1.7"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.16",
    "gsap": "^3.13.0",
    "remixicon": "^4.7.0",
    "tailwindcss": "^4.1.16"
  }
}
```

### `index.html`
The main HTML file structuring the landing page:
- **Navigation**: Fixed header with logo, links, and mobile toggle.
- **Hero**: Background image, heading, subtext, and CTA button.
- **Features**: Grid of feature cards with icons and descriptions.
- **Productivity**: Image and text section with link.
- **Testimonials**: Quotes from users with profiles.
- **Notify Section**: Signup form for early access.
- **Footer**: Logo, contact details, links, and social icons.
- Includes scripts for `main.js` and `anime.js`.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhi-zero/fylo-landing-page
   cd fylo-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Build for Production

To build the project for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Assets

Images and icons are stored in the `public/images/` directory, including:
- Logo, illustrations, icons, and background images.
- Ensure all assets are present for the page to render correctly.

## Customization

- **Colors and Fonts**: Modify CSS variables in `src/style.css`.
- **Animations**: Adjust GSAP timelines in `src/anime.js` and `src/main.js`.
- **Content**: Update text and images in `index.html`.

## Browser Support

- Modern browsers supporting ES6 modules and CSS Grid/Flexbox.
- Tested on Chrome, Firefox, Safari, and Edge.

## License

This project is for educational purposes. Feel free to use and modify as needed.
