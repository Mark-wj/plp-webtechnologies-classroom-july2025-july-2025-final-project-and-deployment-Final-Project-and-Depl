document.addEventListener('DOMContentLoaded', function() {

    const contactForm = document.getElementById('contactForm');
    
    // Exit if form doesn't exist on current page
    if (!contactForm) {
        return;
    }
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const submitBtn = contactForm.querySelector('.submit-btn');
    const successMessage = document.getElementById('successMessage');
    // VALIDATION FUNCTIONS
    /**
     * Validate name field
     * @param {string} name - Name value to validate
     * @returns {boolean} - True if valid, false otherwise
     */
    function validateName(name) {
        // Name must be at least 2 characters and contain only letters and spaces
        const nameRegex = /^[a-zA-Z\s]{2,}$/;
        return nameRegex.test(name.trim());
    }
    
    /**
     * Validate email field
     * @param {string} email - Email value to validate
     * @returns {boolean} - True if valid, false otherwise
     */
    function validateEmail(email) {
        // Standard email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email.trim());
    }
    
    /**
     * Validate phone field
     * @param {string} phone - Phone value to validate
     * @returns {boolean} - True if valid or empty, false otherwise
     */
    function validatePhone(phone) {
        // Phone is optional, so empty is valid
        if (phone.trim() === '') {
            return true;
        }
        // Accept various phone formats: +1234567890, (123) 456-7890, 123-456-7890
        const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
        return phoneRegex.test(phone.trim());
    }
    
    /**
     * Validate subject field
     * @param {string} subject - Subject value to validate
     * @returns {boolean} - True if valid, false otherwise
     */
    function validateSubject(subject) {
        // Subject must be at least 3 characters
        return subject.trim().length >= 3;
    }
    
    /**
     * Validate message field
     * @param {string} message - Message value to validate
     * @returns {boolean} - True if valid, false otherwise
     */
    function validateMessage(message) {
        // Message must be at least 10 characters
        return message.trim().length >= 10;
    }
    // SHOW/HIDE ERROR MESSAGES    
    /**
     * Show error message for a field
     * @param {HTMLElement} input - Input element
     * @param {string} errorId - Error message element ID
     */
    function showError(input, errorId) {
        input.classList.add('error');
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.classList.add('show');
        }
    }
    
    /**
     * Hide error message for a field
     * @param {HTMLElement} input - Input element
     * @param {string} errorId - Error message element ID
     */
    function hideError(input, errorId) {
        input.classList.remove('error');
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.classList.remove('show');
        }
    }
    // REAL-TIME VALIDATION ON INPUT
    // Name field validation
    nameInput.addEventListener('blur', function() {
        if (!validateName(this.value)) {
            showError(this, 'nameError');
        } else {
            hideError(this, 'nameError');
        }
    });
    
    nameInput.addEventListener('input', function() {
        if (this.classList.contains('error') && validateName(this.value)) {
            hideError(this, 'nameError');
        }
    });
    
    // Email field validation
    emailInput.addEventListener('blur', function() {
        if (!validateEmail(this.value)) {
            showError(this, 'emailError');
        } else {
            hideError(this, 'emailError');
        }
    });
    
    emailInput.addEventListener('input', function() {
        if (this.classList.contains('error') && validateEmail(this.value)) {
            hideError(this, 'emailError');
        }
    });
    
    // Phone field validation
    phoneInput.addEventListener('blur', function() {
        if (!validatePhone(this.value)) {
            showError(this, 'phoneError');
        } else {
            hideError(this, 'phoneError');
        }
    });
    
    phoneInput.addEventListener('input', function() {
        if (this.classList.contains('error') && validatePhone(this.value)) {
            hideError(this, 'phoneError');
        }
    });
    
    // Subject field validation
    subjectInput.addEventListener('blur', function() {
        if (!validateSubject(this.value)) {
            showError(this, 'subjectError');
        } else {
            hideError(this, 'subjectError');
        }
    });
    
    subjectInput.addEventListener('input', function() {
        if (this.classList.contains('error') && validateSubject(this.value)) {
            hideError(this, 'subjectError');
        }
    });
    
    // Message field validation
    messageInput.addEventListener('blur', function() {
        if (!validateMessage(this.value)) {
            showError(this, 'messageError');
        } else {
            hideError(this, 'messageError');
        }
    });
    
    messageInput.addEventListener('input', function() {
        if (this.classList.contains('error') && validateMessage(this.value)) {
            hideError(this, 'messageError');
        }
    });
    // FORM SUBMISSION
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = nameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;
        const subject = subjectInput.value;
        const message = messageInput.value;
        
        // Validate all fields
        let isValid = true;
        
        // Validate name
        if (!validateName(name)) {
            showError(nameInput, 'nameError');
            isValid = false;
        } else {
            hideError(nameInput, 'nameError');
        }
        
        // Validate email
        if (!validateEmail(email)) {
            showError(emailInput, 'emailError');
            isValid = false;
        } else {
            hideError(emailInput, 'emailError');
        }
        
        // Validate phone (optional)
        if (!validatePhone(phone)) {
            showError(phoneInput, 'phoneError');
            isValid = false;
        } else {
            hideError(phoneInput, 'phoneError');
        }
        
        // Validate subject
        if (!validateSubject(subject)) {
            showError(subjectInput, 'subjectError');
            isValid = false;
        } else {
            hideError(subjectInput, 'subjectError');
        }
        
        // Validate message
        if (!validateMessage(message)) {
            showError(messageInput, 'messageError');
            isValid = false;
        } else {
            hideError(messageInput, 'messageError');
        }
        
        // If form is valid, submit it
        if (isValid) {
            submitForm({
                name: name,
                email: email,
                phone: phone,
                subject: subject,
                message: message
            });
        } else {
            // Scroll to first error
            const firstError = contactForm.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
        }
    });
    // SUBMIT FORM DATA
    
    /**
     * Submit form data to server
     * @param {Object} formData - Form data object
     */
    function submitForm(formData) {
        // Disable submit button
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        setTimeout(function() {
            console.log('Form submitted with data:', formData);
            
            // Show success message
            successMessage.classList.add('show');
            
            // Reset form
            contactForm.reset();
            
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
            
            // Hide success message after 5 seconds
            setTimeout(function() {
                successMessage.classList.remove('show');
            }, 5000);
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
        }, 1500); // Simulate 1.5 second delay
    }
    // PREVENT MULTIPLE SUBMISSIONS
    let isSubmitting = false;
    
    contactForm.addEventListener('submit', function(e) {
        if (isSubmitting) {
            e.preventDefault();
            return false;
        }
    });
    
    // CHARACTER COUNTER FOR MESSAGE FIELD
    const maxMessageLength = 500;
    
    // Create character counter element
    const charCounter = document.createElement('div');
    charCounter.style.textAlign = 'right';
    charCounter.style.fontSize = '0.875rem';
    charCounter.style.color = 'var(--text-light)';
    charCounter.style.marginTop = '0.5rem';
    
    // Insert after message textarea
    messageInput.parentNode.appendChild(charCounter);
    
    // Update character count
    function updateCharCount() {
        const currentLength = messageInput.value.length;
        charCounter.textContent = `${currentLength} / ${maxMessageLength} characters`;
        
        // Change color if approaching limit
        if (currentLength > maxMessageLength * 0.9) {
            charCounter.style.color = 'var(--error)';
        } else {
            charCounter.style.color = 'var(--text-light)';
        }
    }
    
    // Initialize character count
    updateCharCount();
    
    // Update on input
    messageInput.addEventListener('input', updateCharCount);
    
    // Limit message length
    messageInput.addEventListener('input', function() {
        if (this.value.length > maxMessageLength) {
            this.value = this.value.substring(0, maxMessageLength);
            updateCharCount();
        }
    });
    // AUTO-RESIZE TEXTAREA
    messageInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
    // ACCESSIBILITY ENHANCEMENTS
    function updateAriaInvalid(input, isValid) {
        input.setAttribute('aria-invalid', !isValid);
    }
    
    // Update validation functions to include aria attributes
    const inputs = [nameInput, emailInput, phoneInput, subjectInput, messageInput];
    
    inputs.forEach(function(input) {
        input.addEventListener('blur', function() {
            const isValid = !this.classList.contains('error');
            updateAriaInvalid(this, isValid);
        });
    });
    
});