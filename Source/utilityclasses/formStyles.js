// Form Styles Mapping
const formStyles = {
    'focus-within': { property: 'outline', value: '2px solid #000' },
    'from-black': { property: 'backgroundColor', value: '#000000' }
};

// Function to dynamically apply form styles
function applyFormStyles() {
    const elements = document.querySelectorAll('*');

    elements.forEach(element => {
        element.classList.forEach(className => {
            if (formStyles[className]) {
                const { property, value } = formStyles[className];
                element.style[property] = value;
            }
        });
    });

    // Handle focus-within by adding/removing classes dynamically
    document.querySelectorAll('.focus-within').forEach(element => {
        element.addEventListener('focusin', () => {
            element.style.outline = '2px solid #000';
        });
        element.addEventListener('focusout', () => {
            element.style.outline = 'none';
        });
    });
}

// Initialize function on page load
document.addEventListener('DOMContentLoaded', applyFormStyles);
