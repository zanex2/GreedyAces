function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll event
function handleScroll() {
    const headerText = document.querySelector('.header-text');
    
    if (isInViewport(headerText)) {
        headerText.classList.add('active');
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);