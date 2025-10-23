document.addEventListener('DOMContentLoaded', function() {
    // MOBILE MENU TOGGLE
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Toggle mobile menu on click
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            // Toggle active class on menu button
            this.classList.toggle('active');
            
            // Toggle active class on navigation links
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when a link is clicked
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(function(link) {
        link.addEventListener('click', function() {
            // Remove active classes
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        });
    });
    // NAVBAR SCROLL EFFECT
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class when page is scrolled down
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only apply smooth scrolling if target exists on current page
            if (targetId !== '#' && document.querySelector(targetId)) {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    // ACTIVE NAVIGATION LINK HIGHLIGHTING
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        navLinkItems.forEach(function(link) {
            link.classList.remove('active');
            
            // Get the href attribute
            const linkHref = link.getAttribute('href');
            
            // Check if link matches current page
            if (linkHref === currentPage || 
                (currentPage === '' && linkHref === 'index.html') ||
                (currentPage === 'index.html' && linkHref === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
    
    // Set active link on page load
    setActiveNavLink();

    // CLOSE MOBILE MENU ON WINDOW RESIZE   
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Close mobile menu if window is resized to desktop size
            if (window.innerWidth > 768) {
                if (menuToggle) {
                    menuToggle.classList.remove('active');
                }
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
            }
        }, 250);
    });
    // PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
});