# Pixel Studio - Creative Agency Website

A modern, responsive, and fully functional three-page website built with HTML5, CSS3, and vanilla JavaScript. This project demonstrates best practices in web development including semantic HTML, modular CSS, interactive JavaScript features, and mobile-first responsive design.

## 📁 Project Structure

```
pixel-studio/
│
├── index.html              # Home page with hero, slider, and services
├── about.html              # About page with company info and stats
├── contact.html            # Contact page with form validation
│
├── css/
│   └── styles.css          # Main stylesheet (modular and well-commented)
│
├── js/
│   ├── navigation.js       # Navigation menu and scroll effects
│   ├── slider.js           # Image slider functionality
│   └── form.js             # Form validation and submission
│
├── images/
│   ├── slide1.jpg          # Slider image 1
│   ├── slide2.jpg          # Slider image 2
│   └── slide3.jpg          # Slider image 3
│
└── README.md               # Project documentation
```

## 🌟 Features

### Home Page (index.html)
- **Hero Section**: Gradient background with floating animation
- **Image Slider**: 
  - Auto-play functionality (5-second interval)
  - Manual navigation with previous/next buttons
  - Dot indicators for slide position
  - Keyboard navigation (arrow keys)
  - Touch/swipe support for mobile devices
  - Pause on hover
- **Services Section**: Grid layout showcasing 4 services with hover effects

### About Page (about.html)
- **Company Story**: Two-column layout with text and visual element
- **Statistics**: Animated stat cards showing company achievements
- **Mission & Values**: Grid layout with value propositions

### Contact Page (contact.html)
- **Contact Information**: Display of email, phone, address, and social links
- **Contact Form**: 
  - Real-time validation
  - Custom error messages
  - Email format validation
  - Phone number validation (optional field)
  - Character counter for message field
  - Auto-resize textarea
  - Accessibility features (ARIA attributes)
  - Submit button with loading state

### Global Features
- **Responsive Navigation**: 
  - Mobile hamburger menu
  - Smooth transitions
  - Active page highlighting
  - Closes on link click
- **Smooth Scrolling**: For anchor links
- **Scroll Effects**: Navbar changes on scroll
- **Footer**: Consistent across all pages with multiple sections
- **Accessibility**: Semantic HTML5, ARIA labels, keyboard navigation

## 🎨 Design Highlights

### Color Palette
- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Background: `#f8fafc` (Light gray)
- Dark: `#0f172a` (Dark blue)
- Text: `#1e293b` (Dark slate)

### Typography
- Primary Font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Clean, modern, and highly readable

### Animations
- Fade-in effects on page load
- Hover transitions on buttons and cards
- Smooth slider transitions
- Mobile menu slide animations

## 💻 Technologies Used

- **HTML5**: Semantic structure, accessibility
- **CSS3**: 
  - Flexbox and Grid layouts
  - CSS variables for theming
  - Animations and transitions
  - Media queries for responsive design
- **JavaScript (ES6+)**:
  - DOM manipulation
  - Event handling
  - Form validation
  - Slider functionality
  - No external libraries or frameworks

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above (optimal viewing)
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px (hamburger menu activated)
- **Small Mobile**: Below 480px (optimized for small screens)

### Mobile Features
- Hamburger menu navigation
- Touch-friendly buttons and links
- Swipe gestures for slider
- Optimized font sizes and spacing
- Stacked layouts for better readability

## 🚀 Getting Started

### Installation

1. **Clone or download the project**
   ```bash
   git clone https://github.com/yourusername/pixel-studio.git
   cd pixel-studio
   ```

2. **Add images to the images folder**
   - Add three images named: `slide1.jpg`, `slide2.jpg`, `slide3.jpg`
   - Recommended size: 1200x500px
   - Or use placeholder SVG images (already included in HTML)

3. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

4. **Access the website**
   - Navigate to `http://localhost:8000` in your browser

## 🔧 Customization Guide

### Changing Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #6366f1;    /* Your primary color */
    --secondary-color: #8b5cf6;   /* Your secondary color */
    --dark-bg: #0f172a;          /* Dark background */
    --light-bg: #f8fafc;         /* Light background */
}
```

### Modifying Content
1. **Home Page**: Edit `index.html` - Update hero text, services, slider captions
2. **About Page**: Edit `about.html` - Update company story, stats, values
3. **Contact Page**: Edit `contact.html` - Update contact information

### Adjusting Slider Settings
In `js/slider.js`, modify:
```javascript
const autoPlayDelay = 5000; // Change slide duration (milliseconds)
```

### Form Validation Rules
In `js/form.js`, modify validation functions:
```javascript
function validateName(name) {
    const nameRegex = /^[a-zA-Z\s]{2,}$/; // Adjust regex pattern
    return nameRegex.test(name.trim());
}
```

## ✅ Browser Compatibility

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 📋 Code Quality

### HTML Validation
- Passes W3C HTML5 validation
- Semantic structure using `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for images
- ARIA labels for accessibility

### CSS Best Practices
- Modular structure with clear sections
- CSS variables for easy theming
- BEM-like naming convention
- Mobile-first approach
- Efficient selectors
- Comprehensive comments

### JavaScript Best Practices
- Clean, modular code
- Comprehensive comments
- Error handling
- Event delegation where appropriate
- No global namespace pollution
- ES6+ features (arrow functions, const/let, template literals)

## 🧪 Testing Checklist

### Functionality Testing
- [x] Navigation links work on all pages
- [x] Mobile menu opens and closes correctly
- [x] Slider auto-plays and responds to controls
- [x] Form validation works for all fields
- [x] Form submission displays success message
- [x] All hover effects work
- [x] Keyboard navigation works
- [x] Touch gestures work on mobile

### Responsive Testing
- [x] Layout adapts correctly at all breakpoints
- [x] Images scale properly
- [x] Text remains readable at all sizes
- [x] Buttons and links are touch-friendly
- [x] No horizontal scrolling

### Cross-Browser Testing
- [x] Consistent appearance across browsers
- [x] JavaScript functions work in all browsers
- [x] CSS animations work smoothly

## 🔐 Security Considerations

- Form validation on client-side (should be paired with server-side validation in production)
- No sensitive data stored in localStorage/sessionStorage
- Input sanitization for XSS prevention (implement server-side)
- HTTPS recommended for production deployment

## 📈 Performance Optimization

- Minimal external dependencies (no frameworks)
- Optimized CSS (no unused rules)
- Efficient JavaScript (event delegation, debouncing)
- Image optimization recommended (compress before upload)
- Lazy loading can be implemented for images
- Minification recommended for production

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch and folder
4. Your site will be live at `https://username.github.io/pixel-studio`

### Netlify
1. Drag and drop folder to Netlify
2. Or connect GitHub repository
3. Automatic deployment on every push

### Traditional Web Hosting
1. Upload all files via FTP
2. Ensure proper file structure is maintained
3. Set `index.html` as default document

## 📝 Future Enhancements

Potential features to add:
- [ ] Blog section with pagination
- [ ] Portfolio gallery with lightbox
- [ ] Testimonials slider
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Backend integration for form submission
- [ ] Search functionality
- [ ] Social media feed integration
- [ ] Loading animations
- [ ] Service worker for offline support

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - free to use for personal and commercial projects.

## 👨‍💻 Author

**Pixel Studio Development Team**
- Website: [www.pixelstudio.com](#)
- Email: hello@pixelstudio.com
- GitHub: [@pixelstudio](#)

## 🙏 Acknowledgments

- Design inspiration from modern web design trends
- Icons and emojis for visual elements
- Community feedback and testing

---

**Version**: 1.0.0  
**Last Updated**: October 2025  
**Status**: Production Ready

For questions or support, please open an issue on GitHub or contact us at hello@pixelstudio.com