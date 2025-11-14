// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        answer.classList.toggle('active');
    });
});

// Scroll Tracking
window.addEventListener('scroll', () => {
    const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    console.log('Scroll Depth:', scrollDepth + '%');
});

// Time on Page Tracking
let timeSpent = 0;
setInterval(() => {
    timeSpent++;
}, 1000);

window.addEventListener('beforeunload', () => {
    console.log('Time spent on page:', timeSpent, 'seconds');
});

// Super Pixel Integration
(function(){
    // Super Pixel initialization
    const superPixel = window.SuperPixel || {};
    superPixel.trackEvent = function(eventName) {
        console.log('Tracking event:', eventName);
        // Replace with real tracking logic
    };
    superPixel.trackEvent('Page Loaded');
})();