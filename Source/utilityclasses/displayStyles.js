// Display property mapping
const displayStyles = {
    'block': 'block',
    'hidden': 'none',
    'inline': 'inline',
    'inline-block': 'inline-block',
    'inline-flex': 'inline-flex',
    'inline-grid': 'inline-grid',
    'flex': 'flex',
    'grid': 'grid',
    'flow-root': 'flow-root'
};

// Function to apply display styles
function applyDisplayStyles() {
    // Select all elements
    const elements = document.querySelectorAll('*');

    elements.forEach(element => {
        element.classList.forEach(className => {
            if (displayStyles[className]) {
                element.style.display = displayStyles[className];
            }
        });
    });
}

// Initialize function on page load
document.addEventListener('DOMContentLoaded', applyDisplayStyles);
