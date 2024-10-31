// Box-sizing mapping
const boxSizingClasses = {
    'box-border': 'border-box',
    'box-content': 'content-box'
};

// Function to apply box-sizing styles
function applyBoxSizingStyles() {
    // Select all elements
    const elements = document.querySelectorAll('*');

    elements.forEach(element => {
        element.classList.forEach(className => {
            if (boxSizingClasses[className]) {
                element.style.boxSizing = boxSizingClasses[className];
            }
        });
    });
}

// Initialize function on page load
document.addEventListener('DOMContentLoaded', applyBoxSizingStyles);
