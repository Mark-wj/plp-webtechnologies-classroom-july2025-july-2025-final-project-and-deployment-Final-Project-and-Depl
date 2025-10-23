document.addEventListener('DOMContentLoaded', function() {
    // SLIDER INITIALIZATION
    const sliderWrapper = document.getElementById('sliderWrapper');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const sliderDotsContainer = document.getElementById('sliderDots');
    
    // Exit if slider elements don't exist on current page
    if (!sliderWrapper) {
        return;
    }
    
    // Get all slides
    const slides = sliderWrapper.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    // Slider state
    let currentSlide = 0;
    let autoPlayInterval;
    const autoPlayDelay = 5000; // 5 seconds
    // CREATE NAVIGATION DOTS
    function createDots() {
        sliderDotsContainer.innerHTML = '';
        
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            
            // Set first dot as active
            if (i === 0) {
                dot.classList.add('active');
            }
            
            // Add click event to dot
            dot.addEventListener('click', function() {
                goToSlide(i);
                resetAutoPlay();
            });
            
            sliderDotsContainer.appendChild(dot);
        }
    }
    // UPDATE ACTIVE DOT
    function updateDots() {
        const dots = sliderDotsContainer.querySelectorAll('.dot');
        
        dots.forEach(function(dot, index) {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    // GO TO SPECIFIC SLIDE    
    function goToSlide(slideIndex) {
        // Ensure slide index is within bounds
        if (slideIndex < 0) {
            currentSlide = totalSlides - 1;
        } else if (slideIndex >= totalSlides) {
            currentSlide = 0;
        } else {
            currentSlide = slideIndex;
        }
        
        // Calculate transform value
        const transformValue = -currentSlide * 100;
        
        // Apply transform to move slider
        sliderWrapper.style.transform = `translateX(${transformValue}%)`;
        
        // Update dots
        updateDots();
    }
    // NEXT SLIDE    
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    // PREVIOUS SLIDE    
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    // AUTO PLAY FUNCTIONALITY    
    function startAutoPlay() {
        autoPlayInterval = setInterval(function() {
            nextSlide();
        }, autoPlayDelay);
    }
    
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    
    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }
    // EVENT LISTENERS FOR NAVIGATION BUTTONS    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            prevSlide();
            resetAutoPlay();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            nextSlide();
            resetAutoPlay();
        });
    }
    // KEYBOARD NAVIGATION    
    document.addEventListener('keydown', function(e) {
        // Only work if slider is in viewport
        const sliderContainer = document.querySelector('.slider-container');
        if (!sliderContainer) return;
        
        const rect = sliderContainer.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInViewport) {
            if (e.key === 'ArrowLeft') {
                prevSlide();
                resetAutoPlay();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
                resetAutoPlay();
            }
        }
    });
    // TOUCH/SWIPE SUPPORT FOR MOBILE   
    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50; // Minimum distance for swipe
    
    sliderWrapper.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    sliderWrapper.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeDistance = touchEndX - touchStartX;
        
        // Swipe left (next slide)
        if (swipeDistance < -minSwipeDistance) {
            nextSlide();
            resetAutoPlay();
        }
        
        // Swipe right (previous slide)
        if (swipeDistance > minSwipeDistance) {
            prevSlide();
            resetAutoPlay();
        }
    }
    // PAUSE AUTO PLAY ON HOVER
  
    const sliderContainer = document.querySelector('.slider-container');
    
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', function() {
            stopAutoPlay();
        });
        
        sliderContainer.addEventListener('mouseleave', function() {
            startAutoPlay();
        });
    }
    
    // PAUSE AUTO PLAY WHEN TAB IS NOT VISIBLE
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            stopAutoPlay();
        } else {
            startAutoPlay();
        }
    });
    
    // Create navigation dots
    createDots();
    
    // Start auto play
    startAutoPlay();
    
    // Ensure first slide is visible
    goToSlide(0);
    
    function lazyLoadImages() {
        const images = sliderWrapper.querySelectorAll('img[data-src]');
        
        images.forEach(function(img) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
    lazyLoadImages();
    
});