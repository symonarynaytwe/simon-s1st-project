document.addEventListener('DOMContentLoaded', () => {
    
    // === FEATURE 1: Light/Dark Mode Preferences Saving ===
    const themeToggle = document.getElementById('theme-toggle');
    const rootElement = document.documentElement;
    
    // Check local storage or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    rootElement.setAttribute('data-theme', currentTheme);
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

    themeToggle.addEventListener('click', () => {
        let theme = rootElement.getAttribute('data-theme');
        let newTheme = theme === 'dark' ? 'light' : 'dark';
        
        rootElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });

    // === FEATURE 2: Dynamic Portfolio/Catalog Filtering (Shop Page) ===
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Reset active state for filters
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            productCards.forEach(card => {
                // Read custom attribute filter target
                const itemCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === itemCategory) {
                    card.style.display = 'flex';
                    card.classList.add('animate-fade-in'); // Trigger beautiful CSS re-fade
                } else {
                    card.style.display = 'none';
                    card.classList.remove('animate-fade-in');
                }
            });
        });
    });

    // === FEATURE 3: Safe Live Client-Side Form Validation (Contact Page) ===
    const contactForm = document.getElementById('contactForm');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop standard reload
            
            let isValid = true;
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            // Name validation
            if (name.value.trim().length < 3) {
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('nameError').style.display = 'none';
            }
            
            // Basic Regular Expression Email Verification
            const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailReg.test(email.value.trim())) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('emailError').style.display = 'none';
            }
            
            // Message empty check
            if (message.value.trim() === '') {
                document.getElementById('messageError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('messageError').style.display = 'none';
            }
            
            // If all validation points pass, simulate safe async transfer success feedback
            if(isValid) {
                const toast = document.getElementById('formSuccess');
                toast.style.display = 'block';
                contactForm.reset();
                setTimeout(() => { toast.style.display = 'none'; }, 5000);
            }
        });
    }
});