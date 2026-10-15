document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scrolling for Navigation Links & Buttons
    const navLinks = document.querySelectorAll('nav a, .hero-btn, .cta-btn');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Check if it's an internal anchor link
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 2. Interactive Product Cards (Clicking a flavor adds it to a mock cart)
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const flavorTitle = card.querySelector('h3').textContent;
            showNotification(`Great choice! You selected **${flavorTitle}**. Added to your cart! 🥤`);
        });
    });

    // 3. Dynamic Notification Popup Creator
    function showNotification(message) {
        // Remove any existing notification
        const existingAlert = document.querySelector('.custom-alert');
        if (existingAlert) {
            existingAlert.remove();
        }

        // Create alert element
        const alertBox = document.createElement('div');
        alertBox.className = 'custom-alert';
        alertBox.innerHTML = message;
        
        // Style the notification dynamically
        Object.assign(alertBox.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#ff5722',
            color: '#fff',
            padding: '15px 25px',
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
            zIndex: '1000',
            fontWeight: '600',
            fontFamily: 'Segoe UI, sans-serif',
            transition: 'opacity 0.3s ease-in-out',
            opacity: '0'
        });

        document.body.appendChild(alertBox);

        // Fade in
        setTimeout(() => {
            alertBox.style.opacity = '1';
        }, 10);

        // Fade out and remove after 3 seconds
        setTimeout(() => {
            alertBox.style.opacity = '0';
            setTimeout(() => alertBox.remove(), 300);
        }, 3000);
    }
});