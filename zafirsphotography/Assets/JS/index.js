


// animations


document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM elements
    const sectionsToAnimate = document.querySelectorAll('.fly-in-left, .fly-in-right');
    const aboutSection = document.querySelector('.about-section');
    const gallerySection = document.querySelector('.gallery');
    const newsletterSection = document.querySelector('#newsletter');

    // Animation observer configuration
    const observerConfig = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust the threshold value as needed
    };

    // Callback function to handle intersection changes
    function handleIntersect(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the section is intersecting with the viewport
                if (entry.target.classList.contains('about-section')) {
                    entry.target.classList.add('fade-in');
                } else {
                    entry.target.classList.add('animate-fly-in');
                }
                
                // For gallery section
                if (entry.target.classList.contains('gallery')) {
                    entry.target.querySelectorAll('.item').forEach(item => {
                        item.classList.add('animate-item');
                    });
                }

                // For newsletter section
                if (entry.target.classList.contains('newsletter')) {
                    entry.target.querySelectorAll('h2').forEach(h2 => {
                        h2.style.animationPlayState = 'running';
                    });
                    
                    entry.target.querySelector('form').style.animationPlayState = 'running';
                    
                    // Apply fade-in animation to additional text paragraphs
                    entry.target.querySelectorAll('.additional-text p').forEach(p => {
                        p.style.opacity = '1'; // Change opacity to 1
                    });
                }
            } else {
                // If the section is not intersecting with the viewport
                if (entry.target.classList.contains('about-section')) {
                    entry.target.classList.remove('fade-in');
                } else {
                    entry.target.classList.remove('animate-fly-in');
                }
                
                // For gallery section
                if (entry.target.classList.contains('gallery')) {
                    entry.target.querySelectorAll('.item').forEach(item => {
                        item.classList.remove('animate-item');
                    });
                }

                // For newsletter section
                if (entry.target.classList.contains('newsletter')) {
                    entry.target.querySelectorAll('h2').forEach(h2 => {
                        h2.style.animationPlayState = 'paused';
                    });
                    
                    entry.target.querySelector('form').style.animationPlayState = 'paused';
                    
                    // Reset opacity of additional text paragraphs when not intersecting
                    entry.target.querySelectorAll('.additional-text p').forEach(p => {
                        p.style.opacity = '0'; // Change opacity to 0
                    });
                }
            }
        });
    }

    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver(handleIntersect, observerConfig);

    // Start observing each target element for fly-in animation
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });

    // Start observing other sections
    observer.observe(aboutSection);
    observer.observe(gallerySection);
    observer.observe(newsletterSection);
});
